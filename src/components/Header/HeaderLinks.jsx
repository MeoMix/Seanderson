import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Apps } from '@material-ui/icons';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import headerLinksStyle from 'assets/jss/components/headerLinksStyle.jsx';

function HeaderLinks({ classes }) {
  return (
    <List className = {classes.list}>
      <ListItem className = {classes.listItem}>
        <CustomDropdown
          buttonText='Navigation'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to='/' className = {classes.dropdownLink}>
              Home
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
