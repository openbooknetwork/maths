# Decisions of `number-line`

The state of each step of `agents/overseer.md`, and each decision with its reason.

## State

- Draft brief: written on 2026-11-16 from `specs/stories/number-line.md`. The user asked for the story to start and
  reads the brief at step 4.
- Research: `research.md` is written from 19 sources read in files. Every section has a source for its order and
  for its errors. Four addresses are unread, and no section rests on one of them alone.
- Terms: `terms.md` is written, and `agents/glossary.md` gained 19 rows and 4 rules. No existing sense changed.
- Final brief: agreed by the user on 2026-11-16, with the points of the digest and of the terms report settled
  below. `steps` keeps the steps of five and of two.
- Engine design: the brief has its "Engine" part, one scene `line` with looks, three goals and a build order.
- Section plans: the five plans are written, 14 teaching and world pages, three challenges and the end page.
- Order: the four checks pass on the Headers, with one fault sent back, the number 16 in both 410 and 530. The
  user said "let's go full" on 2026-11-16, which I read as leave to go on without a stop at this step.
- Pages: all 20 are written to their Contracts. `kitap check` reports only the unknown scene `line` and its links.
- Engine: hesap's source is linked (`package.json` has `file:../hesap`). All five sections are built, with the
  goals `place`, `place-two-labels` and `place-unmarked`. The verifier passed all five in six
  passes, against seven for the two scenes of `more-and-less`. `kitap check number-line` prints `ok` and the story
  builds in the real book.
- Review: all five sections are reviewed, and every text changed. `kitap check number-line` prints `ok`. The two
  dash sentences (320, 810) and the lens sentence (420) are settled.
- Outstanding, for the user: the folded text card under a figure keeps the values it opened with, in every family.
  The cause is in kitap: `renderPeek` (`kitap/src/app.js:159-165`) copies the first paragraph once, before the
  engine shows. The author proposes a `host.refreshPeek()` that hesap's `live` calls. Released stories have it too.
- Audit, first pass: `faults`, eight of them. The maths and the readouts hold in every state, and the challenges
  hide their answers. Seven faults are taken and one waits for the user:
  1. Show on an unmarked line wrote the nearest whole number on the point, so 8 stood at two places. Engine, and
     the texts of 510, 520 and 620.
  2. Page 530 let the reader walk the estimate mark onto the point. Engine and plan of 050.
  3. No page shows unequal gaps, which the sources name as an error. A new page of 010, for the user to decide.
  4. Page 310 repeats page 220. Plan of 030.
  5. Challenge 720 drew its ends as long marks without labels. Engine.
  6. Page 320 argues about 30 on a line from 40 to 60. Plan of 030.
  7. The bracket has a notch the text leaves unexplained. Engine.
  8. Page 620 uses "halfway between the middle and the back", which no section taught. Plan of 050, on page 520.
- The seven faults are fixed: the engine changed, the plans of 030 and 050 changed, seven pages were written
  again and reviewed, and the plans of 010, 020 and 040 say what was built.
- Audit, second pass: `faults`, one. On page 530 the estimate mark hides on an end mark at 10 and at 20. The
  author holds it. The seven changes hold.
- Fault 3 of the first audit: the user chose on 2026-11-16 to add the page, "this is foundational". Page 150, "A
  number line needs equal gaps", is planned, written, built with the field `moved` and the link `gaps`, verified,
  reviewed and audited. The story has 21 pages.
- The verifier passed the estimate mark, which now stands above the end marks, and the auditor reports `pass`
  for the story with page 150 in it, on its fifth pass. The verifier reports `pass` on the engine.
- Cover: made from page 110, the frog on the bank beside the stones. `story.yaml` has it and `draft: true` is gone.
- Kit: `another` and the Check string and button moved to hesap's kit during the build. The lens stays in `line`
  until a second family needs it, and the ruler of `centimetres-and-metres` is the likely one.
- Next, for the user: the hesap release with the family `line`, then `package.json` back to the released version,
  `kitap upload --story number-line` for the cover images, and the book's release.

## Decisions

