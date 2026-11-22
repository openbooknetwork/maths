# Decisions of `fact-families`

The state of each step of `agents/overseer.md`, and each decision with its reason.

## State

- Brief: drafted on 2026-11-18 from `specs/stories/fact-families.md` and today's text rules. The user said "ok
  build it", which I read as leave to run the steps, with a stop to show the final brief and the Headers.
- Research: `research.md` from 25 sources read in files, two unread with nothing resting on them.
- Terms: `terms.md` written, five new glossary terms, no existing sense changed.
- Engine design: the brief has its "Engine" part: kit facts, `counters/add` extended, a new scene `counters/bar`, `line/line` extended. Three engine authors.
- Section plans: four written. 010 has 4 pages, 020 has 2 pages, a world page and a challenge, 030 has 4 pages, 040
  has 4 pages, a world page, two challenges and the end page.
- Order: the four checks pass, with two faults sent back. Page 430 of 040 and page 330 of 030 reused the family of
  9, 4 and 13, which is the example of 010 page 130.
- Pages: all 20 written to their Contracts.
- Engine: three authors. ff-counters built the kit's facts, `facts.js`, the looks `eggs` and `domino`, `cover`, and
  the scene `counters/bar` with the goals `bar-for-fact` and `bar-for-two`. ff-add built `whole`, `squad`, the goal
  `missing-part` and `undo` on `counters/add`. ff-line built the jump size and `undo` on `line/line`. The verifier
  passed all of it after faults on each part: the arc under the start ring, a lit egg, the facts in one column on a
  phone, "1 pips", numbers of narrow parts running together, a rebuild under the finger, the facts block shrinking
  the figure, and the frames of 710 changing size on done. The style of a number sentence in the text was lost from
  hesap since 2026-11-17, written into an assembled file. It is now in `src/kit/kit.css`.
- Review: all four sections reviewed, every text changed, `kitap check fact-families` prints `ok`.
- Audit, first pass: `faults`, twelve. The maths holds on every page. The faults are about what the pages ask of the
  reader. Sent back: 730 gave its answer away (engine and plan 040), 340 let nothing be checked (engine and plan
  030), 220 repeated 120 and 210 (plan 020), 610's outlined seats answered the question (engine and plan 020), the
  facts crushed on 720 and 730 with the text card open (engine), 140 differed from 130 only in numbers (plan 010,
  merged), "gap" untaught on 320 (plan 030), 410's counters too small and its red part changing (engine and plan
  040), and the words of four figure strings (engine).
- Final brief: written with the points of the digest and of the terms report settled below. The user said "build
  it" and does not want a stop at the brief or the Headers, so every step runs on, with each choice recorded here.

## Decisions

- `story.yaml` has `draft: true`, so a deploy of the book leaves the story out until it is built and read.
- The bike rack of the rough map is out: `number-bonds` has a car park with free spaces and `adding-within-20` a
  seed tray with free cells, and a later story uses new situations. A bar of chocolate takes its place in 040.
- Section 030 uses counting on to find a missing part and does not teach it again: `adding-within-20` page 430
  teaches it, and the user ruled on 2026-11-17 against teaching an idea again.
- Missing part before undoing: NCETM teaches the missing addend, outcomes 15 and 16, before the inverse, 17 and 18.
- Four facts, not eight: the facts with the whole before =, such as `13 = 9 + 4`, need the reading of = that
  `equals-sign` teaches.
- The swap of the parts is a pointer back to `number-bonds` page 050, which teaches it, not a new idea.
- Each section's first pages keep the whole within 10: IM keeps the first missing parts within 10 and gives the
  family task after experience within 10.
- The bar model comes in two steps, counters with a bar beside them, then the bar alone: NCETM, the Japanese lesson
  plan and Maths No Problem each go from objects to a bar in steps.
- Early pages give the bar ready made, and only the challenges ask the reader to set one: the Japanese plan does
  not ask children to draw the diagrams.
- The two-numbers challenge accepts both answers, the sum and the difference: IM's task offers both.
- Eggs, a domino, a squad and a bar of chocolate stay: no source uses them, and each is one thing in two sorts, as
  the sources' situations are.
- Section 020 of the draft is called "Subtracting undoes adding": the glossary keeps take away for groups and add
  for numbers.
- The coined terms "the split" and "the end" of a bar model stay, decided in the user's place: no source names
  these parts of a bar, and both are plain words the reader already knows.
- The glossary scope of "the known part, the missing part" widens from "number bonds" to "whole and parts", decided
  in the user's place: this story uses it for subtractions and bar models, and its meaning stays as written.
- Page 140 keeps the family of two equal parts on a page of its own, as the plan of 010 gives it: one page holds
  one example, and 130 already holds the family of 9, 4 and 13.
- Section 020 adds no number line page: counting on from 8 to 13 on a line is `adding-within-20` page 430, so the
  numbered counters count on in the frames and the text points back to that page.
- Challenge 710 names the subtraction in its goal line: naming the whole and the part would repeat `number-bonds`
  challenge 190.
- Section 040 teaches the End handle on its first page, a bar given ready made with counters over it: the challenges
  need the handle, and only a teaching page can teach it.
