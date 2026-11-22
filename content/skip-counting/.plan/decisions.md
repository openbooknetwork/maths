# Decisions of `skip-counting`

The state of each step of `agents/overseer.md`, and each decision with its reason.

## State

- Research: `research.md` from 24 sources read in files, two copies of Singapore's syllabus unread.
- Terms: `terms.md` written, 12 glossary rows and 9 rules, no existing sense changed.
- Engine design: the brief has its "Engine" part: `line/line` with sized jumps, `mixed`, `count`, `groups` and the
  goals `land-on` and `few-jumps`, a new scene `line/square` for the hundred square, and two kit changes. One author
  builds `line` section by section.
- Section plans: four written. 010 has 3 pages and a world page, 020 has 2 pages, a world page and a challenge,
  030 has 3 pages and a challenge, 040 has 3 pages, a world page, a challenge and the end page.
- Order: the checks pass with one fault sent back: `fives` 310 and 320 repeated the forward and back actions of
  `twos`, now one page.
- Final brief: written with the points of the digest and of the terms report settled below.
- Brief: drafted on 2026-11-19 from `specs/stories/skip-counting.md`. The user said "build them let's go", which is leave to run every
  step without a stop, with each choice recorded here.

## Decisions

- `story.yaml` has `draft: true` until the story is built and read.
- Tens come before fives: Oak teaches tens first and explains the fives through them, and the US counts by tens in
  kindergarten.
- Each count goes forward and back in its own section: Oak teaches every step both ways.
- No count on a page takes more than ten jumps: England counts up to 10 multiples in Year 1. The rough map's twelve
  pairs and thirty jumps of two are out.
- Hundreds from any start stay: the US standard names no start, and England reaches other starts as 100 more.
- The word "multiple" comes in with the fives: every English source names the numbers a count lands on that way.
- The coined control name "Jump size" stays, decided in the user's place, unless the engine labels it otherwise.
- The control keeps the engine's name "Size of a jump", from `fact-families` page 330, over the terms agent's coined
  "Jump size". The glossary row follows.
- The fives light the whole count on the hundred square at once: filling two columns takes 20 jumps, and a page has
  ten at most.
- Only `twos` has separate pages for counting forward, back and from another start. The later counts do them on one
  page or on the hundred square, so no page repeats an action with new numbers.
- "Digit, last digit" comes in `tens` page 220 and "Size of a jump" on page 620, earlier than `terms.md` lists
  them: the plans need them there.
- Pages written for all four sections, 2026-11-19. The checks wait on the `line` fields `count`, `groups`, `size`,
  `back`, `most`, the jump `segment` and the scene `line/square`.
- Page 420 says why a jump of 100 keeps the last two digits by counting on in ones from 863, as page 220 does for
  tens: the plan gave the rule with no reason, and the same reasoning keeps the sections alike.
- Page 810 leaves out the plan's `4 × 5` and "comes back to odd and even" to stay in budget: both are previews.
- Challenges 720 and 730 work cases the goals cannot draw: 50 back to 25 in fives, and 8 to 528.
- Engine step 1, `line` 010 `twos`: built 2026-11-19 with 161 tests passing, and sent to the verifier. Step 2 started.
- Engine step 2, `line` 020 `tens` with `line/square` and the goal `land-on`: built 2026-11-19 with 178 tests passing, and sent to the verifier.
- Engine step 2 verified 2026-11-19: pass, with the box of 40 hidden beside 41 on 620, the square cell at 26.8px against 32px, and a small number on the point disc sent back with step 3.
- Engine step 3, `fives`: built 2026-11-19, `groups: hands` being the new part. It is small, so it is verified together with step 4.
- Engine step 4, `hundreds`: built 2026-11-19 with 192 tests passing, and the whole story builds. Steps 3 and 4 went
  to the verifier together.
- Review: four section reviewers dispatched at once with the verifier, since the engine draws every scene and a
  reviewer edits texts only.
- Page 420 reasons by ten jumps of 10, each keeping the last digit, as page 220 does one place down: the reviewer
  replaced the count in ones, which asked the reader to trust 100 numbers. The plan's 420 part takes that reason.
