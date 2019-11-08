
import React from 'react';
import ReactDOM from 'react-dom';


// work with applyMiddleware to fix redux asyc
import thunk from 'redux-thunk';

// createStore receive reducer to generate stote, compose combine and generate store with other data applyMiddleware receive thunk to fix redux asyc
import {createStore, compose, applyMiddleware} from 'redux';

// Provider transfers store
import {Provider} from 'react-redux';

// mutiple route elements
import {BrowserRouter as Router, Route} from 'react-router-dom';

// check login or not
//import CheckLogin from './components/checkLogin/CheckLogin'

// imoort browser route
import Login from './containers/login/login';
import Dashboard from './containers/dashboard/dashboard';
import AdminRegister from './containers/adminregister/adminregister';


// generate store
import reducer from './reducers';


const store = createStore(reducer, compose(
    applyMiddleware(thunk), //fix redux asyc
    window.devToolsExtension ? window.devToolsExtension() : f => f // chrome console redux tools
))

// render
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="react-login-register">
                    {/* <CheckLogin></CheckLogin> */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/Dashboard' component={Dashboard}></Route>
                    <Route path='/Adminregister' component={AdminRegister}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)


