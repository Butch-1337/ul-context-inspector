export { UniversalLoginContextPanel } from './components/UniversalLoginContextPanel';
export type { UniversalLoginContextPanelProps } from './types/universal-login-context-panel';
export { useUniversalLoginContextSubscription } from './hooks/useUniversalLoginContextSubscription';

// Runtime style injection (prefixed Tailwind + custom styles)
// Automatically executed on import; optional static CSS remains available via the package export.
import tailwindCss from './lib/tailwind.css?inline';
import baseCss from './lib/styles.css?inline';

if (typeof document !== 'undefined') {
	const STYLE_ID = 'ulci-styles';
	if (!document.getElementById(STYLE_ID)) {
		try {
			const style = document.createElement('style');
			style.id = STYLE_ID;
			style.textContent = `${tailwindCss}\n${baseCss}`;
			document.head.appendChild(style);
		} catch {
			/* ignore */
		}
	}
}
