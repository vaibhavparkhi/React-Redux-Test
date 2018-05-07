import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/App.scss';
/**
 * 
 * @author Vaibhav Parkhi
 * @description UserCard laypout/dump component 
 */
const UserCard = ({ user, onClickUser }) => (
    <div className="col-sm-4" onDoubleClick={onClickUser}>
        <div className="card card-extra">
            <h5 className="card-title card-title-extra">{user.name}</h5>
            <div className="card-body card-body-extra">
                <p className="card-text text-center">Email: {user.email}</p>
                <p className="card-text text-center">City: {user.address.city}</p>
                <p className="card-text text-center">Phone: {user.phone}</p>
                <p className="card-text text-center">Website: {user.website}</p>
                <p className="card-text text-center">Comany Name: {user.company.name}</p>
                {/* <span href="#" data-toggle="model" className="btn btn-primary glyphicon glyphicon-edit" data-target="#exampleModal">Edit</span> */}
            </div>
        </div>
    </div>
)
UserCard.propsTypes = {
    user: PropTypes.object.isRequired,
    onClickUser: PropTypes.func.isRequired
}
export default UserCard;