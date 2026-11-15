# Agents

Working notes for coding agents in this repository. `README.md` covers the project for people.

The Open Maths Book is a reference and a study aid, built with kitap (`node_modules/@openbooknetwork/kitap`, source
in `../kitap`). A reader picks any story in any order. Every page starts fresh when it opens, and the site stores
no account, progress or score.

Run every command from the repo root, and the book's commands as `./node_modules/.bin/kitap <args>`.

The notes are split by job. Read the file of each job you were given.

| Job | Read |
|---|---|
| Plan a story or build its pages | `agents/story.md` |
| Write or edit a page's English text | `agents/text.md` |
| Change the engine, hesap | `../hesap/AGENTS.md` |
| Translate a story or update its translations | `node_modules/@openbooknetwork/kitap/agents/translating.md` |

The `translator` and `translation-reviewer` of `.claude/agents/` name their own files.
