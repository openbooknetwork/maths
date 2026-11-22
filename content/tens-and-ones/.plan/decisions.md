# Decisions of `tens-and-ones`

The state of each step of `agents/overseer.md`, and each decision with its reason.

## State

- Research: `research.md` from 31 sources, read in files, with eight unread and nothing resting on them alone.
- Terms: `terms.md` written, 14 glossary rows and 10 rules, no existing sense changed by the agent.
- Section plans: five written. 010 has 3 pages, 020 has 2, 030 has 4 and a challenge, 040 has 3 and a world page, 050
  has 2, a world page, two challenges and the end page.
- Order: the checks pass with three faults sent back, all examples shared by two sections: 46 (030), 16 and 61
  (040, now 17 and 71), and 26 and 52 (050, now 23 and a shelf of 62).
- Final brief: written with the terms settled below.
- Engine design: the brief has its "Engine" part: a new scene `counters/base-ten` with the looks `blocks`, `jar`,
  `florist` and `shop`, three goals, and the kit's `named` for number names. One author builds it section by
  section, after the skip-counting author moves the scene switcher into the kit.
- Brief: drafted on 2026-11-19 from `specs/stories/tens-and-ones.md`. The user said "build them let's go", which is leave to run every
  step without a stop, with each choice recorded here.

## Decisions

- `story.yaml` has `draft: true` until the story is built and read.
- The teens come after a ten and ones and before the two-digit numbers, as the US and IM teach them. NCETM teaches 20
  to 100 first.
- The first pages count collections of whole tens before loose ones: IM's Unit 4 Section A and NCETM's Topic 1.8.
- The teens are said the regular way too, "ten and one", as the progression and the DfE do, and fourteen is set
  beside forty, the confusion Oak, NSW and the progression name.
- Section 030 shows forty-three written 43 and not 403: the progression names writing what is heard as a common
  error.
- The words "value", "place value chart" and the digits' names are left to the terms agent: no source says "worth"
  or "mat".
- Two existing glossary senses changed, decided in the user's place: `split (numbers)` now "separate a whole into two
  parts", since "break" is the term for a ten here; `digit` now "one of the ten symbols", since "sign" is the term for
  <, >, =, + and −. Neither changes a meaning.
- "Value" and "place value chart" replace the brief's "worth" and "mat": NCETM, Oak and England say them, and no
  source says worth or mat.
