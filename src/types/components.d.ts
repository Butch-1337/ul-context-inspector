/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IFieldProps } from "@auth0/quantum-product";

export interface PanelHeaderProps {
  isConnected: boolean;
  isConnectedText: string;
  isNotConnectedText: string;
  setOpen: (open: boolean) => void;
  title: string;
}

export interface PanelContainerProps {
  children: React.ReactNode;
  open: boolean;
  width: number | string;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectOption {
  value: string;
  text: string;
}

export type OptionInput = Option | string;

export interface PanelSelectContextProps {
  dataSourceOptions: SelectOption[];
  dataVersionOptions: SelectOption[];
  isConnected: boolean;
  onChangeSelectDataSource: (event: { target: { value: string } }) => void;
  onChangeSelectDataVersion: (event: { target: { value: string } }) => void;
  onChangeSelectScreen: (event: { target: { value: string } }) => void;
  onChangeSelectVariant: (event: { target: { value: string } }) => void;
  screenOptions: SelectOption[];
  selectedDataSource: string;
  selectedDataVersion: string;
  selectedScreen: string | undefined;
  selectedVariant: string;
  setSelectedScreen: (screen: string) => void;
  variantOptions: SelectOption[];
}

export interface PanelCodeEditorContainerProps {
  children: (codeWrap: boolean) => React.ReactNode;
  codeWrap?: boolean;
  isSearchVisible: boolean;
  onChangeSearch?: IFieldProps["onChange"];
  onCloseButtonClick: () => void;
  onCopyButtonClick: () => void;
  onDownloadButtonClick: () => void;
  onSearchButtonClick: () => void;
  searchValue?: string;
}

export interface PanelToggleButtonProps {
  onClick: () => void;
  panelTitle: string;
}
