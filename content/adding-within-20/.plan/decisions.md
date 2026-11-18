# Decisions of `adding-within-20`

The state of each step of `agents/overseer.md`, and each decision with its reason.

## State

- Brief: written on 2026-11-17 from `specs/stories/adding-within-20.md` and the user's three rulings below. The user
  said "start full story I'm off to bed", which I read as leave to run every step without a stop at the brief or
  at the Headers. The user reads the story when it is built.
- Research: `research.md` is written from 21 sources read in files. Five addresses are unread, and each point was
  found in another source.
- Terms: `terms.md` is written, and `agents/glossary.md` gained 23 entries and 8 rules. No existing sense changed.
- Final brief: the points of the digest and of the terms report are settled below, in the user's place.
- Engine design: the brief has its "Engine" part. A new scene `counters/add` with two ten frames, the written
  line in hesap's kit for both families, the fields `start` and `written` on `line`, `written: difference` on
  `counters/match`, and the goals `make-sum`, `jump-to` and `take-to-leave`.
- Section plans: the five plans are written, 15 teaching and world pages, three challenges and the end page.
- Order: the four checks pass on the Headers, with one fault sent back, 8 + 5 = 13 on both 130 and 520.
- Pages: all 21 are written to their Contracts. `kitap check` reports only the scene `counters/add` and the new
  fields, which the engine does not have yet.
- Engine: built by two authors. `add-author` built the kit's written line, the scene `counters/add` for 010, 020
  and 050 with the goals `make-sum` and `take-to-leave`, and `written: difference` on `counters/match`.
  `line-author` built `start`, `written` and the goal `jump-to`. The verifier passed the whole engine in four passes, with
  two faults on the way, a missing style for the lit written line and a missing test of page 430. `kitap check adding-within-20` prints `ok` and the story builds in the real book.
- Review: all five sections are reviewed, and every text changed. `kitap check adding-within-20` prints `ok`. The
  dash sentences of 520, 530, 620 and 810 are settled: the steps are written as plain numbers and the readouts
  named in words.
- Audit, first pass: `faults`, ten of them. The maths holds on every page and in every state, and each figure
  matches its text. The faults are about what the pages ask of the reader:
  1. Challenge 730 was solved by counting the counters left. A new goal, plan of 050 and engine.
  2. Challenge 710 was solved by a full ten and some more, the idea of `number-bonds`. A new goal, plan of 010 and
     engine.
  3. Page 430 gave "fewer counts" as the reason to count on, which fails for 20 − 8. Plan of 040.
  4. Page 610 gave the answer before its question. Text.
  5. Page 410 gave the written line of a difference with no reason. Plan of 040.
  6. No page meets the reading of = as "the answer comes next". That is the story `equals-sign`. One sentence of
     page 120 that fed the reading is changed.
  7. Page 320 promised counting on from a page that pairs. Text, fixed.
  8. Page 620 had the figure of 520 with one stepper, and the reader watched. Plan of 050 and engine.
  9. Page 420 compared two rows its figure did not show. The page is dropped, and 410 carries its point.
  10. The missing part as a meaning of subtraction has no page. That is the story `fact-families`.
- The eight faults are fixed. The three plans changed, page 420 is deleted, pages 410, 430, 610, 620, 710 and 730
  were written again and reviewed, and the engine has the goals `find-sum` and `steps-to-ten`, the seed packet,
  the light on the pairs and the limit on the second point. The verifier passed the changes. The story has 20
  pages, and `kitap check adding-within-20` prints `ok`.
- Audit, second pass: `faults`, three. Seven of the eight changes hold, and challenge 730 is judged reached by
  knowing. The three: on 610 the answers 7 and 3 were the opening numbers 3 and 7 swapped, every draw of 710 was a
  pair within 10 that `number-bonds` taught, and 320 named a page by half its title. All three are fixed in the
  pages and the plans, and the author widens `find-sum` for a first number past 10.
- The two small engine points are done: the paired counters of 410 take a thick accent band, and on 430 a touch
  goes to the nearer of the start and the second point.
