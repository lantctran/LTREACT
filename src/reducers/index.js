import { combineReducers } from 'redux';
import products from './products';
import travelers from './travelers';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    products,
    itemEditing,
    travelers
});

export default appReducers;