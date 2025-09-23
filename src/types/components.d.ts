export interface PanelHeaderProps {
  isConnected: boolean;
  isConnectedText: string;
  isNotConnectedText: string;
  setOpen: (open: boolean) => void;
  title: string;
}

export interface PanelContainerProps {
  children: React.ReactNode;
  width: number | string;
  open: boolean;
}
