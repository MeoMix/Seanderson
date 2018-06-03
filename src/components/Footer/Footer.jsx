import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core/';
import footerStyle from 'assets/jss/components/footerStyle.jsx';

function Footer({ classes, whiteFont }) {
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className = {footerClasses}>
      <div className = {classes.container}>
        <div className = {classes.left}>
          <List className = {classes.list}>
            <ListItem className = {classes.inlineBlock}>
              <a href='' className = {classes.block}>
                Link1
              </a>
            </ListItem>
            <ListItem className = {classes.inlineBlock}>
              <a href='' className = {classes.block}>
                Link2
              </a>
            </ListItem>
          </List>
        </div>
        <div className = {classes.right}>
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
