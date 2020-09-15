import React, { Component } from 'react';
import { appConfig } from '../config';

export const AppContext = React.createContext({
  SERVER_BASE_API_URL: appConfig.apiUrl
})

export class AppContextProvider extends Component {

  state = {
    SERVER_BASE_API_URL: appConfig.apiUrl,
  }

  render() {
    return (
      <AppContext.Provider value={ {...this.state} }>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}