import React from 'react';
import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const style = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto'
  }
};

function GridItem({ classes, children, className, ...rest }) {
  return (
    <Grid item className = {classes.grid + ' ' + className} {...rest}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
