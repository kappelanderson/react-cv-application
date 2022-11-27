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
          <input value={this.props.state.name} id='name' onChange={this.personalChange} placeholder={'Name'}/>
          <input value={this.props.state.title} id='title' onChange={this.personalChange} placeholder={'Title'}/>
          <input value={this.props.state.phone} id='phone' onChange={this.personalChange} placeholder={'Phone'}/>
          <input value={this.props.state.email} id='email' onChange={this.personalChange} placeholder={'Email'}/>
          <input value={this.props.state.location} id='location' onChange={this.personalChange} placeholder={'Location'}/>
          <textarea value={this.props.state.description} id='description' onChange={this.personalChange} placeholder={'Description'}/>
      </div>

    </>
    )
  }
}

export default PersonailDetails;
