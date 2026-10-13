# رسا UI / Rasa UI

Persian-first Rasa extensions on the MIT FarsiUI foundation. Twelve independently implemented interactive components, with live previews, source and shadcn-compatible registry files.

## Preview

```sh
cd rasa
npm install
npm run dev
```

## Install

In a configured React + Tailwind 4 / FarsiUI-compatible project:

```sh
npx shadcn@latest add https://rasa-promt.ir/r/rasa-smart-tabs.json
```

Wrap components in `<div className="rasa-ui" dir="rtl">`. Load Vazirmatn in the host project. Shared CSS is included. Use `data-mode="dark"` and `data-style="editorial"` or `vivid` to customize previews. The default theme follows the host’s data-theme attribute.

- [Live gallery](https://rasa-promt.ir/fa/ui)
- [Registry index](https://rasa-promt.ir/r/registry.json)
- Technical foundation: [FarsiUI](https://github.com/MiladJoodi/FarsiUI)
- Design research: [beUI](https://beui.dev/), [EvilCharts](https://evilcharts.com/), [Refero Styles](https://styles.refero.design/)

See THIRD-PARTY-NOTICES.md. Rasa extensions are MIT. No Pro assets or third-party screenshot collections are redistributed. Demonstration values are not actual business metrics. AsyncAction accepts a real async run handler; the agent-flow and composer examples do not call AI models.

Build: `npm run build`. No npm package has been published; installation is via the public registry. Upstream FarsiUI remains available in the parent repository tree, with its original license and history.
