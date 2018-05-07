import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserModal from '../components/UserModal';
import { updateUser } from '../actions';
/** 
 * @author Vaibhav Parkhi
 * @description UserDetails container component which hold store state & dispatch action  
*/
class UserDetails extends React.Component {
    constructor(props) {
        super();
    }

    updateUser(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        let savedUserObj = {
            name: data.get('name'),
            email: data.get('email'),
            city: data.get('city'),
            phone: data.get('phone')
        }
        this.props.updateUser({ user: savedUserObj, selectedUserIndex: this.props.selectedUserIndex });
        $("#exampleModal").modal("hide");
    }

    render() {

        let selectedUser = this.props.users[this.props.selectedUserIndex];

        if (this.props.users.length > 0) {
            return (
                <div>
                    <UserModal selectedUser={selectedUser} modalId="exampleModal" onSaveChange={this.updateUser.bind(this)} />
                </div>
            )
        } else {
            return (
                <div>User data not found!</div>
            )
        }

    }


}
function mapStateToProps(state) {
    return {
        users: state.users.users,
        selectedUserIndex: state.users.selectedUserIndex,
        selectedUser: state.users.selectedUser
    };
}
function matchDispatchToProps(dispatch) {
    console.log(this.state);
    return bindActionCreators({
        updateUser: updateUser,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetails);