- The family is `line`, as `specs/hesap-for-beginner-stories.md` names it. The rough map says `axes`
  `number-line`, which is the prototype scene.
- The world pages sit with the sections they apply: the street with `placing` at 610, since its doors are labels
  on a few marks, and the book with `estimating` at 620, since its edge is a bare line.
- The opening is a track: stepping stones numbered from 1, with the frog on the bank. England and NCETM put the
  track before the line, and a track numbers its squares from 1. The rough map had the frog on stone 0.
- `in-order` teaches that a jump crosses one gap. The sources report readers who count the marks in place of the
  gaps, and the jump is where a gap is counted.
- `steps` keeps the steps of five and of two, after the step of ten. The sources teach these lines with skip
  counting, which the reader has not met. The section reads the step from two labels and asks for no count by
  heart. The story `skip-counting` teaches the counts and uses the line.
- `part-of-the-line` gives "the ten before, the ten after". England's Year 2 names the previous and next multiple
  of ten, and the form follows the glossary's "the number before, the number after".
- `estimating` opens on 0 to 10 before 0 to 100, as England orders it, and marks the middle first, which is the
  advice against bunching the larger numbers.
- `placing` and `estimating` stay two sections. England teaches both under one criterion, and the Show button and
  the middle are learned on marks before the marks go.
- The line shows places in the count. The United States teaches it as lengths from 0 after rulers, and this book
  has rulers later, in `centimetres-and-metres`.
- The terms report's wordings are taken: "jump" for hop, "unmarked line" for bare line, "the number after",
  "equal gaps", "estimate" and "estimate mark" for guess and ghost mark, "where the number is" for what Show
  reveals, and "middle".
- The glossary's "Introduced in" keeps the first story for "the number before, the number after" and "in order".
  `number-line` needs only `counting`, so `in-order` teaches both again.
- 0 is no ten: "ten (numbers)" stays 10 to 100. The pages of `part-of-the-line` ask for the ten before of numbers
  above 10, so no text has to call 0 a ten.
- `in-order` leaves out "counts in ones". `steps` says the line of `in-order` has a step of one, in the words of
  the term "step".
- A line with gaps under 8px shows a lens above the point, which draws about ten gaps at full size. A line from 0
  to 100 in ones has gaps of 3.5px on a phone. The street of 60 houses uses the same lens.
- Page 120 shows the stones over the marks as a still figure, with the bank over 0. The link shows at once, so
  the page needs no motion.
- Challenge titles are fixed and the goal line names the drawn target. hesap puts no drawn number in a title yet.
- The second point of a page differs in shape as well as colour, and each point shows its number.
- The "Engine" part took what the plans added: the goals answer Check alike and show the point's number while
  they hold, `point: false` on page 310, `readout` on the stones looks, `middle: button` on 730, and a right end
  of 100 or below for `place-two-labels`, since the reader counts to 100.
- Page 410 places 14 in place of 16. Page 530 keeps 16 on a line from 10 to 20, which is England's example.
- Pages 420 and 520 both have the Middle button. 420 counts gaps from the middle on a marked line, and 520 has
  the reader judge the middle by eye and then check it.
- Unequal gaps are told in the text of 120 and 130. The scene draws equal gaps only, and no field is added.
- The rough map has 21 pages, and several repeat "drags the point" on new numbers. Each section's coordinator
  merges pages that give the reader the same thing to do.
- Labels on a phone: every labelled mark keeps its label at 10px or more, 4px apart, and every other label drops
  to a second row where that fails. My first ruling, a 10px floor alone, made the labels of 0 to 20 touch.
- `another` moved from `counters` to hesap's kit, since `line` is the second family to use it.
- On a challenge the point's `aria-valuenow` holds its number, though the page hides it from sight. A reader who
  uses a screen reader has no other way to know where the point is.
- The Check string and button moved to hesap's kit, as `hesap_check` and `check()` of `kit/panel.js`.
- `cards: true` shuffles the cards, since the order of the blanks reads the answer off the row.
- The label cards take a keyboard: Enter picks a card up and lays it, and Left and Right move it between the
  boxes. `../hesap/AGENTS.md` asks nothing of a keyboard, and the point and the gaps of `line` already take one.
