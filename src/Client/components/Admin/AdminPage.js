import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';




class Admin extends Component  {
  componentDidMount(){
    const id = this.props.params.id;
     this.props.retrievSubmittedFormById(id);
  }

  render(){
    console.log(this.props);
    //  console.log(this.props.getUserInfo);
    const getUserInfo = this.props.getUserInfo;
    console.log(getUserInfo.methods);
    var methodsArr = getUserInfo.methods || [];
    var methods = methodsArr.map((method, index) => (
     <span className="method">{method}</span>
    ))
    var modelsArr = getUserInfo.models || [];
    var models = modelsArr.map((model, index) => (
     <span className="model">{model}</span>
    ))

    return (
       <div className="container">
         <div className="jumbotron">
           <h2>Pending Request</h2>
           <p>The Application below has been submitted for approval</p>
           </div>
           <div className="row">
             <div className="col-md-1" style={{fontWeight: "700"}}>Name:</div>
             <div className="col-md-11">{getUserInfo.name}</div>
           </div>
           <div className="row">
             <div className="col-md-1" style={{fontWeight: "700"}}>Email:</div>
             <div className="col-md-11">{getUserInfo.email}</div>
           </div>
           <div className="row">
             <div className="col-md-1" style={{fontWeight: "700"}}>Description:</div>
             <div className="col-md-11">{getUserInfo.description}</div>
           </div>
           <div className="row">
             <div className="col-md-1" style={{fontWeight: "700"}}>Tags:</div>
             <div className="col-md-11">{getUserInfo.tags}</div>
           </div>
           <div className="row">
             <div className="col-md-1" style={{fontWeight: "700"}}>Methods:</div>
             <div className="col-md-11">{methods}</div>
           </div>
           <div className="row">
             <div className="col-md-1" style={{fontWeight: "700"}}>Models:</div>
             <div className="col-md-11">{models}</div>
           </div>
           <div className="row">
             <div className="col-md-4">
               <button type="submit" style={{backgroundColor: "#44CC44"}} className="btn btn-primary col-sm-3">Accept <span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></button>
             </div>
             <div className="col-md-4">
               <button type="submit" style={{backgroundColor: "tomato"}} className="btn btn-primary col-sm-3">Deny <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true"></span></button>
             </div>
           </div>

       </div>
    );
  }
};


function mapStateToProps(state){
  return {
    getUserInfo: state.getUserInfo
  };
}

//Connect the reducer to the container
export default connect (mapStateToProps, actions) (Admin);
