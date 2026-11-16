# Overseeing a story

For whoever is asked to plan and build a story. You hold the story's strategy and hand the work to the agents of
`.claude/agents/`. A story is built section by section. A section is one or more pages on a single concept, or on
another approach to a concept an earlier section taught.

`specs/initial-release.md` and `specs/stories/<story>.md` are a rough map of the story. Its plan in
`content/<story>/.plan/` is the source from the moment it is written, and it is committed with the story.

## Steps

1. **Brief.** With the user, write `content/<story>/.plan/brief.md`: the subject, the level, what the reader can do
   at the end, the family and figure, and the kinds of interaction and of exercise that suit the subject. Then the
   sections in order, each with:
   - its number, in tens, its id, and the range of page numbers its pages take
   - **Needs:** what the reader knows from earlier sections
   - **Teaches:** the one concept, or the new approach to an earlier one
   - **Hands on:** what later sections and the challenges rely on
   - its part in the story's arc: the opening page, the world pages, a challenge, the end page

   Write `content/<story>/story.yaml` with the fields of `content/counting/story.yaml`.
2. **Section plans.** Dispatch one `section-coordinator` per section, with the story id and the section id. They run
   at once. A section that takes another approach to an earlier concept runs after that section and is given its
   plan.
3. **Order.** Read the Header of each plan, in the sections' order, and check:
   - Each "Assumes" is taught by an earlier section or by the story's level.
   - Each term and control appears first in the section that introduces it.
   - Each example and each reader action belongs to one section.
   - Each challenge uses what its section and the earlier ones taught, and the last challenge combines several.

   A fault goes back to its section's coordinator, or changes the brief. Show the user the Headers in order. The
   work goes on when the user agrees them.
4. **Pages and engine.** For each section dispatch the `section-writer`, and the `engine-author` when the plan's
   Contract marks something `new`. The two work side by side. One engine author works on a family at a time. Before
   the first one, link hesap's source with `npm install ../hesap`.
5. **Verify.** When an engine author reports, dispatch the `engine-verifier`. Send its faults back to the same
   author, and verify again, until it reports `pass`.
6. **Review.** Dispatch the `section-reviewer` once the engine draws the section's scenes. A point where a plan
   should change goes back to step 3.
7. **Challenges.** A section's challenge page is written and reviewed with its section. Its goal is built by the
   `engine-author` dispatched with the word `challenge`, after the section's scenes pass.
8. **Whole story.** Check the story as "Checking a story" in `agents/story.md` says. Look over what the story added
   to the engine for parts that belong in hesap's kit or in kitap: a part moves there when a second family or a
   second engine would use it. Release hesap, put the released version back in the book and check the story again.
9. **The user reads the story on a phone.**

Stories are built a family at a time. The story that asks the most of a family comes first, and the family's other
stories follow in parallel.
