import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext';

// addPost('nwviuevn')
    let rerenderEntrieTree = (state) =>{
        debugger;
    ReactDOM.render(
    <BrowserRouter>
        <StoreContext.Provider value={store}>
            <App state={state} 
                dispatch={store.dispatch.bind(store)} 
                store={store}/>
        </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root'));
};
debugger;
rerenderEntrieTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntrieTree(state);
});


serviceWorker.unregister();

