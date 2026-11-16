# Overseeing a story

For whoever is asked to plan and build a story. You hold the story's strategy and hand the work to the agents of
`.claude/agents/`. A story is built section by section. A section is one or more pages on a single concept, or on
another approach to a concept an earlier section taught.

`specs/initial-release.md` and `specs/stories/<story>.md` are a rough map of the story. Its plan in
`content/<story>/.plan/` is the source from the moment it is written, and it is committed with the story.

## What the plan folder holds

Whoever takes the story over, on another machine or in another session, starts from these files alone.

| File | Written by | Holds |
|---|---|---|
| `brief.md` | you, and its "Engine" part by the `engine-architect` | the strategy, the sections, the scenes and their fields |
| `research.md` | `researcher` | what the sources say per section, each line with its quote and file |
| `terms.md` | `terms` | each term's form and meaning and the section that introduces it |
| `<number>-<section id>.md` | `section-coordinator` | one section's pages, figures, challenge and Contract |
| `decisions.md` | you | the state of each step, and each decision with its reason |

`content/<story>/references.urls` lists the addresses the research read. `kitap sources <story>` fetches them
again into `.references/`, which git leaves out.

Write to `decisions.md` as you go: a step that ends, a ruling between two plans, a choice made in the user's place,
a fault that changed a plan, and what is left to do. One line each, with the reason.

## Steps

Steps 2 to 5 each run one agent and give the section plans a shared ground: the sources read once, one form for
each term, and one name for each part of the figure.

1. **Draft brief.** With the user, write `content/<story>/.plan/brief.md`: the subject, the level, what the reader
   can do at the end, the family and figure, and the kinds of interaction and of exercise that suit the subject.
   Then the sections in order, each with:
   - its number, in tens, its id, and the range of page numbers its pages take
   - **Needs:** what the reader knows from earlier sections
   - **Teaches:** the one concept, or the new approach to an earlier one
   - **Hands on:** what later sections and the challenges rely on
   - its part in the story's arc: the opening page, the world pages, a challenge, the end page

   Write `content/<story>/story.yaml` with the fields of `content/counting/story.yaml`.
2. **Research.** Dispatch the `researcher` with the story id. Where its report lists an address as unread and a
   section rests on it, the story holds: the user saves the page under the name given, and the researcher is
   resumed.
3. **Terms.** Dispatch the `terms` agent with the story id. An existing sense of `agents/glossary.md` that the
   story wants changed is the user's decision.
4. **Final brief.** Settle each point of the digest's "Against the brief" and of the terms report: change the brief,
   or keep it and write the reason in `decisions.md`. Show the user the brief. The work goes on when the user
   agrees it.
5. **Engine design.** Dispatch the `engine-architect` with the story id. It writes the brief's "Engine" part.
6. **Section plans.** Dispatch one `section-coordinator` per section, with the story id and the section id. They run
   at once. A section that takes another approach to an earlier concept runs after that section and is given its
   plan. A field a plan marks `new` beyond the "Engine" part goes into that part under one name before the pages
   are written.
7. **Order.** Read the Header of each plan, in the sections' order, and check:
   - Each "Assumes" is taught by an earlier section or by the story's level.
   - Each term and control appears first in the section that introduces it.
   - Each example and each reader action belongs to one section.
   - Each challenge uses what its section and the earlier ones taught, and the last challenge combines several.

   A fault goes back to its section's coordinator, or changes the brief. Show the user the Headers in order. The
   work goes on when the user agrees them.
8. **Pages and engine.** For each section dispatch the `section-writer`. Dispatch the `engine-author` with the
   sections in the build order of the "Engine" part, one section at a time. One engine author works on a family at
   a time, and the same author takes every section, so each part of a scene exists once. Before the first one,
   link hesap's source with `npm install ../hesap`.
9. **Verify.** When the engine author reports, dispatch the `engine-verifier`. A fault goes back to the same
   author together with the next section, and the next pass checks the fix. The last section is verified until it
   reports `pass`.
10. **Review.** Dispatch the `section-reviewer` for every section once the engine draws all the story's scenes, since
    a reviewer builds the whole story for its captures. A point where a plan should change goes back to step 7.
11. **Challenges.** A section's challenge page is written and reviewed with its section. Its goal is built by the
    `engine-author` dispatched with the word `challenge`, after the section's scenes pass.
12. **Whole story.** Check the story as "Checking a story" in `agents/story.md` says. Look over what the story added
    to the engine for parts that belong in hesap's kit or in kitap: a part moves there when a second family or a
    second engine would use it. Release hesap, put the released version back in the book and check the story again.
13. **The user reads the story on a phone.**

Stories are built a family at a time. The story that asks the most of a family comes first, and the family's other
stories follow in parallel.
