# Decisions of `adding-tens-and-ones`

The state of each step of `agents/overseer.md`, and each decision with its reason.

## State

- Research: `research.md` from 30 sources read in files, 8 unread with nothing resting on them alone.
- Terms: `terms.md` written, five glossary rows and six rules.
- Final brief: written with the terms settled below.
- Engine design: the brief's "Engine" part, 2026-11-19, on `counters/base-ten`, `line/line` and `line/square`, with
  the architect's choices in its last part.
- Section plans: all five written, 2026-11-19. Order check done, with three plans sent back (below).
- Brief: drafted on 2026-11-19 from `specs/stories/adding-tens-and-ones.md`. The user said "build them let's go", which is leave
  to run every step without a stop, with each choice recorded here.

## Decisions

- `story.yaml` has `draft: true` until the story is built and read.
- Eggs and the pages of a book are out: `fact-families` opens on eggs and `number-line` has a bookmark page.
  Biscuits in packets of ten and a sticker album take their places.
- The engine of this story waits for the blocks scene that `tens-and-ones` builds.
- A first section on a two-digit number and ones, crossing the next ten: the US (1.NBT.C.4), England and IM name it
  as its own case, and NCETM and Oak teach it before ten more.
- Taking tens away sits beside adding tens in section 020: NCETM's outcome 18 and Oak teach them together.
- "Adding 9 is a ten and one back" is out: NCETM teaches compensation in Year 5, and no source read teaches it here.
- A ten that runs short is said as "a number's ones are inside its tens too": Kappan and CESD warn that "there aren't
  enough ones" builds a misconception.
- The blocks combine tens with tens and ones with ones, as IM and the progression do, and the line keeps the first
  number whole, as Oak advises for a sum that crosses a ten. Both appear in 040.
- The difference stays the last idea of 050, counted on through the next ten: the progression jumps to the next ten
  first, and IM's start with compare problems is met by the world page.
- The glossary's `jump of 2, 5, 10, 100 (number line)` now lists 1 too, decided in the user's place: this story
  needs "a jump of 1", and the meaning is the same.
- The brief takes the terms' words: "the ten after", a digit that "goes up by 1", "the cell just below", "a new
  ten", and no "loose" ones.
- Order check: 020's page 210 stepped the Tens stepper as `tens-and-ones` page 320 does, so it merges into the page
  that adds tens, and the readouts "Ten more" and "Ten less" come in there.
- Order check: 020's line page started on 34 with jumps to 44 and 54, as 030's line page does, so it starts on 56.
- Order check: 040's page "Check the ones before you add" stepped the second number's ones across a ten, as 010's
  page 120 does, so it is dropped and its point goes into 410's text.
- Order check: 010's page 120 starts on 23, since 030 builds on 34 + 25.
- Kept at the order check: 010's bakery and 040's page 410 both join blocks and bundle, but 410 joins tens too and
  names the new ten. 010's page 130 joins ones too, and its new step is filling the ten first.
- Kept at the order check: 030's page 330 and the end page 810 both use the four steppers. The end page is the
  story's place to try any sum, and its sums cross a ten, which 330 keeps away from.
- The end page takes its second number on the steppers "Tens added" and "Ones added": the plan's one stepper from 10
  to 40 needed a press for every one.
- The place lines show once every block has joined on a page whose second number waits, and follow the blue pieces
  on a `supply` page. The brief said both, and 030 and 040 each read one of them.
- On a take away the written line reads a dash until the first piece is taken, as 050 asked. It is in the brief.
- `story.yaml`'s summary follows the terms: "ten more than a number has one more ten", "breaking a ten gives you ten
  more ones to take from".
- The challenges' plans name examples their goals can draw: 34 to 59, 38 + 25, 61 with 27 left. Each text works an
  example the goal cannot draw.
- The digest was written for the brief's earlier order of sections. The researcher realigns it and adds a part for
  010 from the files already read.
- 020's merged page 210 opens on 26 with the stepper "Tens added", and its readouts "Ten more" and "Ten less" follow
  the sum. The brief lets the two links come with `second`, as 210 needs.
