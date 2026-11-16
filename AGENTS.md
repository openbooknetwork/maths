# Agents

Working notes for coding agents in this repository. `README.md` covers the project for people.

The Open Maths Book is a reference and a study aid, built with kitap (`node_modules/@openbooknetwork/kitap`, source
in `../kitap`). A reader picks any story in any order. Every page starts fresh when it opens, and the site stores
no account, progress or score.

Run every command from the repo root, and the book's commands as `./node_modules/.bin/kitap <args>`.

The notes are split by job. Read the file of each job you were given.

| Job | Read |
|---|---|
| Plan and build a story, from its brief to the finished pages | `agents/overseer.md` |
| Check a story, make its cover, find a family | `agents/story.md` |
| Write or edit a page's English text | `agents/text.md` |
| Use a term the book has fixed | `agents/glossary.md` |
| Change the engine, hesap | `../hesap/AGENTS.md` |
| Translate a story or update its translations | `node_modules/@openbooknetwork/kitap/agents/translating.md` |

The agents of `.claude/agents/` name their own files:

| Agent | Work |
|---|---|
| `researcher` | reads how schools teach a story's subject and writes the digest |
| `terms` | decides a story's terms and keeps `agents/glossary.md` |
| `engine-architect` | designs the scenes and fields a story needs |
| `section-coordinator` | plans one section |
| `section-writer`, `section-reviewer` | a section's pages and texts |
| `engine-author`, `engine-verifier` | what a section needs from hesap |
| `translator`, `translation-reviewer` | a story's translations |
