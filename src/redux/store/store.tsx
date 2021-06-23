import { createStore } from 'redux';
import RootReducer from '@/redux/reducer/reducer';
let store = createStore(RootReducer);
export default store;