import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import * as RoutesModule from "./routers";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "react-router-redux";
import ConfigureStore from "./config-store";

function render() {
  
    const routes = RoutesModule.routes;
  
    const history = createBrowserHistory({ basename: "/" });
    
    const store = ConfigureStore();
  
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>,
      document.getElementById("root")
    );
  }
  
render();

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
