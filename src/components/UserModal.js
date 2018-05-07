import React from 'react';
import UserForm from './UserForm';
import PropTypes from 'prop-types';
/**
 * 
 * @author Vaibhav Parkhi
 * @description UserModal laypout/dump component 
 */
const UserModal = ({ selectedUser, modalId, onSaveChange }) => {
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" role="modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{selectedUser.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <UserForm onSaveChange={onSaveChange} selectedUser={selectedUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}
UserModal.propsTypes={
    selectedUser: PropTypes.object.isRequired,
    modalId:PropTypes.string.isRequired,
    onSaveChange: PropTypes.func.isRequired
}
export default UserModal;