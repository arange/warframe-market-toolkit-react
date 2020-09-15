import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes, onDrawerToggle } = props;
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <React.Fragment>
      <AppBar color="primary" position="static" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                Go to docs
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Melee Weapon
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Configuration">
                <IconButton color="inherit">
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        // className={classes.secondaryBar}
        color="primary"
        position="sticky"
        elevation={0}
      >
        <Tabs value={selectedTab} textColor="inherit">
          <NavLink to='/melee/usableMelee' style={{ color: '#fff', textDecoration: 'none' }}>
            <Tab textColor="inherit" label="可用近战" onClick={() => setSelectedTab(0)} />
          </NavLink>
          <NavLink to='/melee/khora' style={{ color: '#fff', textDecoration: 'none' }}>
            <Tab textColor="inherit" label="猫刀" onClick={() => setSelectedTab(1)} />
          </NavLink>
          <NavLink to='/melee/kronen' style={{ color: '#fff', textDecoration: 'none' }}>
            <Tab textColor="inherit" label="皇拐" onClick={() => setSelectedTab(2)} />
          </NavLink>
          <NavLink to='/melee/redeemer' style={{ color: '#fff', textDecoration: 'none' }}>
            <Tab textColor="inherit" label="救赎者" onClick={() => setSelectedTab(3)} />
          </NavLink>
          <NavLink to='/melee/stropha' style={{ color: '#fff', textDecoration: 'none' }}>
            <Tab textColor="inherit" label="诡计之刃" onClick={() => setSelectedTab(4)} />
          </NavLink>
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);