- 020's line page starts on 56, the sum of page 210, so its text carries on from the chart.
- The digest's parts follow the brief's sections since 2026-11-19, with a part for 010 from the files already read.
- Pages written for all five sections, 2026-11-19. Every check problem left names a field the engine has not built.
- Engine step 6, `line`: `totals`, and `mixed` with `written: true` and `written: difference`, built 2026-11-19 with
  194 tests passing. Verified together with step 7.
- The line author adds "Makes ten", "Down to ten" and "The rest" to the kit's strings now, and the counters author
  drops the family's copies later: step 7 would otherwise wait for the whole of `tens-and-ones`.
- Engine step 7, `line`: `written: ten` on the line and `ten-more`, `ten-less` on the square, built 2026-11-19 with
  200 tests passing. The kit has "Makes ten", "Down to ten", "The rest", "Ten more" and "Ten less". Steps 6 and 7
  went to the verifier.
- Engine steps 6 and 7 verified 2026-11-19: they work, with the tags unnamed for a screen reader, a lit cell left lit after a jump, test gaps and 140's readout name, all sent back.
- The four faults of steps 6 and 7 are fixed, 208 tests: tags named for a screen reader, lit cells and arcs that
  follow the point, the missing tests, and 140's readout. A readout with no jumps yet takes its name from the nearer
  ten, so 140 opens on "Down to ten". The fixes are checked again with the story's last engine pass.
- Engine `counters` step 1, 010: `second`, `waiting`, `bundle` across two numbers, `written: true` and `ten`, the look
  `bakery`, built 2026-11-19 with 208 tests. `counters/add` reads the three making ten strings from the kit now.
  A packet shows its ten biscuits in one column of ten, as a rod holds its cubes, where the plan had two rows of five.
- Engine `counters` step 2, 020: `second` as tens and ones steppers, `ten-more` and `ten-less` on the chart, `take`
  with the pile "Taken away", built 2026-11-19 with 211 tests. Step 3 waits while the tens-and-ones fixes land.
- Engine `counters` step 3, 030: `supply` with `second`, `written: places`, the four steppers of 330 and the goal `add-to-target`, built 2026-11-19 with 212 tests. Steps 1 to 3 and the line fixes went to the verifier together.
- Engine `counters` step 4, 040: the new ten, the look `scoreboard` and the goal `build-sum`, built 2026-11-19 with
  213 tests. Step 5 was under way when the spend limit stopped the author at 12:19.
- Steps 1 to 3 verified 2026-11-19, faults to send the counters author when work resumes:
  - 710's wrong-Check notes name the hidden number ("The chart shows 88, more than 87"), so Check works as a
    readout. Decided: the notes name the place that is off and keep the number back, such as "The tens column has
    too many rods."
  - 710's hint "Then do the same with the ones" gives no numbers: "34 has 4 ones and 59 has 9 ones, so put on 5
    cubes."
  - A bundle with motion does not take back a Check (`base-ten.js` `bundle()`), the same fault as in tens-and-ones.
  - The waiting tray, the pile and the columns lack the screen reader names the brief fixes.
  - After a bundle `to-ten` and `rest` light the wrong cubes, and `second` leaves out the mixed rod.
  - Turkish: the bakery says "Kurabiye" where the brief fixes "Bisküvi", and the pile reads "Çıkan" for "Ayrılanlar".
  - Line: on 140 the lit step line does not follow a jump (`line.js` near 503), for the line author.
- Engine `counters` steps 4 and 5 built and every verifier fault of steps 1 to 3 fixed, 2026-11-19, 217 tests. The
  whole story builds. `written: places` opens with a dash on a take away and `written: true` with the 0 line, as the
  plans of 050 and 020 each ask. Steps 4 and 5 went to the verifier, and the five reviewers started at once.
- Engine look-over, step 12: the steps of making ten were built twice, in `line/model.js` and `counters/add-model.js`,
  so they move into `kit/written.js`. The counters header lead said "counters" on base ten pages, so `counters` gets a
  lead per scene. The fit of a tall figure, the pencil drawing and the rows of crowded labels stay in their families
  until a third user needs them.
