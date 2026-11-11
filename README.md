# Open Maths Book

Stories that build up mathematical ideas step by step, published at https://openmathsbook.org. A free educational
project. The pages are built with [kitap](https://github.com/openbooknetwork/kitap) and the figures are drawn with
[JSXGraph](https://jsxgraph.org). Each folder under `content/` is one story and builds to its own page.

## Work on it

```
npm install
npm run dev                 # watch, rebuild, serve at http://localhost:8080/
npm run build -- --strict   # the build the release runs: fails on a missing translation or a missing object in the store
```

## Layout

- `site.yaml` names the main page, the engine, the languages and the order of the stories.
- `plugins/engines/<id>/` holds a prototype engine: the figures a page can name, and the code that draws them.
- `content/<story>/` holds one story: pages, texts per language and a folder per image under `shared/images/`.
- `content/<story>/i18n/<lang>.yaml` and `i18n/<lang>.yaml` hold the translations. English is inline.
