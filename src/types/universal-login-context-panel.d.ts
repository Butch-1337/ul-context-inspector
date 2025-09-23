export interface UniversalLoginContextPanelProps {
  defaultOpen?: boolean;
  width?: number | string;
  root?: WindowLike;
  screenLabel?: string;
  variants?: string[]; // available variant options
  dataSources?: string[]; // e.g. ['Auth0 CDN','Local']
  versions?: string[]; // version tags
  defaultVariant?: string;
  defaultDataSource?: string;
  defaultVersion?: string;
  onVariantChange?: (value: string) => void;
  onDataSourceChange?: (value: string) => void;
  onVersionChange?: (value: string) => void;
}

interface WindowLike {
  universal_login_context?: unknown;
  [k: string]: unknown;
}
