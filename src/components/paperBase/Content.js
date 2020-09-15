import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Khora from '../../modules/weaponFilters/Khora';
import Kronen from '../../modules/weaponFilters/Kronen';
import Redeemer from '../../modules/weaponFilters/Redeemer';
import Stropha from '../../modules/weaponFilters/Stropha';
import UsableMeleeWeapon from '../../modules/weaponFilters/UsableMeleeWeapon';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
        <Switch>
            <Route exact path={'/melee/usableMelee'} render={(props) => <UsableMeleeWeapon />} />
            <Route exact path={'/melee/khora'} render={(props) => <Khora />} />
            <Route exact path={'/melee/kronen'} render={(props) => <Kronen />} />
            <Route exact path={'/melee/redeemer'} render={(props) => <Redeemer />} />
            <Route exact path={'/melee/stropha'} render={(props) => <Stropha />} />
            <Route exact path={'/melee/'} render={(props) => <UsableMeleeWeapon />} />
          </Switch>
        </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);