- Page 130 counts blocks that lie mixed up, with the tap of page 120: kept, since the idea is new (the count of tens
  first holds wherever the blocks lie, Oak's non-standard arrangements) and the Mix button is the new action.
- Page 430 is the first to write + and =, "50 + 6 = 56": the text reads the signs in words and points to
  `adding-within-20`, since the story needs only `counting`.
- Challenge 720 hides the counts under the columns until the goal holds, and draws 10 to 29 ones: the counts read the
  answer out, and the wider range makes the reader choose how many tens to break.
- Page 520 adds a list of the ways found: without it, 520 would repeat 510's action.
- Pages written for all five sections, 2026-11-19. Every page waits on `counters/base-ten` for its check.
- Page 620 keeps 260 words and is listed under `long`: it works its own order of 18 and hands over three tray
  controls, and the reviewer weighs the length again.
- Challenge 720 works 46 shown with 36 ones, and 730 an order of 84 with 6 packs: the plan's 57 and 43 can be drawn
  by the goals, so they would give an answer away.
- Page 340 says "the 80 card" and "the 6 card", with the name before the thing, as `agents/text.md` asks.
- Engine step 1, `counters/base-ten` 010 `ten-ones`: built 2026-11-19 with 168 tests passing, and sent to the verifier. Steps 2 to 5 run on without a stop.
- Engine step 1 verified 2026-11-19: works, with five small faults (supply touch areas, a dead string lookup, a resize during a bundle, the supply drop area, hex colours) sent back with step 2.
- Engine step 2, `teens`: built 2026-11-19 with 180 tests passing. It is small, so it is verified together with step 3.
- Engine step 3, `two-digits`: the place value chart built 2026-11-19 with 191 tests passing. Steps 2 and 3 went to the verifier together.
- Engine step 4, `place`: values, the written line, swap and the look `florist`, built 2026-11-19 with 192 tests passing. Verified together with step 5.
- Engine steps 2 and 3 verified 2026-11-19: the pages work, with column aria-labels reading "undefined" through a shadowed `fill`, small tap areas on the ones card and the supply, and two step 1 faults left, all sent back with step 5.
- Engine step 5, `breaking-a-ten`: `tap: break`, the list of ways and the look `shop`, built 2026-11-19 with 195 tests passing. Steps 4 and 5 went to the verifier, and step 6, the goals, started with the open faults first.
- Engine steps 4 and 5 verified 2026-11-19: every page works with real touch, and the column names, card and supply
  touch areas are fixed. Sent back: the list's spoken name, rules to move into the model with tests, a shake that
  does not show, list and slip text near 8px on a phone, small number targets on the written line.
- Kept as built: the shop's shelf draws one pack and one pencil with their numbers, and a pack opens with its pencils
  gliding out and no band slipping off. The counts carry the shelf, and the glide shows the break.
- Engine step 6, the goals `build-number`, `show-with-ones` and `fill-order`: built 2026-11-19 with 200 tests and a
  draw of 400 targets per goal, and the whole story checks ok. Sent to the verifier, and the five section reviewers
  dispatched at once.
- Review of `teens` done 2026-11-19. The plan said 14, 40 and 41 all have a 4 in their names, which "forty" does not: it now says the digit 4.
- Reviews of `ten-ones`, `place` and `breaking-a-ten` done 2026-11-19, every page but 720 changed.
- Page 620 works an order of 16 the way a shopkeeper does it: too few single pencils, so 2 packs go in, one is
  opened, and 4 pencils go back. It stays under `long` at about 245 words.
- The plan of 050 describes the shelf as drawn, one pack and one pencil with their counts, and the plan of 040 reads
  + and = in the text itself, since the story needs only `counting`.
- Review of `two-digits` done 2026-11-19. All five sections are reviewed.
- Challenge 710 keeps 58 as its worked example although the goal can draw it: building any number is reading its two
  digits, so every example shows the same method, and the hint gives it too. A draw of 58 is one in 89.
- Goals verified 2026-11-19: all three reachable with real touch. Sent back: a bundle that solves without a new
  Check, "1 pencils", a shelf that can hold the answer's pencils exactly, 710's missing done line, overlapping supply
  touch areas.
- Challenge 720 works 20 asked as 20 ones: the earlier 46 with 36 ones needs 36 cubes in a column that holds 29, and
  20 is outside the goal's draw from 21.
- Audit 1, 2026-11-19: faults. Decided in the user's place:
  - The list on 520 printed the page's line on every row: an engine fault, sent back.
  - On 310 the ones column could pass 9 with no Bundle button, so the digits read "3 | 10" for 40. Without
    `bundle`, the supply stops each column at 9.
  - 130 warned of counting cubes as tens, which the figure cannot show, since each tap adds its piece's value. The
    text now shows why tens first is easier, a cube then a rod giving 1 and 11, and drops the warning.
  - 720 works 27 shown with 17 ones, the step that keeps the 7 ones there and breaks one ten. The goal draws from
    31, so it cannot draw 27, and the chart can show it.
  - "Order" named the request and the tray: the tray is labelled, its readout is "Pencils in the tray", and the
    notes say "The tray holds". 730's hint names the packs too.
  - 710's wrong Check gave away the hidden total. Its note now points to the digits.
  - 310 says what a digit is, one of the ten symbols 0 to 9, before it uses the word.
  - 510 said the last rod stays whole because the column is full. It now says the chart has no room for a third
    break, and that 32 is also 0 tens and 32 ones.
  - 430's only control, "Mix up the blocks", changed nothing and repeated 130. It is dropped, and the tap on a
    number of the line, which lights its blocks, is the page's thing to do.
- Open when work stopped at the spend limit, 2026-11-19 12:19: the counters author has not yet made the 16 engine
  fixes listed in its last message (520's list rows, the shop's tray strings, 710's note, the bundle Check and the
  rest). Audit 2 waits for them.
- The 16 engine fixes landed 2026-11-19, 217 tests, and the story checks ok. A column of the shop holds 29 pencils,
  since 730 needs more than 9. Audit 2 started.
- Audit 2, 2026-11-19: every audit 1 fix holds. Five engine faults sent back: 710's note gives no way to go, 730's
  notes read out the tray's total, the tray's number sits under the slip, figure text at 10 to 12px on a phone, and
  720's ones column stops exactly at the answer on two-break draws. 340 now says the cards "would read 806" written
  next to each other, since the figure sets them a column apart.
- The five audit 2 faults are fixed in the engine, 220 tests, 2026-11-19. Audit 3 started.
- Audit 3, 2026-11-19: every audit 2 fix holds. Left: 730's order number and tray counts at 10.6px on a phone with an overflowing slip, and 710's rods about 7px wide with the card open, sent to the engine author. The screenshot script captured blank figures, checked with it.
- The two audit 3 faults are fixed, 220 tests: 730's slip and counts at 16 to 19px on a phone with nothing touching, and 710's rods 10.4px wide with the card open. The engine author could not reproduce the blank captures, and the cover script draws every figure. Cover from page 610, the florist's 2 bunches and 28 roses, made 2026-11-19. The story passes its audits and waits for the user to read it.
- Page 510 opens on 34 in place of 32, approved by the user 2026-11-21: with 32 a break gives 2 tens and 12 ones, and the new tens count equals the old ones digit by chance. 34 gives 2 tens and 14 ones, then 1 ten and 24 ones.
