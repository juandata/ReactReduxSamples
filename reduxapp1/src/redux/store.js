import { createStore } from 'redux';
import ChangeViewReducer from './reducers';

const store = createStore(ChangeViewReducer,
window.devToolsExtension && window.devToolsExtension());
export default store;
