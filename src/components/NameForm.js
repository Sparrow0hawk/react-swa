import React from 'react';
import ApiFetch from './ApiFetch';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        ApiFetch(this.state.value)
            .then(result => {
                this.setState({ result });
            });
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
