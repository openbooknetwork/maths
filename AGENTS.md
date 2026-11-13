# Agents

Working notes for coding agents in this repository. `README.md` covers the project for people.

The Open Maths Book is a reference and a study aid, built with kitap (`node_modules/@openbooknetwork/kitap`, source
in `../kitap`). A reader picks any story in any order. Every page starts fresh when it opens, and the site stores
no account, progress or score.

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

## How hesap is built

- The core (`src/index.mjs`, `src/client.js`) finds the family of a page's scene, gives it a stage and a panel,
  shows the story's cover or the family's overview scene, and checks every link in the text.
- The kit (`src/kit/`) holds what every family shares: `panel.js` (slider, chip, button, segment, stepper),
  `goal.js` (the challenge line), `text.js` (live values and formulas in the text), `drag.js`, `motion.js`
  (anime.js with a tracker), `play.js` (Start and a time slider), `format.js` (numbers per language) and `dom.js`.
  A need that two families share goes into the kit.
- A family's Node half exports `id`, `scenes`, `schema`, `read`, `start` and an optional `bundle`. Its browser half
  exports a function that takes the core's `api` and returns `show`, `hide`, `point`, `lang` and `theme`.
- A family's `client.css` holds its figure's rules under `.hesap-<id>`, and its strings sit in `i18n/en.yaml` and
  `i18n/tr.yaml` with the prefix `<id>_`. `node scripts/assemble.mjs` in hesap writes `src/client.css` and
  `src/i18n/` from every family, and runs after a change to either. `npm test` in hesap checks every family's
  contract, strings and styles.
- YAML declares and JS computes. A page's YAML names a scene, its controls with their ranges, its starting values
  and the measures to read out. Every rule, formula and check is a named function in the family.
- Phones are first class. Every page works by touch at 390px wide with the same interaction as a wide screen.
  Dragging uses pointer events, and a touch target is about 44px.
- The book's Prev and Next are the only way through the steps of the content. A sequence of steps is a sequence of
  pages. A page has no Play or Pause button. A step animates when its motion is the idea, such as pieces that
  slide into a new arrangement, and that page gets a time slider, as in `proof`. A step that only shows a
  result appears without motion.
- A simulation or a move that runs by itself begins when the reader presses Start, as in `chance` and `linear`.
  Start runs it once to the end, and a slider beside it goes back and forth through the same run.
- Controls and readouts are HTML, docked under the figure, so a phone shows the figure and its controls on one
  screen.
- JSXGraph plots and draws geometry. anime.js animates, and was chosen over GSAP and Motion for its
  MIT licence and readable code. KaTeX sets formulas. Hand-written SVG suits scenes that are not plots.
- Motion marks a change the reader made (a pop, a pulse, a glide into place) and is skipped when `api.moving()` is
  false. A page shows its figure at once when it opens.
- The text follows the figure. A text links a measure or a control as `[12.57](@area)` and a worked formula as
  `[A = ...](@formula-area)`. The page replaces the link's words with the live value. The family's `start` gives
  each one for the page's starting state, and `kitap check` prints the words to write when a text differs.
- In `geo` and `axes` a figure hands each label to the page with `note`. A wide screen writes it beside
  its place, and a phone sets it on an edge with a line to that place (`geo/shared/callouts.js`).
- A challenge page declares `challenge: { goal: <name>, ... }`. The goal is a named function in the family's
  `goals.js`, which the build and the browser both load. It is checked after every change the reader makes, and a
  drag or a run counts when it ends. `kitap check` fails a page that names an unknown goal, starts solved, shows a
  readout that gives the answer away, or has a target its controls cannot reach.
- A reader cannot predict a challenge. The release spec asks for targets that the engine draws when the page opens
  and again on "Another one", from what the page declares. The prototypes still list fixed `targets`, and a new
  challenge is written to be drawn.
- Colours are the theme's CSS tokens (`--paper`, `--panel`, `--ink`, `--ink-2`, `--rule`, `--accent`), so a theme
  switch needs no redraw.

## How the text is written

The user's global rules set the baseline: plain words, each idea once, no em dashes, no semicolons in prose. The
book adds these.

- Every sentence has a subject and a verb. A colon introduces a list or a formula. Write "Keep r still and change θ.
  The point runs round a circle." in place of joining the two with a colon.
- A page teaches one step with one figure, and its text tells the reader what to try.
- A title follows the same rule. A page title is a short sentence or a plain name, such as "Tangent is the slope
  of the radius". A challenge title is the instruction itself, such as "Find both angles at one height".
- A live value is not followed by the noun it counts, because "holds [1](@n) counters" turns false at 1. Write
  "The number of counters is [1](@n)".
- A sentence around a live value stays true for every value the reader can reach. `kitap check` proves only the
  starting value. Write "Now the scale shows [7](@right)" where "The right pan holds [7](@right), which is odd"
  would turn false.
- A story shows where its idea is used in the world, and a later story in a `follows` chain uses new situations.
- A level says what a story assumes the reader knows. The text speaks to any reader at that level, of any age.

## Kitap facts a family author needs

- Browser modules end in `.js`. The dev server serves `.mjs` with a type that browsers refuse to run.
- `show` receives the overview scene with `page.id == null`. The core shows the story's cover in its place when the
  story has one.
- `host.phone` is the media query for 900px and below, `host.reduced` is the reduced motion preference, and
  `api.T(key)` reads a family's string, then a shared `hesap_` string.
- On a phone the text card `#peek` covers the foot of the stage until the reader closes it. A figure leaves
  `var(--hesap-peek)` free at its foot.

## Traps

- Take the pointer with `setPointerCapture` after any DOM move of the dragged element. Moving an element releases
  its capture, and the drag then freezes when the pointer leaves the element. End a drag on `pointerup`,
  `pointercancel` and `lostpointercapture`.
- Scripted `PointerEvent`s have no pointer to capture, so they pass where a real drag fails. Test dragging with real
  input through the DevTools protocol (`Input.dispatchMouseEvent`).
- Set `touch-action:none` on the `<svg>` or the stage box. Chrome ignores it on elements inside an SVG and cancels
  a touch drag after two or three moves. A mouse drag passes either way, so test with real touch input
  (`Input.dispatchTouchEvent`).
- A focused handle that moves on arrow keys calls `stopPropagation` as well as `preventDefault`. The kitap shell
  turns the page on Left and Right for any key event that reaches it.
- When several agents work at once, each tests against its own `kitap build --out <dir>` served as static files.
- anime.js keeps only the last `then` callback on an animation, so a second `then` replaces the first. A driver
  ends an animation through `onComplete` and takes a done callback.
- Kitap hides every `[hidden]` element outright. A control that must keep its room while hidden uses `visibility`.
- Headless Chrome throttles animations in a test script that leaves out `Page.bringToFront` and
  `Emulation.setFocusEmulationEnabled`.
- Kitap's own CSS classes, such as `.legend`, reach into a family's markup. Prefix every class with the family id.
- Kill only the headless Chrome a test started, by its process id. A `pkill` by name ends other sessions' captures.
- A panel that changes height during a drag resizes the stage and shifts the figure under the pointer. Keep its
  height stable while the reader drags.
- Two dev servers that share an `--out` directory overwrite each other. Give each its own `--out` and `--port`.
- In zsh, quote a glob passed to a tool (`--include='*.js'`).

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

## Translations

`./node_modules/.bin/kitap i18n tr --story <story>` adds an empty key for every new English string. An image
folder's caption sits in that folder's `i18n/tr.yaml`.
