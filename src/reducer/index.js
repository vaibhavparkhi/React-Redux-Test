import { combineReducers } from 'redux';
import UserReducer from './reducer-user';

/** 
 * @author Vaibhav Parkhi
 * Combine reducer of app
*/
const allReducer = combineReducers({
    users: UserReducer
});
export default allReducer;