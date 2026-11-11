// Download the official maths curriculum documents that specs/subject-candidates.md names.
//   node scripts/fetch-curricula.mjs [--only england,japan]
// Writes .cache/curricula/<name>.pdf and prints one line per file. A file that is already there is kept.
import fs from 'fs';
import path from 'path';

const SOURCES = {
  'england-ks1-2': 'https://assets.publishing.service.gov.uk/media/5a7da548ed915d2ac884cb07/PRIMARY_national_curriculum_-_Mathematics_220714.pdf',
  'england-ks3': 'https://assets.publishing.service.gov.uk/media/5a7c1408e5274a1f5cc75a68/SECONDARY_national_curriculum_-_Mathematics.pdf',
  'england-ks3-guidance': 'https://assets.publishing.service.gov.uk/media/621629ac8fa8f5490d52ee78/KS3_NonStatutory_Guidance_Sept_2021_FINAL_NCETM.pdf',
  // Singapore's own files answer 404 to a script, so its syllabus is read from the TIMSS country chapters
  'singapore-timss-2023': 'https://timss2023.org/wp-content/uploads/2024/10/Singapore.pdf',
  'singapore-timss-2019': 'https://isc.bc.edu/timss2019/encyclopedia/pdf/Singapore.pdf',
  'japan-course-of-study-2008-en': 'https://facultyweb.kennesaw.edu/twatanab/docs/COS2008.pdf',
  'japan-lower-secondary-guide-en': 'https://www.criced.tsukuba.ac.jp/math/apec/ICME12/Lesson_Study_set/JuniorHighSchoolTeachingGuide-Mathmatics-JP-EN.pdf',
  'japan-timss-2023': 'https://timss2023.org/wp-content/uploads/2024/10/Japan.pdf',
  'us-common-core-math': 'https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf',
  'us-common-core-grade6': 'https://ospi.k12.wa.us/sites/default/files/2022-12/mathstandards_grade6.pdf',
  'us-common-core-grade8': 'https://ospi.k12.wa.us/sites/default/files/2022-12/mathstandards_grade8.pdf',
  'france-cycle4-geometry': 'https://eduscol.education.fr/document/17305/download',
  'turkey-5-8': 'https://mufredat.meb.gov.tr/Dosyalar/202681491243620-Matematik%20(5-8)%20D%C3%96P.pdf',
  'finland-timss-2019': 'https://isc.bc.edu/timss2019/encyclopedia/pdf/Finland.pdf',
  'germany-bremen-primary-2025': 'https://www.lis.bremen.de/sixcms/media.php/13/2025_BP%20Mathematik.pdf',
  'china-2022-commentary': 'https://data2.ecnupress.com.cn/files/6709905e7dab6d/resource/9472205e9009f5/172611913661009.pdf',
};

const arg = name => process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : null;
const only = arg('--only')?.split(',') ?? null;
const out = path.join('.cache', 'curricula');
fs.mkdirSync(out, { recursive: true });
// Some of these sites refuse a client that names no browser
const headers = { 'User-Agent': 'Mozilla/5.0 (compatible; curriculum-fetch/0.1)' };

let failed = 0;
for (const [name, url] of Object.entries(SOURCES)) {
  if (only && !only.some(o => name.startsWith(o))) continue;
  const file = path.join(out, `${name}.pdf`);
  if (fs.existsSync(file)) { console.log(`kept    ${file}`); continue; }
  try {
    const res = await fetch(url, { headers, redirect: 'follow', signal: AbortSignal.timeout(120000) });
    if (!res.ok) throw new Error(`${res.status}`);
    const bytes = Buffer.from(await res.arrayBuffer());
    // A page that answers with HTML is an error page or a login, so it is reported and left out
    if (!bytes.subarray(0, 5).toString().startsWith('%PDF')) throw new Error(`answered with ${res.headers.get('content-type') ?? 'no type'}, a PDF starts with %PDF`);
    fs.writeFileSync(file, bytes);
    console.log(`ok      ${file} (${(bytes.length / 1e6).toFixed(1)} MB)`);
  } catch (err) {
    failed++;
    console.log(`FAILED  ${name}: ${err.message}\n        ${url}`);
  }
}
if (failed) console.log(`\n${failed} of the files did not arrive. Open the address in a browser and save the PDF as ${out}/<name>.pdf.`);
