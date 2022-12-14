import React, { Component } from "react";

class Education extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

}
handleChange(e){
    this.props.educationChange(e.target.id, e.target.className, e.target.value)

}
handleCreate(){
    this.props.educationCreate()
}
handleDelete(e){
    this.props.educationDelete(e.target.id)
    




}



  render() {

    return(
    <>
        {this.props.education.map(element => {
            return(
            <div key={element.id}>
                <input id={element.id} value={element.university} className={'university'} key={'university'} onChange={this.handleChange} placeholder={'University'}/>
                <input id={element.id} value={element.city} className={'city'} onChange={this.handleChange} placeholder={'City'}/>
                <input id={element.id} value={element.degree} className={'degree'} onChange={this.handleChange} placeholder={'Degree'}/>
                <input id={element.id} value={element.subject} className={'subject'} onChange={this.handleChange} placeholder={'Subject'}/>
                <input id={element.id} value={element.from} className={'from'} onChange={this.handleChange} placeholder={'From'}/>
                <input id={element.id} value={element.to} className={'to'} onChange={this.handleChange} placeholder={'To'}/>
                <button id={element.id} onClick={this.handleDelete}>Delete</button>
            </div>)
        })}

     
        <button onClick={this.handleCreate}>Add Education</button>
    </>
    )
  }
}

export default Education;