- Cover: made from page 120, the frames with 5 round and 3 square counters over 5 + 3 = 8. `story.yaml` has it and
  `draft: true` is gone. The plans of 010, 020, 030 and 050 carry a note of what was built and reviewed.
- Audit, third pass: the three fixes hold, and one fault of order was left, which is fixed: the two counting on
  challenges are swapped. The story passes with that order.
- The challenges are now 710 `jump-from-the-start`, 720 `find-the-sum-before-the-counters-appear` and 730
  `find-the-two-steps-of-making-ten`. Every line above this one that names 710 or 720 uses the old numbers.
- The verifier passed the last four engine changes. The story is built, verified, reviewed and audited.
- Next, for the user: read the story on a phone, then the hesap release with both stories' engine work,
  `package.json` back to the released version, `kitap upload --story adding-within-20` for the cover images, and
  the book's release.

## Standing in the way of a release

- `package.json` points at `file:../hesap`. hesap holds the family `line` of the story `number-line`, staged and
  not committed, and this story's engine work lands on top of it. A hesap release is an npm publish and waits for
  the user's word, so both stories go out with one release.

## Decisions

- The user ruled on 2026-11-17: "no need for number line as dep". The story keeps its Needs, `number-bonds` and
  `more-and-less`. Its pages with a number line start from one page that says what the line and a jump are.
- The user ruled: "don't teach things again, but have a page that goes over the logic if it's needed for the
  current book". The rough map repeated pairing rows (`more-and-less` 230, 240), counting on and back (`counting`
  060, 070, 140) and a full ten (`number-bonds` 140, 170). Each gets one page that goes over it, and the section's
  other pages add what is new.
- The user ruled: "yes give + and - their own pages". The rough map wrote 4 + 3 = 7 from its third page with no
  page for the signs.
- The rough map calls a difference "the gap". "Gap" belongs to the number line since the story `number-line`, so
  the brief says "difference", which `more-and-less` taught.
- The rough map has 22 pages. Each section's coordinator merges pages that give the reader the same thing to do.
- Taking away comes before the difference, and the missing part stays with `fact-families`. NCETM gives the
  missing part first. IM, the United States and Japan start from taking away, and `fact-families` has the missing
  part as its own section.
- `difference` stays before `making-ten`, as IM has it. NCETM teaches the difference after bridging ten. The
  difference needs counting on, which is the section before it.
- A first joining and a first taking away come before their signs, as NCETM orders it.
- The first sums and subtractions stay within 10, as NCETM and IM keep them. The brief had 12 − 5.
- Counting back subtracts 1, 2 or 3. The progression calls counting down "difficult and error-prone", and the
  difference counts on.
- Counting on starts from the first number. The greater number first needs the order to be free, which is the
  story `any-order`.
- Subtracting across ten goes down to ten, the first way in NCETM, Oak, IM and the US standard. Taking from the
  ten stays out: it needs an addition inside a subtraction and a term of its own.
- A sum such as 12 + 5 is on the page of `making-ten` that goes over a full ten and some more. England, Japan and
  IM teach these sums with this subject, and the page shows the ten that stays full before the ten that fills.
- The terms report's wordings are taken: "sum" and no "total", "what is left", plus and minus as the readings of
  the signs, join and take away for groups and add and subtract for numbers, "the rest", "the greater minus the
  less", "written line" and no "equation", and one written line for each step of making ten.
- `number-bonds` has no terms file. The terms agent fixed the forms of its terms in the glossary, and that story's
  texts are checked against them when it is next opened.
- A new scene `counters/add` in place of `bonds`. `bonds` splits a fixed whole and names its readouts by a colour.
- The second group of a frame is square and stands after the first, and taken counters leave a dashed ring, so no
  two groups differ by colour alone. Steppers are named "First number", "Second number" and "Taken away".
- The written line gets "= answer" once the figure shows the answer, and a challenge shows its lines once its
  goal holds.
