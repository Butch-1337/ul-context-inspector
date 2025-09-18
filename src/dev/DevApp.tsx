import React, { useEffect } from "react";
import { UniversalLoginContextPanel } from "../index";

// Attach sample objects to window for local testing
// Legacy context inspector sample
(window as any).ulContext = {
  user: { id: "123", name: "Ada Lovelace" },
  featureFlags: { fancyUI: true, betaMode: false },
  numbers: [1, 2, 3],
  nested: { level1: { level2: { level3: { value: "deep" } } } }
};

// Universal login context (State 1 panel target)
if (!(window as any).universal_login_context) {
  (window as any).universal_login_context = {
    screen: "login",
    locale: "en-US",
    branding: { primaryColor: "#6366f1", logoUrl: "https://example.com/logo.png" },
    user: null,
    features: { passwordless: false, magicLink: true },
    timestamp: Date.now()
  };
}

export const DevApp: React.FC = () => {
  useEffect(() => {
    const id = setInterval(() => {
      (window as any).ulContext.featureFlags.runtimeTick = Date.now();
      (window as any).universal_login_context.timestamp = Date.now();
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>ul-context-inspector Dev Sandbox</h1>
      <p>
        Edit <code>window.universal_login_context</code> JSON via the left panel.
      </p>
      {/* Left-side panel for universal_login_context (State 1) */}
      <UniversalLoginContextPanel />
    </div>
  );
};
