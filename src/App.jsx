import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import './style.css'

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
    skills: [],
    experience: [],
    education: [ ]
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
    <header>
        <h1>CV Application</h1>
    </header>
      <main>
          <div className="inputcontainer">
              <PersonalDetails getPersonal={this.getPersonal} state={this.state}/>
              <h2>Experience:</h2>
              <Experience experiences={this.state.experience} experienceChange={this.experienceChange} experienceCreate={this.experienceCreate} experienceDelete={this.experienceDelete}/>
              <h2>Education</h2>
              <Education education={this.state.education} educationChange={this.educationChange} educationCreate={this.educationCreate} educationDelete={this.educationDelete}/>
              <h2>Skills</h2>
              <Skills skills={this.state.skills} skillsChange={this.skillsChange} skillsCreate={this.skillsCreate} skillsDelete={this.skillsDelete}/>
          </div>
          <div className="outputcontainer">
              <div className="outputheader">
                <div className="left">
                    <h2>{this.state.personal.name}</h2>
                    <p>{this.state.personal.title}</p>
                </div>
                <div className="right">
                  <li>{this.state.personal.phone}</li>
                  <li>{this.state.personal.email}</li>
                  <li>{this.state.personal.location}</li>

                </div>
              </div>
              <div className="outputmain">
                <h2>Description</h2>
                <hr />
                <p>{this.state.personal.description}</p>
                <h2>Experience</h2>
                <hr />
                {this.state.experience.map(element => 
                <div className="card">
                  <p>{element.from} - {element.to}</p>
                  <p>{element.position}</p>
                  <p>{element.company}</p>
                  <p>{element.city}</p>
                </div>)}
                <h2>Education</h2>
                <hr />
                {this.state.education.map(element => 
                <div className="card">
                  <p>{element.from} - {element.to}</p>
                  <p>{element.university}, {element.city}</p>
                  <p>Degree: {element.degree}</p>
                  <p>Subject: {element.subject}</p>
                </div>)}
                <h2>Skills</h2>
                <hr />
                {this.state.skills.map(element => <div class="skill" key={element.id}> {element.name} </div>)}
              </div>
          </div>
      </main>






      
    </>
    )
  }
}

export default App;
