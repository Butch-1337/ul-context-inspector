
## ul-context-inspector

React + TypeScript UI component (published as an npm package) that mounts a small toggleable panel to inspect a chosen object exposed on `window` (defaults to `window.ulContext`). Intended for quick debugging / visibility inside host apps without needing devtools console spelunking.

### Features (initial)
* Lightweight (Vite library build)
* Polls the target object periodically (configurable) and renders a shallow-to-moderate depth snapshot
* Handles circular references gracefully
* Collapsible floating panel anchored bottom-right
* Tailwind utilities (scoped with `uci-` prefix; no global preflight)

Planned enhancements (future): search, deep expand, diffing, copy value, theming, keyboard shortcut, lazy structural traversal.

### Install
```
npm install ul-context-inspector
# or
yarn add ul-context-inspector
```

### Basic Usage
```tsx
import React from 'react';
import { ContextInspector, UniversalLoginContextPanel } from 'ul-context-inspector';

export function App() {
	// somewhere earlier your app sets: (window as any).ulContext = { ... }
	return (
		<>
			{/* your application */}
			<ContextInspector />
	{/* Left side tenant context panel (state 1) */}
	<UniversalLoginContextPanel defaultOpen={false} />
		</>
	);
}
```

### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `targetKey` | `string` | `"ulContext"` | Property on `window` (or custom `root`) to inspect. |
| `defaultOpen` | `boolean` | `false` | Whether the panel starts open. |
| `pollInterval` | `number` | `3000` | Milliseconds between snapshots. Set `0` to disable polling (manual refresh TBD). |
| `root` | `any` | `window` | Override global object (useful for testing). |
| `height` | `number | string` | `300` | Panel height when open. |

### UniversalLoginContextPanel (State 1: Connected to tenant)
Reads and rewrites `window.universal_login_context` as JSON.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `defaultOpen` | `boolean` | `false` | Start opened on mount. |
| `height` | `number | string` | `100vh` | Panel height. |
| `width` | `number | string` | `420` | Panel width from left edge. |
| `screenLabel` | `string` | `"Current Screen"` | Read-only selector label in this state. |


### Local Development
1. Install deps: `npm install`
2. Run dev playground (coming soon) or just `npm run build` to ensure types output.
3. Link / test in a host app:
	 ```bash
	 npm pack   # produces ul-context-inspector-<version>.tgz
	 # then in another app
	 npm install ../path/to/ul-context-inspector-<version>.tgz
	 ```

### Build
```
npm run build
```
Emits ESM + CJS bundles and type declarations to `dist/`.

### Watch (continuous build)
Rebuild on change (useful when linking into a host app):
```
npm run watch
```

### Release (manual sketch)
1. Bump version in `package.json` (follow semver)
2. `npm run build`
3. `npm publish --access public`

### Contributing / Roadmap Notes
See inline `TODO` comments for potential improvements. Feel free to open issues for:
* Performance with large objects (virtualization, depth-lazy loading)
* Better diff (highlight changed keys between polls)
* Copy-to-clipboard / JSON export
* Search/filter box
* Optional dark/light theme tokens overriding Tailwind config

---
Internal links / help resources:
* Engineering FAQ wiki: http://bit.ly/EngFAQ
* Slack: #eng-release, #eng-productivity

