import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import allReducer from './src/reducer';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import App from './src/components/App';

// redux-store stores all application states/data 
const store=createStore(allReducer,{},applyMiddleware(ReduxThunk));

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,document.getElementById('app'));