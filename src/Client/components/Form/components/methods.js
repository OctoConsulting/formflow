import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';

var Methods = React.createClass({
    getInitialState: function() {
        return {method: ""};
    },
    handleChange(event) {
        this.setState({value: event.target.value});
    },
    onMethodRemove(){
       this.props.onMethodRemove();
    },
    onAddClick(event){
      this.props.onAddClicked(event);
    },
    render: function() {
        if (this.props.methods && this.props.methods.length > 0) {

            var rows = this.props.methods.map((method, index) => (
              <tr>
                <td className="center">{method}</td>
                <td className="center"><span onClick={this.onMethodRemove} className="glyphicon glyphicon-trash"></span></td>
            </tr>));

        } else {
            return (
                <span></span>
            );
        }

        return (
          <div className="row">
            <div className="col-md-10">

                {this.props.methods.length > 0
                    ? <table className="table table-striped table-responsive table-bordered" style={{marginLeft: "115px"}}>
                            <thead>
                                <tr>
                                    <th className="center">Methods</th>
                                    <th className="center">DELETE</th>
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
