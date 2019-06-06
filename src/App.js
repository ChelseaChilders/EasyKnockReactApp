import React, {Component} from 'react';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
    
    state = {
        fields: {
            streetAddress: "123 Main Street",
            city: "Crouse",
            state: "NC",
            zip: "28021",
        },
        apiData: {},
    };
    
    onSubmit = fields => {
        this.setState({
                fields: fields,
        })

        var APIKey = "cqgXnRvmevXw6LU3DQswQrv3ExcmL4";
        fetch("https://api.estated.com/property/v3?token="+APIKey+"&address="+fields.streetAddress.split(' ').join('+')+"&city="+fields.city+"&state="+fields.state+"&zipcode="+fields.zip+"")
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                apiData: data.properties,
            })
        });
        
    };
    
    render() {
        return (
            <div className="container">
                <h3>Please Submit Address: </h3>
                <div></div>
                <Form onSubmit={fields => this.onSubmit(fields)} className="form"/>
                <h4>Your Submitted Address: </h4>
                <div className="subAddress">
                    <p>{this.state.fields.streetAddress}</p>
                    <p>{this.state.fields.city + ", " + this.state.fields.state + " " + this.state.fields.zip}</p>
                </div>

                <h4>Your Property Response: </h4>
                <div className="propertyResponse">
                    <p>{JSON.stringify(this.state.apiData, null, 2)}</p>
                </div>
            </div>
        );
    }

}

export default App;
