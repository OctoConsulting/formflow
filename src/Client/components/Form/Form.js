import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

//Custom components
import Banner from '../../Nav_Bar';
import Sign_In_Box_Content from './components/Sign_In_Box_Content';


class Form extends Component  {
  handleFormSubmit({name, description, tags}){
   this.props.signupUser({name, description, tags});
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
 render(){
    const {handleSubmit, fields: {name, description, tags}} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" {...name}/>
           {name.touched && name.error && <div className="text-error">{name.error}</div>}
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" {...description}/>
          {description.touched && description.error && <div className="text-error">{description.error}</div>}
          </div>
          <div className="form-group">
            <label for="exampleSelect1">Example select</label>
            <select className="form-control" id="exampleSelect1" {...tags}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            {tags.touched && tags.error && <div className="text-error">{tags.error}</div>}
          </div>
          {// <div className="form-group">
          //   <label for="exampleTextarea">Example textarea</label>
          //   <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          // </div>
          // <div className="form-group">
          //   <label for="exampleInputFile">File input</label>
          //   <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
          //   <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.</small>
          // </div>
          //   <fieldset className="form-group">
          //     <legend>Radio buttons</legend>
          //     <div className="form-check">
          //       <label className="form-check-label">
          //         <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
          //         Option one is this and that&mdash;be sure to include why it's great
          //       </label>
          //     </div>
          //     <div className="form-check">
          //     <label className="form-check-label">
          //         <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
          //         Option two can be something else and selecting it will deselect option one
          //       </label>
          //     </div>
          //     <div className="form-check disabled">
          //     <label className="form-check-label">
          //         <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
          //         Option three is disabled
          //       </label>
          //     </div>
          //   </fieldset>
          //   <div className="form-check">
          //     <label className="form-check-label">
          //       <input type="checkbox" className="form-check-input" />
          //       Check me out
          //     </label>
          //   </div>
        }
            <button type="submit" className="btn btn-primary">Submit</button>
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
  if (!values.tags){
    errors.password = "Please choose a tag";
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
    'description',
    'tags'
  ],
  validate
},mapStateToProps, actions)(Form);
