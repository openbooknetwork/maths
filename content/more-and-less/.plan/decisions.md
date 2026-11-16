# Decisions of `more-and-less`

The state of each step of `agents/overseer.md`, and each decision with its reason. This story was planned before
the steps Research, Terms and Engine design existed, so it has no `research.md` and no `terms.md`: each plan's
Sources holds its quotes, and the brief holds the shared names.

## State

- Brief: agreed.
- Section plans: written, checked against the sources read in `.references/` and `.cache/curricula/`, and
  corrected to match what was built.
- Order: the four checks pass on the Headers.
- Pages: all 22 written and reviewed. `kitap check more-and-less` prints `ok`.
- Engine: the scenes `counters/match` and `counters/order`, the field `sides` of `counters/count`, and the goals
  `same-rows`, `one-less` and `right-sign` were built and passed by the verifier in seven passes. They are
  released in hesap 0.3.0, with kitap 0.7.7.
- Cover: made from page 110. The whole book builds, and every page was captured at phone and wide size.
- The book holds the released hesap `^0.3.0` and kitap `^0.7.7`, and the story checks `ok` against them.
- Left: upload the cover images with `kitap upload --story more-and-less`, and release the book.

## Sources

- https://escholarship.org/content/qt1z39h57r/qt1z39h57r.pdf answered 403 and is unread. No page rests on it alone.
- https://www.weareteachers.com/teaching-greater-than-less-than is gone. Section 050 dropped it.

## Decisions

- Section order: `matching` comes before `more-and-fewer`. The NCETM progression chart puts more and less first.
  The Japanese course of study puts one to one matching first, and 020 explains "more" by the counter left without
  a partner.
- One page shows a spread row, 140. Section 020 dropped its own and recalls it in one sentence.
- Pages 130 and 210 both step two rows. 130 teaches "the same" and 210 the tags more and fewer.
- Section 020 merged two pages into 240: "how many more" and "how many fewer" are asked of the same two rows.
- "Difference" is introduced in 020. The Illustrative Mathematics lesson names it with "how many more".
- "Greatest" is kept for numbers though no source read has it. England has "most, least".
- Equal numbers read "is the same as" before section 050 and "is equal to" from there, since 050 introduces
  "equal". A page with a `sign` takes the second wording.
- Two scenes: `match` for two rows, `order` for markers, blocks and cards. `sign` is a field of both, so page 530
  can compare numbers up to 100.
- `word: true` needs `pair: auto`. With hand pairing the tags named the wrong row before any line was drawn.
- The players of page 610 sway with no Start button. The sway marks a state, the reader ends it with "Stop the
  music", and it is off under reduced motion. `../hesap/AGENTS.md` has the rule.
- hesap reads its strings at build time through kitap's `loadCatalogues`, so `kitap check` knows the word a link
  shows as a page opens. The user chose this over a `js-yaml` dependency in hesap. It needs the kitap release
  after 0.7.6, which also carries `kitap sources`.
- Button names are written without quotes, as the story `counting` writes Check.
- Page 430 leaves the story `tens-and-ones` unnamed. The end page 810 names the stories that follow.
- The steppers stand in the panel under the figure, by hesap's rule for controls. Plan 010 says "beside each
  row" for page 130, and its wording is corrected at review.
- Colour is a second cue and not the only one, since a reader may see two colours as one. The two numbers of
  `counters/order` are the first and the second number, the left and the right block, and the markers of page 410
  differ by shape or place. `agents/text.md` and `../hesap/AGENTS.md` have the rule. The texts of 410 to 440 and
  530 that say "the red marker" or "the red block" are reworded at review.
- The teams of the scoreboard are "Home" and "Away", with the buttons "Home goal" and "Away goal". The plan had
  "Reds" and "Blues", which name a control by a colour.
- Left for after this story: the scene `counters/bonds` of the story `number-bonds` names readouts and two goal
  lines by a colour ("Red", "Blue", "Blue added").
- The stepper of a challenge page shows no number until the goal holds, so pages 710 and 720 show no count.
- The spread row of a challenge is drawn at random. Lining up the ends gives a wrong answer whichever row is
  spread, so the ends need not mislead more often.
- On page 240 a counter the reader added is filled and marked with a plus. It was hollow at first, which read as a
  styling fault and meant something else on page 410.
- The texts keep the voice for a reader of any age, plain and not complicated. The user's attention is on the
  figures.
- Page 440 has the button "New numbers" (`draw: true`), which draws three new cards. The user asked for it in
  place of one fixed set. The page also opens on a draw, so its text works 63, 36 and 39 as an example apart
  from the cards on show.