- Review of `new-ten` done 2026-11-19, all four texts within 210 words. The brief said "keep the first number whole", which `terms.md` leaves out: it says "start at the first number", as the pages do.
- Review of `place-by-place` done 2026-11-19. The brief and the plan of 030 now give 710's notes as built: they name the column that is off and keep the number back.
- Review of `subtracting` done 2026-11-19, all six texts within 210 words. The plan of 050 now names 510's lines in plain words, gives 810 the "Tens added" and "Ones added" steppers, and drops a number above the chart from 730's hidden list.
- Review of `adding-ones` done 2026-11-19, all four texts within 210 words. The plan of 010 no longer says "fact" or "undoes", words of `fact-families`, which the brief does not assume.
- Review of `tens` done 2026-11-19. All five sections are reviewed and the story checks ok. The plan of 020 leaves 210's two step sentences out for the budget, and says the tile of 0 sits left of cell 1.
- Steps 4 and 5 verified 2026-11-19: every page works with real touch. Sent back: the album's note of the two days,
  the new ten's screen reader name, the scoreboard's colours in the dark theme, the envelopes' names, the Turkish
  words the brief fixes.
- Every goal with a hidden number keeps it back on a wrong Check: 720 and 730 name the place that is off, as 710
  does. The brief's rows for `build-sum` and `take-to-target` and the plans of 040 and 050 asked for the number, and
  this replaces them.
- The verifier faults of steps 4 and 5 are fixed, 220 tests, 2026-11-19. Audit 1 started.
- Audit 1, 2026-11-19: faults. Decided in the user's place:
  - The wrong-Check notes of 710 and 730 could point the wrong way: 710 drops its bundle note and Bundle button, since
    its goal never needs a new ten, and 730 tests the ones first and says "Break a ten to get ten more ones."
  - 230's `73 − 40 = 33` hid which 3 is the kept ones digit: it works `75 − 30 = 45`, as Oak's quiz does.
  - No page met the slip of adding when a question says "more": 530 frames its example as "how many more" and warns
    against adding. `decisions.md` had said the world page met IM's compare problems, which neither world page does.
  - 210's "Ten more" showed a dash at 96 that nothing explained: its stepper stops at 6 tens added, a sum of 86.
  - Engine, sent back: 610's labels and its 13 reading as "713", the challenge figures and 520's step lines too small on
    a phone, 720's hint wording, screen reader names with a part of 0.
  - Text, smaller: 110 uses the figure's words for the counter, 120 and 310 teach without naming the chart, 130 names
    the story `adding-within-20` and not its page, 240 mentions the close-up box, 330 drops quotes on one-word names,
    520 says only the rods need dragging.
- The five audit 1 engine faults are fixed, 220 tests, 2026-11-19. Audit 2 started.
- Cover from page 110, the bakery with 6 packets, 7 biscuits and 8 on the baking tray, made 2026-11-19.
- Audit 2, 2026-11-19: every audit 1 fix holds. 730's notes could loop between "break a ten" and "bundle" when the
  tens were already at the target's: the break note now needs a ten to spare, and a note sends the reader to the pile.
  Sent to the engine author with a test that follows the notes to the target. 610 says 13 waits under the empty ones
  slot, as the figure now draws it.
- The 730 notes no longer loop: each names one move toward the target, and a test walks every state from six draws and follows the notes to the target, 221 tests, 2026-11-19. The story passes its audits and waits for the user to read it.
- Page 240's line runs from 46 to 96 with a mark every 10, 2026-11-21: the text described the phone's close-up box, which belongs to the screen and not the lesson, and the line from 0 to 100 was too dense to read on a phone.
- New examples where each digit plays one part, as `agents/text.md` asks, 2026-11-21: 110 works 68 + 5 = 73, 310 and 320 work 31 + 26 = 57, 530 counts on from 46 to 75, 610 adds 28 + 45 = 73 and 810 opens on 45 + 37 = 82. In 34 + 25 = 59 and 39 + 44 = 83 one digit played two parts, and 73 − 36 = 37 had a 3 in all three numbers. The cover is captured again from 110.
