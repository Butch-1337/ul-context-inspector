### How to use the Universal Design library in this project?

This `ui` folder includes all the UI components fetched from https://universal-design.vercel.app/.
The idea is to keep the generic Universal Design components separated from the main app logic.

Components from the library can be fetched using the command:
```bash
npx shadcn@latest add @universal-components/<component-name>
```

For example, to add the Select component, run:
```bash
npx shadcn@latest add @universal-components/select
```

It will check against the registry (set in `components.json`), install dependencies and generate the necessary files to use the Select component in the project.

For exmaple, for the Select component, it will:
- install `lucide-react` if not already installed.
- create `src/components/ui/select.tsx`: The main Select component file.
- create `src/components/ui/button.tsx`: The Button component needed to the Select.

Be careful as it might generate files with incomplete imports as well as missing complementary components. You may need to fix paths and import missing components manually.

Alternatively, you can add a component to the project by copy/pasting it directly from the website. If the component has dependencies, you’ll need to add them manually, so the command above is generally preferred.

Find the list of available components at https://universal-design.vercel.app/docs/components.

### How to edit Universal Library components?

- `src/components/ui/` policy: Please keep changes minimal. Minor edits for app needs are allowed (e.g. fixing import paths, adding/adjusting types, tiny prop tweaks). Avoid structural or breaking changes.
- For anything beyond minor adjustments, create wrapper components with your customizations in `src/components`.

For an example, please see `components/ui/select.tsx` and `components/SelectField.tsx`.

Check the [Universal Design documentation](https://universal-design-docs.vercel.app/) for more details.