- Page 440 covers the whole as well as a part: the Japanese lesson covers each number of one bar in turn.
- Challenge 710 works `8 − 6`, a whole below the draw of 11 to 18. The writer's `10 − 6` was the family of the eggs on page 110, and each example belongs to one section.
- Page 220 leaves out the plan's line "8 and 2 make 10, then 3 more": the page holds two readings of a subtraction
  and the stepper within the budget.
- Page 610 leaves out "11 + 5 = 16 checks the squad": the word check comes in section 030.
- The goal row of a challenge keeps a steady height, asked of the kit for every challenge of the book: a goal line
  that turns into a note or a done line changed the panel's height and resized the figure.
- Page 330 keeps a figure that cannot show a wrong jump back: its example works the wrong jump in numbers, and 310
  lets the reader take back too few counters.
- Challenge 720 keeps a unit of about 14px on a phone: the bar's numbers update during the drag, and arrow keys move
  the handles.
- Two errors of the digest meet no page: the = sign read as "the answer comes next" belongs to `equals-sign`, and
  overgeneralising the undoing shortcut to `a + b + b` needs sums of three numbers, which no beginner story before
  this one has.
- Challenge 730, settled after the second audit and the verifier: in "the whole and a part" the bar is a sketch until
  the goal holds, the known part and the "?" part at equal lengths, and the text says so. A bar drawn to scale gave
  the answer by eye (12 and 6 showed two equal halves), and a fixed share of 60% showed a 2 longer than an 8. Once
  the goal holds, the family is drawn to scale. In "the two parts" the known parts are drawn to scale, which gives
  nothing away. Oak allows a bar that is not exact at first.
- The notes of 730 say which way to go, so a reader can halve their way to the third number in about five Checks:
  the rules for notes ask for a direction, and the bar gives nothing away.
- Audit fixes verified: the engine of every fix passes, 150 tests. The seven rewritten pages go to one reviewer.
- Audit, second pass: `faults`, three real and nine small. Sent back: 720 wrote its drawn fact in the bar's colours,
  which named the whole (engine); 730's fixed share (engine, decision reversed); 730 judged the third number against
  the picked use only (engine); "stands" in the 720 hints (engine); "gaps" on 330, an unanswered question on 110, the
  family of two facts taught only in the steps of 130, "pips" on 120, colours alone on 410, 210 opening on 120's
  idea, and "segment" on 730 (texts).
- World page 610 keeps the action of 210, a counter for each number counted on to the whole: a world page applies
  its section's idea to a real situation, as the brief's arc gives it, and its stop is the shirt of the last player.
- Challenge 730 brings in the "Use them as" switch: a switch with two labelled choices needs no teaching, and the
  "Third number" stepper works as every stepper of the book.
- Cover: page 420, the bar model of 8 split into 5 and 3 with its four facts, made by `scripts/cover.mjs`. It shows
  the story's two figures, the bar and the family, in one picture.
- Audit, third pass: `faults`, four and a few small. The maths holds, and every challenge is solved by working it
  out. Sent back: the facts of 720 and 730 sliding under the text card at 390x780 (engine), "four facts" said where
  equal parts give two (texts), 210's example where the first number said equals the answer (page, text and plan,
  now `7 − 2`), 720's hint naming the whole (engine), "take away" said of numbers and "gap" on 620 (texts and the
  glossary's undo rule), 410's example leaning on the figure, 610 not asking for the bench first, 730's stepper
  opening at 0 (engine, now at the greater number), and a stale comment.
- 730's sketch draws the known part and the "?" at equal lengths, which pictures the digest's error that the parts
  are equal: kept, since every measured length would give the answer by eye, and the text says the bar is a sketch.
- Page 610 works a squad of 14 in its example and leaves the figure's squad of 16 to the reader, who says the bench
  before tapping: the reviewer found the example gave the figure's answer.
- Audit, fourth pass: `faults`, two real and a few small. Fixed by the overseer in the texts: "four facts" said as a
  rule on 130, 420, 810 and in two titles (now "Three numbers make a fact family" and "One bar model holds a fact
  family", folders renamed, the cover page with them), 620 working no case (now a bar of 10 in its example, the
  figure's 12 left to the reader), 440's example naming the figure, and "take away" said of numbers on 310 and in
  the story's summary. Sent to the engine: 720's drawn fact moved to the first slot.
- 720 opens its bar split at 5, so a draw with a part of 5 is solved once the end is right: kept, since any opening
  split shares a part with some draws, and the reader still has to find the whole.
- The Hint row makes a challenge's panel taller and the figure smaller: kept, since the figure stays above the card
  and the targets stay 44px.
- Audit, fifth pass: `faults`, five small. Fixed in the texts: 810 checked `14 − 8 = 6` with the swapped addition
  (now `6 + 8 = 14`, the one that undoes), "takes away" said of a fact on 130 and 420, 420 leaning on 410's marbles
  when opened alone, and the summary's order. Sent to the engine: 610's bench took a player off when a reader kept
  tapping its middle (the auditor showed the earlier decision's reason wrong: the player appears under the finger),
  so every tap on the bench now seats a player; 340's right verdict "12 is 12" reads "The check gives back 12"; and
  an empty fact place on 110 gets an outline.
- Built: the fifth pass's engine faults are fixed (610's bench, 340's verdict sized on its own, the empty fact
  place outlined), checked on captures. `kitap check fact-families` prints `ok`, hesap's tests pass (150). The story
  waits for the user's read, and for a hesap release before `draft: true` comes off.
