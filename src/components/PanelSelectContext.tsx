import React from 'react';
import SelectField from "./SelectField";

import type { PanelSelectContextProps } from '../types/components';

const PanelSelectContext: React.FC<PanelSelectContextProps> = ({
    dataSourceOptions,
    dataVersionOptions,
    isConnected,
    onChangeSelectDataSource,
    onChangeSelectDataVersion,
    onChangeSelectScreen,
    onChangeSelectVariant,
    screenOptions,
    selectedDataSource,
    selectedDataVersion,
    selectedScreen,
    selectedVariant,
    variantOptions,
  }) => {
  {/* TODO: when connected to tenant, pass current screen name */}
  if (screenOptions?.length === 0) {
    screenOptions = [selectedScreen || 'Current screen'];
  }

  const isLocalDevelopment = selectedDataSource?.toLowerCase().includes('local');

  return (
    <div className="uci-flex uci-flex-col">
      {/* TODO NICE TO HAVE: build searchable select to replace base select */}
      <SelectField
        name="panel-select-screen"
        prefix="Screen"
        options={screenOptions}
        value={selectedScreen}
        disabled={screenOptions?.length <= 1}
        placeholder={selectedScreen}
        onChange={onChangeSelectScreen}
      />

      {!isConnected && (
        <div>
          <SelectField
            name="panel-select-variant"
            disabled={variantOptions?.length <= 1}
            onChange={onChangeSelectVariant}
            options={variantOptions}
            placeholder={selectedVariant}
            prefix="Variant"
            value={selectedVariant}
          />

          <div className="uci-flex uci-w-full">
            <SelectField
              name="panel-select-data-source"
              prefix="Data source"
              options={dataSourceOptions}
              value={selectedDataSource}
              disabled={dataSourceOptions?.length <= 1}
              placeholder={selectedDataSource}
              onChange={onChangeSelectDataSource}
            />

            {!isLocalDevelopment && (
              <SelectField
                name="panel-select-data-version"
                prefix="Data version"
                options={dataVersionOptions}
                value={selectedDataVersion}
                disabled={dataVersionOptions?.length <= 1}
                placeholder={selectedDataVersion}
                onChange={onChangeSelectDataVersion}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelSelectContext;
