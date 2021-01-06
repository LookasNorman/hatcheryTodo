import React from 'react';
import {Typography} from '@material-ui/core';

export const CardSubtitle = ({ header }) => {

  return (
    <Typography variant="h5" component="h2">
      {header}
    </Typography>
  );
}