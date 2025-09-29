import React from 'react';
import { SelectField } from '@auth0/quantum-product';
import SelectField2 from "./universal-design/SelectField";

import type { PanelSelectContextProps, OptionInput } from '../types/components';

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
    screenOptions = [{
      label: selectedScreen || 'Current screen',
      value: selectedScreen || 'Current screen'
    }];
  }

  const isLocalDevelopment = selectedDataSource.toLowerCase().includes('local');

  // TODO: Check if can remove if update UIManifest object schema to value instead of label
  const mapOptions = (options: OptionInput[]): { value: string; text: string }[] => {
    return options?.map((option) => ({
      value: typeof option === 'object' ? option.value : option,
      text: typeof option === 'object' ? option.label : option
    }));
  };

  return (
    <div className="uci-flex uci-flex-col">
      {/* TODO NICE TO HAVE (task size +++): build searchable select to replace base select */}
      {/* TODO: fix dropdown display to match design */}
      <SelectField2
        name="panel-select-screen"
        prefix="Screen"
        options={screenOptions}
        value={selectedScreen}
        disabled={screenOptions?.length <= 1}
        placeholder="Current screen"
        onChange={onChangeSelectScreen}
      />

      {!isConnected && (
        <div>
          <SelectField2
            name="panel-select-variant"
            disabled={variantOptions?.length <= 1}
            onChange={onChangeSelectVariant}
            options={variantOptions}
            placeholder={selectedVariant}
            prefix="Variant"
            value={selectedVariant}
          />

          <div className="uci-flex uci-w-full">
            <SelectField2
              name="panel-select-data-source"
              prefix="Data source"
              options={dataSourceOptions}
              value={selectedDataSource}
              disabled={dataSourceOptions?.length <= 1}
              placeholder={selectedDataSource}
              onChange={onChangeSelectDataSource}
            />

            {!isLocalDevelopment && (
              <SelectField2
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

      <SelectField
        name="panel-select-screen"
        options={mapOptions(screenOptions)}
        size="small"
        fullWidth={true}
        prefix="Screen: "
        classes={{ root: "uci-select-field" }}
        disabled={screenOptions?.length <= 1}
        onChange={onChangeSelectScreen}
        value={selectedScreen}
      />

      {!isConnected && (
        <div>
          <SelectField
            name="panel-select-variant"
            options={mapOptions(variantOptions)}
            size="small"
            fullWidth={true}
            prefix="Variant: "
            classes={{root: "uci-select-field"}}
            disabled={variantOptions?.length <= 1}
            onChange={onChangeSelectVariant}
            value={selectedVariant}
          />

          <div className="uci-flex">
            <SelectField
              name="panel-select-data-source"
              options={mapOptions(dataSourceOptions)}
              size="small"
              fullWidth={true}
              prefix="Data source: "
              classes={{root: "uci-select-field"}}
              disabled={dataSourceOptions?.length <= 1}
              onChange={onChangeSelectDataSource}
              value={selectedDataSource}
            />

            {!isLocalDevelopment && (
              <SelectField
                name="panel-select-data-version"
                options={mapOptions(dataVersionOptions)}
                size="small"
                fullWidth={true}
                prefix="Data version: "
                classes={{root: "uci-select-field !uci-ml-2"}}
                disabled={dataVersionOptions?.length <= 1}
                onChange={onChangeSelectDataVersion}
                value={selectedDataVersion}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelSelectContext;
