import React, { Component } from "react";

class Skills extends Component {
  constructor(props){
    super(props)

  this.handleChange = this.handleChange.bind(this)
  this.handleCreate = this.handleCreate.bind(this)
  this.handleDelete = this.handleDelete.bind(this)

}
handleChange(e){
    this.props.skillsChange(e)
}
handleCreate(){
    this.props.skillsCreate()
}
handleDelete(e){
    this.props.skillsDelete(e.target.id)
    console.log(e.target.id)
    
}



  render() {

    return(
    <>
      <div>
        
          {this.props.skills.map(element => {
            return(
          <div key={element.id}>
             <input id={element.id}  value={element.name} onChange={this.handleChange}/>
             <button id={element.id} onClick={this.handleDelete}>Delete</button>
             
          </div>)}
          )}
                       <button onClick={this.handleCreate}>Add Skills</button>

      </div>

    </>
    )
  }
}

export default Skills;
