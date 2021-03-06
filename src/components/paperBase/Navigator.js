import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import ColorizeIcon from '@material-ui/icons/Colorize';
import Filter1Icon from '@material-ui/icons/Filter1';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { NavLink } from 'react-router-dom';
import update from 'immutability-helper';



const categories = [
  {
    id: 'Riven',
    children: [
      { id: 'Melee Weapon', icon: <ColorizeIcon />, link: '/melee' },
      { id: 'Primary Weapon', link: '/primary', icon: <Filter1Icon /> },
      // { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      // { id: 'Hosting', icon: <PublicIcon /> },
      // { id: 'Functions', icon: <SettingsEthernetIcon /> },
      // { id: 'ML Kit', icon: <SettingsInputComponentIcon /> },
    ],
  },
  {
    id: 'Item',
    children: [
      { id: 'Ducats (in progress)', icon: <SettingsIcon /> },
      // { id: 'Performance', icon: <TimerIcon /> },
      // { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const activeItem = {
  id: categories[0].id,
  childId: categories[0].children[0].id,
};

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {

  const [menu, setMenu] = React.useState({ categories, activeItem });

  const handleClickMenuItem = (id, childId) => {
    const topIndex = menu.categories.findIndex(category => category.id === id);
    const childIndex = menu.categories[topIndex].children.findIndex(child => child.id === childId);
    console.log(topIndex, childIndex);
    const newMenu = update(menu, {
      activeItem: {
        $set: {
          id: id,
          childId: childId,
        }
      }
    });
    setMenu(newMenu);
    // console.log(newMenu);
  }

  const isActive = (id, childId) => {
    if (menu.activeItem.id === id && menu.activeItem.childId === childId) {
      // console.log(id, childId, ' is active now!');
      return true;
    };
    // console.log(id, childId, ' is not active now!');
    return false;
  }

  const { classes, ...other } = props;
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Warframe Market Toolkit
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem>
        {menu.categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, link, icon }) => (
              <NavLink to={link ? link : '/'} style={{ textDecoration: 'none' }}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, isActive(id, childId) && classes.itemActiveItem)}
                >
                  <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                  <ListItemText
                    onClick={() => handleClickMenuItem(id, childId)}
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </NavLink>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer >
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);