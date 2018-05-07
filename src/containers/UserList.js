import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, initUser } from '../actions/index';
import UserCard from '../components/UserCard';
import UserDetails from './UserDetails';
/** 
 * @author Vaibhav Parkhi
 * @description UserList container component 
*/
class UserList extends React.Component {
    constructor() {
        super();
    }
    onSelectUser(user) {
        this.props.selectUser({
            selectedUser: user,
            users: this.props.users,
            selectedUserIndex: user.id - 1
        });
        $("#exampleModal").modal("show");
    }

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <UserCard key={user.id} onClickUser={this.onSelectUser.bind(this, user)} user={user}></UserCard>
            )
        })

    }

    render() {
        return (
            <div className="row pull-left">
                {this.createListItems()}
                
            </div>
        )


    }

    componentWillMount() {
        this.props.initUser();
    }

}
function mapStateToProps(state) {
    return {
        users: state.users.users,
        selectedUserIndex: state.selectedUserIndex,
        selectedUser: state.users.selectedUser
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        initUser: initUser
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
