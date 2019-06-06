import React from 'react';
import './App.css';

export default class Form extends React.Component {
    state = {
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
    }

change = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
    })
}

render() {
    return (
        
        <form className="myForm">
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                    id="inputAddress" type="text" className="form-control" name="streetAddress"
                    placeholder= '111 Main St'
                    value={this.state.streetAddress} 
                    onChange={e => this.change(e)}
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                        id="inputCity" type="text" className="form-control"
                        name="city"
                        placeholder= 'City'
                        value={this.state.city}
                        onChange={e => this.change(e)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control"
                        name="state"
                        value={this.state.state}
                        onChange={e => this.change(e)}
                    >
                        <option defaultValue>Choose...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        <option value="WY">Other</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input
                        id="inputZip" type="text" className="form-control"
                        name="zip"
                        placeholder= 'ZIP'
                        value={this.state.zip}
                        onChange={e => this.change(e)}
                    />
                </div>
            </div>
            
            <div className="col text-center">
                <button type="submit" className="btn btn-success" onClick={e => this.onSubmit(e)}>Submit Your Address</button>
            </div>
        </form>
        
    );
}
}