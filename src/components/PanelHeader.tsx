import React from 'react';
import { IconButton, CollapseIcon } from '../assets/icons';
import { Label, StatusDot, StatusIcon, Text } from '@auth0/quantum-product';
import type { PanelHeaderProps } from '../types/components';

const PanelHeader: React.FC<PanelHeaderProps> = ({ title, isConnected, isConnectedText, isNotConnectedText, setOpen }) => {

  return (
    <div className="uci-flex uci-items-center uci-justify-between uci-mb-4">
        <div className="uci-flex uci-items-center uci-gap-2">
          <h1 className="uci-tracking-wide">
            {title}
          </h1>
          <Label
            sx={{
              backgroundColor: isConnected ? '#062A16' : '#292406',
              height: "20px",
              display: "flex",
              alignItems: "center",
            }}
            >
            <StatusDot
              label=""
              color={isConnected ? 'success' : 'warning'}
              textVariant="overline"
              />
            <Text
              color={isConnected ?
                '#98D2B2' :
                '#E3C423'
              }
              variant="overline"
              sx={{ fontSize: '11px' }}
            >
              {isConnected ? isConnectedText : isNotConnectedText}
            </Text>
          </Label>
        </div>
        {/* TODO: What should the StatusIcon display/toggle? What info? Check with design/product */}
        {/* TODO: Add action to status icon */}
        <div className="uci-flex uci-items-center">
          <StatusIcon
            sx={{
              color: "white",
              backgroundColor: 'transparent',
              fontSize: '16px',
              width: "auto",
              marginRight: "20px"
            }}
          />
          {/* TODO: add collapse animation */}
          <IconButton label="Close" onClick={() => setOpen(false)}>
            <CollapseIcon />
          </IconButton>
        </div>
      </div>
  );
};

export default PanelHeader;
