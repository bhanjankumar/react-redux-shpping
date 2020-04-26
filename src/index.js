import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import mainReducer from './main-reducer';
import appRoutes from './main-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import routerMiddleware from './middlewares/router-middleware/route-handler';

// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import App from './components/App';

let store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware)
  )
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={appRoutes(store,'http://localhost:3000/')} />
  </Provider>

), document.getElementById('root'));

// ReactDOM.render((
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <Switch>
//         <Route path="/" component={App} />
//       </Switch>
//     </ConnectedRouter>
//   </Provider>

// ), document.getElementById('root'));
