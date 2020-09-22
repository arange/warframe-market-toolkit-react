import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import React, { Component, Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Khora from './modules/melee/Khora';
import Kronen from './modules/melee/Kronen';
import UsableMeleeWeapon from './modules/melee/UsableMeleeWeapon';
import { AppContext } from './service/app.context';
import { isKhora, isUsable } from './service/functions';
import { MeleeWeapons } from './WarframeItemDB';

class Main extends Component {

  static contextType = AppContext;

  state = {

  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {

    return (
      <Fragment>
        <List component="nav" aria-label="main mailbox folders" style={{ position: "fixed", top: '0', zIndex: '10', background: 'white', width: '100%' }}>
          <NavLink to='/khora'>
            <ListItem button>
              <ListItemIcon>
                <RestaurantIcon />
              </ListItemIcon>
              <ListItemText primary="猫刀" />
            </ListItem>
          </NavLink>
          <NavLink to='/usableMelee'>
            <ListItem button>
              <ListItemIcon>
                <RestaurantIcon />
              </ListItemIcon>
              <ListItemText primary="可用近战" />
            </ListItem>
          </NavLink>
          <NavLink to='/kronen'>
            <ListItem button>
              <ListItemIcon>
                <LocalDiningIcon />
              </ListItemIcon>
              <ListItemText primary="皇拐" />
            </ListItem>
          </NavLink>
        </List>
        <div style={{ position: 'relative', marginTop: '10rem' }}>
          <Switch>
            <Route exact path={'/khora'} render={(props) => <Khora />} />
            <Route exact path={'/usableMelee'} render={(props) => <UsableMeleeWeapon />} />
            <Route exact path={'/kronen'} render={(props) => <Kronen />} />
            <Route exact path={'/'} render={(props) => <Khora />} />
          </Switch>
        </div>
      </Fragment>

    );
  }
}

export default Main;