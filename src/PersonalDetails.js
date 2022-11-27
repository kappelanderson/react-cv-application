import React, { Component } from "react";

class PersonailDetails extends Component {
  constructor(props){
    super(props)

  this.personalChange = this.personalChange.bind(this)

}
personalChange(e){
   this.props.getPersonal(e)
}



  render() {

    return(
    <>
      <div>
          <h2>Personal Details</h2>
          <label>Name:
          <input value={this.props.state.name} id='name' onChange={this.personalChange}/>
          </label>
          <label>Title:
          <input value={this.props.state.title} id='title' onChange={this.personalChange}/>
          </label>
          <label>Phone:
          <input value={this.props.state.phone} id='phone' onChange={this.personalChange}/>
          </label>
          <label>Email:
          <input value={this.props.state.email} id='email' onChange={this.personalChange}/>
          </label>
          <label>Location:
          <input value={this.props.state.location} id='location' onChange={this.personalChange}/>
          </label>
          <label>Description:
          <textarea value={this.props.state.description} id='description' onChange={this.personalChange}/>
          </label>
      </div>

    </>
    )
  }
}

export default PersonailDetails;