- The texts name the jump buttons by their words, Jump left and Jump right, as the figure labels them. The + and −
  of page 530 are the estimate stepper's.
- A wrong Check says "to the left of the number" and leaves the target out. The goal line names it already.
- On an unmarked line the point carries no number after Show. The auditor found 8 written on a point at 7.6,
  beside the flag of 8.
- The estimate mark of page 530 shows on Show alone, and the estimate starts at the middle, 15. With the mark
  following the stepper, the reader found 16 by trial, in the small steps the sources warn of.
- The ends of challenge 720 are short marks while they carry no label, as page 220 taught long marks.
- The bracket is drawn plain. Its notch read as one more mark.
- A screen reader hears where the point stands on every page, the challenges too: the number on a marked line,
  "between 7 and 8" on an unmarked one. The verifier proposed a share of the line on 730. A share of a line from
  0 to 100 is the number itself, and 710 and 720 already give the number.
- Page 150: the marks of 4 and 7 start 0.4 of a gap off their places, and a dragged mark stops where two labels
  would come closer than 10px on a phone. At a fifth of a gap the labels of 4 and 5 read as "45". `moved` takes a
  line to 12 at most for the same reason.
- By keys a settled line of page 150 stays settled, since one key step lies inside the band where the marks
  settle. Putting the marks right works by keys.
- Page 330 draws its line. The user asked on 2026-11-17 for the reader to be able to draw a new one, since the
  page was spent once its five cards were placed. It follows page 440 of `more-and-less`: the page opens on a
  draw, the button New line draws again, and the text works the line from 25 to 55 apart from the line on show.
- Page 510 is now `estimate-where-a-number-is`, "Estimate where a number is", and its text opens with the task.
  The user did not see the point of "Every number has a place" on 2026-11-17: the title stated a fact, and the
  page's job is a first estimate on a short line. The user kept the page, since England estimates on 0 to 10
  before 0 to 100.
- The example in the text of 330 is the line from 70 to 100 labelled at 95 and 100, with the card 94. A draw never
  labels the right end, so the example cannot appear on the figure. With 35 and 40 it did, on about 1 open in 42.
- Page 510 says the line "has no marks between its ends to count". It had "no gaps", and by page 120 a line with
  two marks has one gap.
- Challenge 720 draws its step first, each of 2, 5 and 10 a third of the time, and then a left end. The user saw
  a step of 2 nearly every time on 2026-11-17: the draw picked over all 38 lines, and 26 of them have a step of 2.
  The test now checks how often each step comes. Challenge 730 keeps its pick over every pair of ends, where the
  left ends come 32, 27, 22 and 18 times in 100, since no kind of line is taught there.
- Challenge 730 was too hard to do by eye, as the user found on 2026-11-17 ("impossible to solve by a human"). A
  line from 30 to 100 with the target 89 asked for a middle of 65 and a place within a twentieth of the line,
  about 15px either side on a phone. The twentieth and the odd ends came from the rough map, the verifier tried
  it by computing the pixel, and nobody tried it by eye. Now the ends are 40, 60, 80 or 100 apart, so the middle
  is a ten, the goal holds within a tenth, and the goal line says "close to". A challenge is tried by eye and by
  hand before it passes.

## Cost

The tokens each step's agents used, as a baseline for the next story. The overseer's own session is left out.

| Step | Agents | Tokens |
|---|---|---|
| Research | 1 | 155k |
| Terms | 1, resumed once | 78k |
| Engine design | 1 | 147k |
| Section plans | 5, one resumed | 459k |
| Pages | 5 | 179k |
| Engine | 1 author over five sections, 1 verifier over five passes | not reported per pass |
| Review | 5 | 290k |
| Audit, five passes | 1, resumed four times | 220k |
| Page 150 | coordinator, writer and reviewer of 010 | about 120k more |
| Fixes after the audit | 2 coordinators, 2 writers, 2 reviewers, all but the writers resumed | about 250k more |
