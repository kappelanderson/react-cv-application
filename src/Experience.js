import React, { Component } from "react";

class Experience extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

}
handleChange(e){
    this.props.experienceChange(e.target.id, e.target.className, e.target.value)

}
handleCreate(){
    this.props.experienceCreate()
}
handleDelete(e){
    this.props.experienceDelete(e.target.id)
    




}



  render() {

    return(
    <>
        {this.props.experiences.map(element => {
            return(
            <div key={element.id}>
                <label>Position</label>
                <input id={element.id} value={element.position} className={'position'} key={'position'} onChange={this.handleChange}/>
                <label>Company</label>
                <input id={element.id} value={element.company} className={'company'} onChange={this.handleChange}/>
                <label>City</label>
                <input id={element.id} value={element.city} className={'city'} onChange={this.handleChange}/>
                <label>From</label>
                <input id={element.id} value={element.from} className={'from'} onChange={this.handleChange}/>
                <label>To</label>

                <input id={element.id} value={element.to} className={'to'} onChange={this.handleChange}/>
                <button id={element.id} onClick={this.handleDelete}>Delete</button>
            </div>)
        })}

     
        <button onClick={this.handleCreate}>Add Experience</button>
    </>
    )
  }
}

export default Experience;
