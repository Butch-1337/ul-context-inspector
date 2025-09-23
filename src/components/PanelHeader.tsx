import React from 'react';
import { IconButton, CollapseIcon } from '../assets/icons';
import { Label, StatusDot, StatusIcon, Text } from '@auth0/quantum-product';
import * as theme from '@auth0/quantum-tokens';
import type { PanelHeaderProps } from '../types/components';

const PanelHeader: React.FC<PanelHeaderProps> = ({ title, isConnected, isConnectedText, isNotConnectedText, setOpen }) => {

  return (
    <div className="uci-flex uci-items-center uci-justify-between uci-px-4 uxi-py-6">
        <div className="uci-flex uci-items-center uci-gap-2">
          <h1 className="uci-tracking-wide">
            {title}
          </h1>
          <Label
            sx={{
              backgroundColor: isConnected ?
                theme.auth0.dark.color_bg_state_success_subtle :
                "#292406",
              height: "20px",
              display: "flex",
              alignItems: "center",
            }}
            >
            <StatusDot
              label=""
              color={isConnected ? "success" : "warning"}
              textVariant="overline"
              />
            <Text
              color={isConnected ?
                theme.auth0.dark.color_fg_on_state_success_subtle :
                "#E3C423"
              }
              variant="overline"
              sx={{ fontSize: '11px' }}
            >
              {isConnected ? isConnectedText : isNotConnectedText}
            </Text>
          </Label>
        </div>
        {/* What should the StatusIcon display/toggle? What info? */}
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
