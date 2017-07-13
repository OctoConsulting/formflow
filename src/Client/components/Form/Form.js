import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Methods from "./components/methods";
import Models from "./components/models";

class Form extends Component  {
  constructor(props) {
  super(props);
    this.state = {
      tags: "1",
      email: "",
      methods: [],
      method: "",
      models: [],
      model: "",
      approversName: "",
      approversEmail: ""
    };
  }
  handleFormSubmit({name, description}){
   const methods = this.state.methods;
   const models = this.state.models;
   const email = this.state.email;
   const tags = this.state.tags;
   const approversName = this.state.approversName;
   const approversEmail = this.state.approversEmail;
   this.props.signupUser({name, email, description, tags, methods, models, approversName, approversEmail});

  }

  renderAlert(){
   if(this.props.errorMessage){
     return(
       <div className="alert alert-danger">
         <strong>Oops!</strong> {this.props.errorMessage}
       </div>
     );
   }
  }
  handleTagsChange(event) {
      this.setState({tags: event.target.value});
  }
  addMethod() {
        var currentLanguages = this.state.methods;
        currentLanguages.push(this.state.method);

        this.setState({methods: currentLanguages});
  }
  handleMethodChange(e) {
        this.setState({method: e.target.value});
  }
  addModel() {
        var currentModels = this.state.models;
        currentModels.push(this.state.model);

        this.setState({models: currentModels});
  }
  handleModelChange(e) {
        this.setState({model: e.target.value});
  }
  handleEmailChange(e) {
        this.setState({email: e.target.value});
  }
  handleApproversNameChange(e) {
        this.setState({approversName: e.target.value});
  }
  handleApproversEmailChange(e) {
        this.setState({approversEmail: e.target.value});
  }
 render(){
    const {handleSubmit, fields: {name, description}} = this.props;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" {...name}/>
           {name.touched && name.error && <div className="text-error">{name.error}</div>}
            <small id="emailHelp" className="form-text text-muted">We'll never share your Name with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="text" className="form-control" onChange={this.handleEmailChange.bind(this)}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" {...description}/>
          {description.touched && description.error && <div className="text-error">{description.error}</div>}
          </div>
          <div className="form-group">
            <label for="exampleSelect1">Tags</label>
            <select className="form-control" id="exampleSelect1" onChange={this.handleTagsChange.bind(this)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="row">
            <div className="form-group"><label className="col-md-1 control-label">Methods</label>
              <div className="col-lg-11">
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                          <th style={{
                              width: "30%"
                          }}>
                          <div className="form-group fix-margin" style={{
                              marginBottom: "0px"
                          }}>
                          <input type="text" className="form-control" onChange={this.handleMethodChange.bind(this)}/>

                        </div>
                          </th>
                          <th style={{
                              textAlign: "center",
                              width: "15%"
                          }}>
                              <button type="button" className="btn btn-default" style={{
                                  width: "95%"
                              }} onClick={this.addMethod.bind(this)}>Add</button>
                          </th>
                      </tr>
                    </thead>
                  </table>
              </div>
              <Methods methods={this.state.methods} onAddClicked={this.showTable3}></Methods>
            </div>
          </div>
          <div className="row">
            <div className="form-group"><label className="col-md-1 control-label">Models</label>
              <div className="col-lg-11">
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                          <th style={{
                              width: "30%"
                          }}>
                          <div className="form-group fix-margin" style={{
                              marginBottom: "0px"
                          }}>
                          <input type="text" className="form-control" onChange={this.handleModelChange.bind(this)}/>

                        </div>
                          </th>
                          <th style={{
                              textAlign: "center",
                              width: "15%"
                          }}>
                              <button type="button" className="btn btn-default" style={{
                                  width: "95%"
                              }} onClick={this.addModel.bind(this)}>Add</button>
                          </th>
                      </tr>
                    </thead>
                  </table>
              </div>
              <Models models={this.state.models} onAddClicked={this.showTable3}></Models>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1" style={{fontWeight: "700"}}>
              Approvers Info
            </div>
            <div className="col-md-5">
              <input className="form-control" type="text" placeholder="Approvers Name" onChange={this.handleApproversNameChange.bind(this)}/>
            </div>
            <div className="col-md-5">
              <input className="form-control" type="text" placeholder="Approvers Email" onChange={this.handleApproversEmailChange.bind(this)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
};

function validate(values){
  const errors ={};
  if (!values.name){
    errors.name = "Please enter a name";
  }
  if (!values.description){
    errors.description = "Please enter a valid description";
  }

  return errors;
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  form: 'signup',
  fields: [
    'name',
    'description'
  ],
  validate
},mapStateToProps, actions)(Form);
