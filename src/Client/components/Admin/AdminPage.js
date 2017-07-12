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
    //  console.log(getUserInfo.methods);
    //  if (getUserInfo.methods > 1) {
    //    var methods = getUserInfo.methods.map((method, index) => (
    //      <div>{method}, </div>
    //    ))
    //    console.log({methods});
    //  } else {
    //    return (
    //      <div>{getUserInfo.methods}</div>
    //    )
    //  }

     return (
       <div>
           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Name: {getUserInfo.name}</label>

           </div>
           <div className="form-group">
             <label htmlFor="exampleInputPassword1">Description: {getUserInfo.description}</label>
           </div>
           <div className="form-group">
             <label htmlFor="exampleSelect1">Tags: {getUserInfo.tags}</label>
           </div>
           <div className="form-group">
             <label htmlFor="exampleSelect1">Methods: {getUserInfo.methods}</label>
           </div>
           <div className="form-group">
             <label htmlFor="exampleSelect1">Models: {getUserInfo.models}</label>
           </div>
           <div className="row">
            <button type="submit" className="btn btn-primary col-sm-3">Accept</button>
            <button type="submit" className="btn btn-primary col-sm-3">Deny</button>
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
