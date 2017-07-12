import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';

var Methods = React.createClass({
    getInitialState: function() {
        return {model: ""};
    },
    handleChange(event) {
        this.setState({value: event.target.value});
    },


    onAddClick(event){
      this.props.onAddClicked(event);
    },
    render: function() {
        if (this.props.models && this.props.models.length > 0) {

            var rows = this.props.models.map((model, index) => (
              <tr>
                <td>{model}</td>
            </tr>));

        } else {
            return (
                <span></span>
            );
        }

        return (
          <div className="row" style={{marginLeft: "100px"}}>
            <div className="col-md-6">

                {this.props.models.length > 0
                    ? <table className="table table-striped table-responsive table-bordered">
                            <thead>
                                <tr>
                                    <th>Models</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    : <span>You suck</span>}

            </div>
          </div>

        );
    }

});
module.exports = Methods;
