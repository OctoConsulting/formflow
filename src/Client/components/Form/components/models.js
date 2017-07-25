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
    onModelRemove(){
       this.props.onModelRemove();
    },
    onAddClick(event){
      this.props.onAddClicked(event);
    },
    render: function() {
        if (this.props.models && this.props.models.length > 0) {

            var rows = this.props.models.map((model, index) => (
              <tr>
                <td className="center">{model}</td>
                <td className="center red"><span onClick={this.onModelRemove} className="glyphicon glyphicon-trash cursor"></span></td>
            </tr>));

        } else {
            return (
                <span></span>
            );
        }

        return (
          <div className="row" >
            <div className="col-md-10">

                {this.props.models.length > 0
                    ? <table className="table table-striped table-responsive table-bordered" style={{marginLeft: "115px"}}>
                            <thead>
                                <tr>
                                    <th className="center">Models</th>
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
