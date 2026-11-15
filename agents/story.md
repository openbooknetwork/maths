# Planning and building a story

For whoever plans a story or builds its pages.

## Where the project stands

The stories in `content/` are prototypes. Each was built to find out what the maths engine needs, and the release
replaces them. Three things follow.

- `specs/initial-release.md` is the plan for the release. Read it before planning or writing a story. It
  defines `level`, `follows`, the shape of a story, world pages, challenges, the order of release, the chains and
  the intermediate and advanced stories.
  `specs/subject-candidates.md` lists the subjects school curricula teach, each with its level and the curriculum
  that decides it. A subject takes the level of the curriculum that teaches it last. `specs/beginner-subjects.md`
  lists the 60 beginner subjects, and `specs/stories/<id>.md` plans each one page by page.
  `specs/hesap-for-beginner-stories.md` lists the scenes and features hesap lacks for them.
- Every story runs on hesap, the maths engine. The book installs it from npm (`@openbooknetwork/hesap`), and its
  source is in `../hesap`. A new need goes into the hesap family that is closest, as a new scene, or into a new
  family, and reaches the book with a hesap release. To try a change before a release, link the source with
  `npm install ../hesap` and put the released version back before a commit.
- `content/constructions` is a draft (`draft: true` in its `story.yaml`), so a build leaves it out. Its engine,
  `plugins/engines/compass`, is the one prototype engine that is not in hesap, kept until the story is taken up
  again.

## How a story is built

1. The plan in `specs/stories/<id>.md` lists the story page by page.
2. Every page gives the reader its own action, as "The shape of a story" in `specs/initial-release.md` asks. Write
   each page's action as what the reader does and what the figure does in reply, with the objects and the numbers
   left out, such as "tap an object, and it takes the next number" or "press + or −, and a marker moves one place".
   Two pages whose actions read the same become one page, and the plan's table changes with them. The challenges
   reuse the story's actions, because their new part is a drawn target and a Check. This step is done when every
   page outside the challenges has an action no other page has. The contract keeps those actions.
3. A contract fixes, for each page, the scene and its fields in `page.yaml`, the ids the text can link, and what
   each challenge draws. The text and the engine work start from it.
4. The text and the engine are written side by side. The text needs no engine, and the engine needs no text. A
   story whose scenes exist has no engine work.
5. The story is checked as "Checking a story" says.
6. What the story added to the engine is looked over for parts that belong in hesap's kit or in kitap. A part
   moves there when a second family or a second engine would use it, then that library is released and the
   story is checked again on the release.
7. The user looks at the story on a phone.

Stories are built a family at a time. The story that asks the most of a family comes first, and the family's other
stories follow in parallel.

## Stories and families

A page names a scene under the `hesap` key as `<family>/<scene>`, such as `scene: counters/bonds`, and that family
draws it. A family whose one scene has its own name is named alone, such as `scene: venn`. A family lives in
`../hesap/src/families/<id>/`.

| Story | Family | What the family offers |
|---|---|---|
| `number-bonds` | `counters` | counters dragged between parts, ten frames, a cup, drawn challenges |

`counters` is the family to read first, beside hesap's `src/kit/`. Its `index.mjs` holds the schema and checks, and
its `client.js` builds the panel from the kit.

The other 15 stories in `content/` are drafts from the prototype phase. Their families (`geo`, `axes`, `graph`,
`wave`, `linear`, `chance`, `machine`, `parts`, `grid`, `venn`, `balance`, `network`, `proof`) live at the tag
`prototypes` of hesap, and a family comes back with the first released story that needs it.

## Checking a story

1. `./node_modules/.bin/kitap check <story>` reads the pages, texts and images and prints every problem it finds.
   A story is ready when it prints `ok`.
2. `./node_modules/.bin/kitap dev --story <story> --out .cache/<story>-site --port <port>` builds that story alone
   and serves it. `./node_modules/.bin/kitap build --out <dir>` builds the whole book.
3. `node scripts/screenshot.mjs http://localhost:<port>/<story>/ <out dir> <page ids>` captures pages and prints
   their console errors. `SHOT_W=390 SHOT_H=780` captures a phone, `SHOT_EVAL=<script>` runs in the page before
   each shot, and `SHOT_AFTER=<ms>` waits after it.
4. Look at the captures, wide and at phone size, and try each interaction with real input.

## Covers

A story's cover is one of its own figures. `story.yaml` names the page and a caption under `hesap`, as
`cover: { page: <page id>, caption: <what the figure shows> }`, and `node scripts/cover.mjs <story>` captures that
page's figure on a light and on a dark screen, adds both as images of the story and writes `cover:` and
`cover_dark:` in `story.yaml`. A reader sees the one that fits their screen, and a link preview shows the light
one. The script runs again after the figure changes. A build that shows a cover on this machine takes `--local-assets`.
