import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** 
 * @author Vaibhav Parkhi
 * @description Higher Order component to handle the form interaction 
*/
class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'ddd', email: "", city: "", phone: "" };
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.props.onSaveChange}>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" name="name" value={this.state.name} onChange={this.onHandleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail" name="email" value={this.state.email} onChange={this.onHandleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputCity" className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.onHandleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPhone" name="phone" value={this.state.phone} onChange={this.onHandleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-2 pull-right">Save</button>
            </form>
        )
    }

    componentDidMount() {
        this.updateStateWithProps(newProps);
    }

    componentWillReceiveProps(newProps) {
        this.updateStateWithProps(newProps);
    }

    updateStateWithProps(props) {
        this.setState({ name: props.selectedUser.name, email: props.selectedUser.email, city: props.selectedUser.address.city, phone: props.selectedUser.phone });
    }
}

UserForm.propsTypes = {
    selectedUser: PropTypes.object.isRequired,
    onSaveChange: PropTypes.func.isRequired
}
export default UserForm;
