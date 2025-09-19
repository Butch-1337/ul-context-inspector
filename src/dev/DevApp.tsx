import React from "react";
import { UniversalLoginContextPanel } from "../index";


export const DevApp: React.FC = () => {

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
