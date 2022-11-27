import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    personal: {
      name: '',
      title: '',
      phone: '',
      email: '',
      location: '',
      description: '',
        },
    skills: [{id: 0, name: 'HTML'},],
    experience: [{id: 0, position: 'Software Engineer', company: 'UpWork', city: 'Juiz de Fora', from: '23/10/2021', to: '12/07/2022'}],
    education: [ {id: 0, university: 'Harvard', city: 'Cambridge', degree: 'graduate', subject: 'tech', from: '25/02/2020', to: '20/08/2022'}]
  }
  this.getPersonal = this.getPersonal.bind(this)
  this.skillsChange = this.skillsChange.bind(this)
  this.skillsCreate = this.skillsCreate.bind(this)
  this.skillsDelete = this.skillsDelete.bind(this)
  this.experienceChange = this.experienceChange.bind(this)
  this.experienceCreate = this.experienceCreate.bind(this)
  this.experienceDelete = this.experienceDelete.bind(this)
  this.educationChange = this.educationChange.bind(this)
  this.educationCreate = this.educationCreate.bind(this)
  this.educationDelete = this.educationDelete.bind(this)

}
skillsCreate(){
  this.setState({
    skills: [...this.state.skills, {id: this.state.skills.length, name: ''}]
  })
}
skillsDelete(id){
  let newArr = [...this.state.skills]
  let foundElement = newArr.find(element => element.id == id)
  newArr.splice(newArr.indexOf(foundElement), 1)
  
  this.setState({
    skills: [...newArr]
  })

}

skillsChange(e){
  let newObj = this.state.skills
  newObj[e.target.id].name = e.target.value
  this.setState({
    skills: newObj
  })

}
getPersonal(e){

  let newObj = this.state.personal
  console.log(newObj)

  newObj[e.target.id] = e.target.value
  this.setState({
    personal: newObj
  })
  console.log(this.state)
}

experienceChange(id, className, value){
  let newArr = [...this.state.experience]
  let foundElement = newArr.find(element => element.id == id)
  newArr[newArr.indexOf(foundElement)][className] = value

  this.setState({
      experience: [...newArr]
  })

}
experienceCreate(){
  this.setState({
    experience: [...this.state.experience, {id: this.state.experience.length, position: '', company: '', city: '', from: '', to: ''}]
  })
}
experienceDelete(id){
  let newArr = this.state.experience
  let foundElement = newArr.find(element => element.id == id)
  newArr.splice(newArr.indexOf(foundElement), 1)
  
  this.setState({
    experience: [...newArr]
  })


}

educationChange(id, className, value){
  let newArr = [...this.state.education]
  let foundElement = newArr.find(element => element.id == id)
  newArr[newArr.indexOf(foundElement)][className] = value

  this.setState({
    education: [...newArr]
  })

}
educationCreate(){
  this.setState({
    education: [...this.state.education, {id: this.state.education.length, university: '', city: '', degree: '', subject: '', from: '', to: ''}]
  })
}
educationDelete(id){
  let newArr = this.state.education
  let foundElement = newArr.find(element => element.id == id)
  newArr.splice(newArr.indexOf(foundElement), 1)
  
  this.setState({
    education: [...newArr]
  })


}







  render() {

    return(
    <>
    <h1>CV Application</h1>
      <div>
          <PersonalDetails getPersonal={this.getPersonal} state={this.state}/>
          <h2>Experience:</h2>
          <Experience experiences={this.state.experience} experienceChange={this.experienceChange} experienceCreate={this.experienceCreate} experienceDelete={this.experienceDelete}/>
          <h2>Education</h2>
          <Education education={this.state.education} educationChange={this.educationChange} educationCreate={this.educationCreate} educationDelete={this.educationDelete}/>
          <h2>Skills</h2>
          <Skills skills={this.state.skills} skillsChange={this.skillsChange} skillsCreate={this.skillsCreate} skillsDelete={this.skillsDelete}/>
      </div>

      <div>
        <h2>Name: {this.state.personal.name}</h2>
        <p>Email: {this.state.personal.email}</p>
        <p>Title: {this.state.personal.title}</p>
        <p>Phone: {this.state.personal.phone}</p>
        <p>Location: {this.state.personal.location}</p>
        <p>Description: {this.state.personal.description}</p>
      </div>
          <h2>Experience</h2>
          {this.state.experience.map(element => <div><p>{element.position}</p>
          <p>{element.company}</p>
          <p>{element.city}</p>
          <p>{element.from}</p>
          <p>{element.to}</p>
          </div>)}
      <div>
          <h2>Education</h2>
          {this.state.education.map(element =>
            <div>
              <li>{element.university}</li>
              <li>{element.city}</li>
              <li>{element.degree}</li>
              <li>{element.subject}</li>
              <li>{element.from}</li>
              <li>{element.to}</li>
            </div>
          )}
      </div>
      <div>
          <h2>Skills:</h2>
          {this.state.skills.map(element => <div key={element.id}> <li>{element.name}</li> </div>)}
      </div>
      
    </>
    )
  }
}

export default App;
