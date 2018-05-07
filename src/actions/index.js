import axios from 'axios';
import { USER_UPDATED, FETCH_USERS_REJECTED, USER_SELECTED, LOAD_USER_DATA } from './types';
/**
 * 
 * @author Vaibhav Parkhi
 * @description application action dispatcher functions 
 */
/**
 * 
 * @param selectedUser
 * @param users
 * @param selectedUserIndex
 * select the user from list of users 
 */
export const selectUser = ({ selectedUser, users, selectedUserIndex }) => {
    return {
        type: USER_SELECTED,
        payload: { selectedUser, users, selectedUserIndex }
    }
}

/** 
 * Load the users data from server
*/
export const initUser = () => {
    return function (dispatch) {
        axios.get('data/db.json')
            .then((response) => {
                dispatch({ type: LOAD_USER_DATA, payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: FETCH_USERS_REJECTED, payload: err });
            })
    }
}
/**
 * 
 * @param user
 * @param selectedUserIndex
 * update/save the selected user  
 */
export const updateUser = ({ user, selectedUserIndex }) => {
    return {
        type: USER_UPDATED,
        payload: { user, selectedUserIndex }
    }
}