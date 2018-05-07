import { USER_UPDATED, FETCH_USERS_REJECTED, USER_SELECTED, LOAD_USER_DATA } from '../actions/types';
/**
 * 
 * @param state 
 * @param action
 * @author Vaibhav Parkhi 
 * @description App reducer which update the application state
 */
export default function (state = { selectedUserIndex: 0, users: [], selectedUser: {}}, action) {
    switch (action.type) {
        case USER_SELECTED:
            state.selectedUser = {};
            console.log(action.payload.selectedUser);
            return Object.assign({}, ...state, { selectedUser: action.payload.selectedUser, users: action.payload.users, selectedUserIndex: action.payload.selectedUserIndex });
            break;
        case LOAD_USER_DATA:
            return Object.assign({}, ...state, { users: action.payload, selectedUserIndex: 0 });
            break;
        case USER_UPDATED:
            const newState = [...state.users];
            newState[action.payload.selectedUserIndex].name = action.payload.user.name;
            newState[action.payload.selectedUserIndex].email = action.payload.user.email;
            newState[action.payload.selectedUserIndex].phone = action.payload.user.phone;
            newState[action.payload.selectedUserIndex].address.city = action.payload.user.city;
            return Object.assign({}, ...state, { users: newState, selectedUserIndex: action.payload.selectedUserIndex });
            break;
    }
    return state;
} 