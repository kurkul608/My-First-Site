import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from './profile-reducer';
import sideBarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    sideBar: sideBarReducer,
    form: formReducer,
    app: appReducer
});
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store = store;

// let store = createStore(reducers, applyMiddleware(thunk));
// window.store = store;
export default store;