import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Input from './components/customInput'
import InputHalf from './components/input_half.jsx'
import PreviewHalf from './components/preview_half.jsx'



function App() {
  let mockData = {
    section:'Personal Info',
    firstName:'John',
    lastName:'Doe',
    email:'johndoe92@gmail.com',
    phone:'4446668888'
  }
  let mockData2 = {
    personalInfo:{
      firstName:'John',
      lastName:'Doe',
      email:'johndoe92@gmail.com',
      phone:'4446668888'
    },
    education:[
      {
        school:'1',
        field:'civil law',
        startDate:'123',
        endDate:'421',
        location:'asdf'
      }
    ],
    experience:[
      {
        jobTitle:'1',
        company:'civil law',
        startDate:'123',
        endDate:'421',
        location:'asdf'
      }
    ]
  }
  // const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  console.log('test');
  const[personalInfo, setPersonalInfo] = useState({...mockData2.personalInfo})
  const[education, setEducation] = useState([...mockData2.education])
  const[experience, setExperience] = useState([...mockData2.experience])
  // Have a state Obj that updates appropriate prop on input change and renders on Resume
  return (
    <div className="app">
      <div className="inputHalf">
        <h1>input</h1>
        <form action="">

            <fieldset className="personal-info-container">
                <legend>Personal info</legend>
                <Input id='first-name' label='First Name' inputType='text' isRequired={true} value={personalInfo.firstName} onChange={(e)=> setPersonalInfo({...personalInfo, firstName: e.target.value})}></Input>
                <Input id='last-name' label='Last Name' inputType='text' isRequired={true}  value={personalInfo.lastName} onChange={(e)=> setPersonalInfo({...personalInfo, lastName: e.target.value})}></Input>
                <Input id='email' label='Email' inputType='text'  value={personalInfo.email} onChange={(e)=> setPersonalInfo({...personalInfo, email: e.target.value})}></Input>
                <Input id='phone' label='Phone' inputType='number'  value={personalInfo.phone} onChange={(e)=> setPersonalInfo({...personalInfo, phone: e.target.value})}></Input>
            </fieldset>

            <fieldset className="education-info-container">
                <legend>Education</legend>
                <Input id='school' label='School' inputType='text'></Input>
                <Input id='field' label='Field' inputType='text'></Input>
                <Input id='education-start-date' label='Start Date' inputType='text'></Input>
                <Input id='education-end-date' label='End Date' inputType='text'></Input>
                <Input id='education-location' label='Location' inputType='text'></Input>
            </fieldset>

            <fieldset className="experience-info-container">
                <legend>Experience</legend>
                <Input id='job-title' label='Job Title' inputType='text'></Input>
                <Input id='company' label='Company' inputType='text'></Input>
                <Input id='experience-start-date' label='Start Date' inputType='text'></Input>
                <Input id='experience-end-date' label='End Date' inputType='text'></Input>
                <Input id='experience-location' label='Location' inputType='text'></Input>
            </fieldset>
        </form>
    </div>
      <div className="previewHalf">
        <h1>preview</h1>
        <div className="resume-personal-info">
          <p>{personalInfo.firstName}</p>
          <p>{personalInfo.lastName}</p>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
        </div>
        <div className="resume-education-info">
          {education.map((item) => null)}
        </div>
      </div>
    </div>

  )
}

export default App
