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
  compontDidMount(){
    $(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });
  }
  handleFormSubmit({name, description}){
   const methods = this.state.methods;
   const models = this.state.models;
   const email = this.state.email;
   const tags = this.state.tags;
   const approversName = this.state.approversName;
   const approversEmail = this.state.approversEmail;
   this.props.signupUser({name, email, description, tags, methods, models, approversName, approversEmail});
   alert('We will reply to you as soon as possible');
   window.location.reload();
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
  methodRemove(method, index) {
    var currentMethod = this.state.methods;
    currentMethod.splice(index, 1);
    this.setState({methods: currentMethod});
  }
  modelRemove(model, index) {
    var currentModel = this.state.models;
    currentModel.splice(index, 1);
    this.setState({models: currentModel});
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
      <div className="container">
        <div className="jumbotron" style={{backgroundColor: "white"}}>
          <h1>FormFlow</h1>
          <p>Army DSE is just a registry of enterprise data and services so if you create a web service and want to share it with the enterprise, you can add it to the registry with whatever the endpoints are, schemas, etc.</p>
        </div>
        <div className="ibox-title">
          <h5>Form <small>Please fill out all the boxes down below.</small></h5>
        </div>
        <div className="ibox-content">
          <div className="row">
          <div className="col-md-12">
            <form  data-toggle="validator" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required {...name}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your Name with anyone else.</small>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" onChange={this.handleEmailChange.bind(this)}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" data-error="Bruh, that email address is invalid" required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" required {...description}/>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="form-group">
              <label htmlFor="exampleSelect1">Tags</label>
              <select required="required" className="form-control" id="exampleSelect1" onChange={this.handleTagsChange.bind(this)} >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="form-group">
              <div className="row">
              <label className="col-md-1 control-label">Methods</label>
                <div className="col-md-11">
                    <table className="table table-bordered table-responsive">
                      <thead>
                        <tr>
                            <th style={{
                                width: "30%"
                            }}>
                            <div className="form-group fix-margin" style={{
                                marginBottom: "0px"
                            }}>
                            <input type="text" className="form-control" onChange={this.handleMethodChange.bind(this)} required/>

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
                <Methods methods={this.state.methods} onAddClicked={this.showTable3} onMethodRemove={this.methodRemove.bind(this)}></Methods>
              </div>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="form-group">
              <div className="row">
                <label className="col-md-1 control-label">Models</label>
                <div className="col-md-11">
                    <table className="table table-bordered table-responsive">
                      <thead>
                        <tr>
                            <th style={{
                                width: "30%"
                            }}>
                            <div className="form-group fix-margin" style={{
                                marginBottom: "0px"
                            }}>
                            <input type="text" className="form-control" onChange={this.handleModelChange.bind(this)} required/>

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
                <Models models={this.state.models} onAddClicked={this.showTable3} onModelRemove={this.modelRemove.bind(this)}></Models>
              </div>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Approvers Info</label>
              <div className="row">
                <div className="col-md-6">
                  <input className="form-control" type="text" placeholder="Approvers Name" onChange={this.handleApproversNameChange.bind(this)} required/>
                </div>
                <div className="col-md-6">
                  <input className="form-control" type="email" placeholder="Approvers Email" onChange={this.handleApproversEmailChange.bind(this)} required/>
                </div>
              </div>
            </div>
            <div className="hr-line-dashed"></div>
            <div className="row">
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
          </div>
        </div>
        </div>
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
