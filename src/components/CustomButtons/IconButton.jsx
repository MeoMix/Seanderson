import React from 'react';
import { withStyles, IconButton } from '@material-ui/core/';
import PropTypes from 'prop-types';
import iconButtonStyle from 'assets/jss/components/iconButtonStyle.jsx';

function IconCustomButton({ classes, color, children, className, ...rest }) {
  return (
    <IconButton
      className = {
        classes.button +
        (color ? ' ' + classes[color] : '') +
        (className ? ' ' + className : '')
      }
      {...rest}
    >
      {children}
    </IconButton>
  );
}

IconCustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'transparent',
    'facebook',
    'twitter',
    'google',
    'github'
  ]),
  simple: PropTypes.bool,
  disabled: PropTypes.bool
};

export default withStyles(iconButtonStyle)(IconCustomButton);
