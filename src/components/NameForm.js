import React from 'react';
import axios from 'axios';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        axios.post("/api/message", { 'name': this.state.value })
            .then(response => this.setState({ result: response.data }))
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>        <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {this.state.result}
                </div>
            </div>
        );
    }
}

export default NameForm;
