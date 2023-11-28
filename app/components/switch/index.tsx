import React, { ForwardedRef } from 'react';
import { pink } from '@mui/material/colors';
import Switch, { SwitchProps } from '@mui/material/Switch';

const DefaultSwitch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        sx={{
          '& ': {
              left: -12,
              with: 20,
              height: 40
          },
            '& .MuiSwitch-sizeMedium': {
                left: -35,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#ff1654',

            '&:hover': {
              bgcolor: '#eb8cae',
            },
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            bgcolor: '#ff1654',
          },
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

DefaultSwitch.displayName = 'DefaultSwitch';

export default DefaultSwitch;