- Reviews of `tens`, `fives` and `hundreds` done 2026-11-19, every page changed, all within 210 words.
- Review of `twos` done 2026-11-19. All four sections are reviewed. A count page's other button worked before any jump, sent to the engine author.
- Engine steps 3 and 4 verified 2026-11-19: every page opens and both challenges solve. Left for the author: the box
  of 40 beside 41 on 620, tests for a size change and the compact boxes, the flat's spoken name, a doubled label 1000,
  small print on the pack.
- The square's cells are 28.7px on 210 and 29px on 220, against the brief's 32px: the page's height sets them, and
  they are kept.
- A jump taken back takes its group away on every page, as on 310: page 410 promised a dashed flat, and its text and
  plan now follow the engine.
- On a count page the first press picks the way, and the other button takes back after that: 120, 420 and 610 rest
  on it, so the reviewer's wish for the other button to rest before a jump is not taken up.
- The box of 40 beside 41 on 620 is fixed: where two boxes crowd, the box that ends a run of one size stays.
- Audit 1, 2026-11-19: faults. Decided in the user's place:
  - Pages 420, 430 and 730 ask the reader to say numbers like 863 and 903, and nothing taught how to read them. Page
    420 now says how a number past 100 is read, hundreds first, and that 903 has no tens. Reading a number to 1000
    belongs to `hundreds-and-thousands`, so this is a reading guide and the place value stays there.
  - Challenge 710 was 720 without the fives, the same goal and controls: 710 is dropped, and 720 takes its point
    that you count the jumps and not the marks. Section `tens` has no challenge.
  - A challenge could be solved by pressing Jump and Check in turn. A wrong Check now takes the jumps back to the
    start, with a note on whether the point fell short or went past, so the reader counts again.
  - Page 430's line runs to 1000, so ten jumps of 10 squeeze into 30px on a phone. Its line is shortened.
  - Smaller: 110 names skip counting in its first part, 210 drops the "Jumps" readout and the "dashed tile", 610
    names the number at the point the same way on a phone and a wide screen, 620 has 7 loose pencils so the jumps no
    longer match the box of ten, and the header lead of the line and the square holds on every page.
- The audit's engine changes are in, 210 tests: a wrong Check restarts the jumps with a note on how far off the
  point was, each page has a header lead that fits it, and the square shows the "Start" stepper only where `start`
  is written as a stepper. Page 220 now writes `start: { stepper: [0, 100], start: 3 }`.
- Audit 2, 2026-11-19: every audit 1 fix holds. Decided in the user's place:
  - 720 and 730 promised a note on how far off the point was, and the note says short or past: the texts say that.
  - 730 can draw counts back across a hundred in tens, as 616 to 76 does: 430 now says counting back in tens crosses
    a hundred the same way, 10 less than 600 is 590, and drops its second example, 520 to 820.
  - 420 now says the 8 turns into a 9 at 903, the step that makes the hundreds go up by one.
  - 810 says four groups of 5, as the figure lays them out. 130 names the start ring where the reader meets it.
  - The start ring's drag gets a lens on a phone, 210's lead leaves out the tap, and 720's hint words a count of two
    jumps on its own: sent to the engine author.
- Cover from page 610, five bikes in a rack over the line with the point on 10, made 2026-11-19. Audit 3 started after the engine's last three fixes (212 tests).
- Audit 3 stopped at the spend limit, 2026-11-19 12:19, with its work saved. Resume the same auditor.
- Audit 3, 2026-11-19: every audit 2 fix holds. Four faults, decided in the user's place: 210's example says "Start
  at 0" and the figure part names the round marker; 420 says to think of a 0 before a start below 100, as 220 does;
  730's count line after a solve fits a phone and 410 keeps the box of 900 beside 1000, sent to the engine author.
- Audit 4, 2026-11-19: every audit 3 fix holds, and the engine's scaled view broke no page. One fault left, 730's solved figure scaled to 0.56 on a phone, sent to the engine author. The story passes once its text sizes are back near 11px.
- 730's solved figure stays at scale 1 on a phone, labels near 13px: the line keeps room only on the side its count goes. Skip counting's engine work is done, 217 tests, 2026-11-19. The story passes its audits and waits for the user to read it.
- Page 430 is "The bigger the jumps, the fewer you need", 2026-11-21: "a bigger jump needs fewer jumps" used "jump" for a size and for a move in one sentence. Its URL follows the title.
