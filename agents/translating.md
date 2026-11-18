# Translating in this book

For whoever translates a story, reviews a translation, or writes a string of the engine in another language. The
steps every book shares are in `node_modules/@openbooknetwork/kitap/agents/translating.md`. This file adds one
rule, and it comes first.

## A term is looked up

A term of `agents/glossary.md` has one word per language, and that word comes from a source written in the
language: the country's own curriculum, or a schoolbook for the grade. `i18n/terms/<lang>.yaml` holds each one with
the sentence it was read in and the file.

- Take every term from `i18n/terms/<lang>.yaml`, in a page text and in a string of the engine.
- Where the file has no entry for a term, or marks it `unsourced`, stop at that term. Report it, and dispatch the
  `term-finder` for the language, which looks it up.
- A word from memory is the last resort. It is written only after the `term-finder` reports that no source has the
  term, it is marked `memory` in the file, and the report lists it for a person who reads the language.
- Where no source has a word and a person who reads the language chooses one, the entry is `agreed`, with the
  person under `by`.
- `node scripts/terms-check.mjs <lang>` proves the file: each quote stands word for word in the file it names, and
  each term of the glossary has an entry. A translation is stamped once the script prints `ok`.

## A term is the language's own

Translators call this an established equivalent: the word the language's own schools already use for the idea,
found by starting from the idea and not from the English word. It comes before a word for word translation.

- The `term-finder` looks for the idea a glossary entry's meaning states, and takes the word the language's
  curriculum has for it. MEB's programme writes a calculation as an "işlem" and a
  line that is true or false as a "sayı cümlesi", and neither was found by translating the English words.
- One English term may be two words in a language, as there, or two English terms one word. The entry gives each
  word with the case it serves.
- Where a language's schools have no such idea, the entry says so, and the translated text explains the thing in
  plain words in place of a coined term. A language's file need not hold a word for every term.
- Where a language's schools teach the idea another way, with another figure or another order of steps, the
  entry notes it for the translator, and the text follows the language's way where the figure allows.

The rule holds for the words around a term too where they are school words, such as the reading of a sign: "plus",
"minus", "is equal to".