- The dice of the opening page give sums to 12, past the "within 10" of section 010. The page writes no sum.
- Challenge 720 uses the jump buttons, where a press against the last jump takes it back. The rough map had an
  Undo button.
- Challenge 720 names a calculation and shows no target. With a flag on the target the reader reached it by
  pressing Jump until the point met the flag, and a start up to 9 away counted back past the limit of 3.
- Page 420 has the reader tap counters away, the action of page 210. It stays, since the section's point is one
  written line for two questions, and the reader makes the same line 11 − 7 = 4 a second way.
- Page 130 ends on a sum past 10 other than 8 + 5, which is the example of page 520.
- The seed tray of 620 only sows. The brief had seedlings sown and moved out, and a page of `counters/add` adds or
  takes away.
- The end page 810 shows 8 + 5 = 13 with its steps on two steppers. The rough map turned it into 13 − 5 = 8 with
  two buttons, which the scene does not have.
- The dice of 110 are real and can throw 11 or 12. NCETM advises pictures of dice to stay within 10. The page
  writes no sum, and a throw past 10 shows as a full ten and some more.
- The chip of the shelf's first written line is named "Jars sold", beside "Jars left". The plan had "Written
  line".
- On the shelf a tap anywhere on the shelf sells its last jar and a tap on a crate puts its last jar back, since
  a jar is 33 by 36px on a phone.
- The seed tray takes steppers alone. The brief's table gave it pots for waiting sprouts and for seedlings taken
  away, and page 620, its one page, sows with a stepper.
- Challenge 710 writes an addition with no answer and no counters, and the reader sets the sum. Making a drawn
  number from two groups was solved by 10 and some more, with no sum worked out.
- Challenge 730 draws an addition or a subtraction that crosses ten, and the reader sets its two steps. Taking
  counters away until a number was left was solved by counting.
- Section 040 has two pages. Page 420 is dropped: it had the tap of page 210 and compared rows its figure did not
  show. Page 410 says why the counters left over are the greater minus the less.
- The seed tray of 620 takes a packet of waiting seeds, which the reader sows into the cells. With one stepper the
  reader watched the figure of 520.
- The reading of = as "the answer comes next" and the missing part of a subtraction get no page here. The stories
  `equals-sign` and `fact-families` have them as their subjects.
- On challenge 730 the frames show the counters of the first number before Check, so To ten can be read off the
  frame. That is reading a ten frame, which the section teaches, and the rest still comes from splitting the
  second number.
- The examples in the text of 730 are 9 + 2 and 11 − 2, which the page cannot draw. The plan's examples, 9 + 4
  and 16 − 9, were in the draw, so the text gave the answer for those draws.
- Page 610 sells 5 jars in the afternoon. With 4, 3 + 4 = 7 and 10 − 7 = 3 gave the two numbers the page opens
  with, so the reader could say the answers from the screen.
- Challenge 710 draws a first number from 9 to 15 and a second from 2 to 4. A sum within 10 is a pair of
  `number-bonds`, and past 10 with a small second number the way to the sum is counting on.
- kitap lights a link only on a screen 901px wide or more. The text of 410 names the pair lines and the rings,
  which the figure always shows, so it stands without the light.
- The challenge on the number line comes first, at 710, and the sum with nothing to see second, at 720. Both count
  on, and the line with its labels and arcs is the easier of the two, so the count leaves the line after it.
  The brief and the plans of 010 and 030 carry the new numbers.

## Cost

The tokens each step's agents used. `number-line` took about 2.7M in all.

| Step | Agents | Tokens |
|---|---|---|
| Research | 1 | 184k |
| Terms | 1 | 91k |
| Engine design | 1 | 274k |
| Section plans | 5 | 550k |
| Pages | 5 | 228k |
| Engine | 2 authors, 1 verifier | not reported while they stay open |
| Review | 5 | 388k |
| Audit, three passes | 1, resumed twice | about 230k |
| Fixes after the audit | 3 coordinators, 3 writers, 4 reviewers, most resumed | about 560k more |
