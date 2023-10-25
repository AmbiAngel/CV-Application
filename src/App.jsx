import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Input from './components/customInput'
import InputHalf from './components/input_half.jsx'
import PreviewHalf from './components/preview_half.jsx'
// import inputsContainer from './components/inputsContainer'
import InputsContainer from './components/inputsContainer'



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
      },
      {
        school:'2',
        field:'civil law2',
        startDate:'1223',
        endDate:'4221',
        location:'a2sdf'
      },
    ],
    experience:[
      {
        jobTitle:'1',
        company:'securitah',
        startDate:'123',
        endDate:'421',
        location:'asdf'
      }
    ]
  }

  const personalInfoInputs = [
    {
      id:'firstName',
      label:'First Name',
      inputType:'text'
    },
    {
      id:'lastName',
      label:'Last Name',
      inputType:'text'
    },
    {
      id:'email',
      label:'Email',
      inputType:'email'
    },
    {
      id:'phone',
      label:'Phone',
      inputType:'number'
    },
  ]

  const educationInputs = [
    {
      id:'school',
      label:'School',
      inputType:'text'
    },
    {
      id:'field',
      label:'Field of Study',
      inputType:'text'
    },
    {
      id:'startDate',
      label:'Start Date',
      inputType:'date'
    },
    {
      id:'endDate',
      label:'End Date',
      inputType:'date'
    },
    {
      id:'location',
      label:'Location',
      inputType:'text'
    }
  ]

  const experienceInputs = [
    {
      id:'jobTitle',
      label:'Job Title',
      inputType:'text'
    },
    {
      id:'company',
      label:'Company',
      inputType:'text'
    },
    {
      id:'startDate',
      label:'Start Date',
      inputType:'text'
    },
    {
      id:'endDate',
      label:'End Date',
      inputType:'tel'
    },
  ]
  // const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const[personalInfo, setPersonalInfo] = useState({...mockData2.personalInfo})

  const[education, setEducation] = useState([...mockData2.education])
  const[selectedEducationId, setSelectedEducationId] = useState(0)

  const[experience, setExperience] = useState([...mockData2.experience])
  const[selectedExperienceId, setSelectedExperienceId] = useState(0)

  console.log(education);
  // Have a state Obj that updates appropriate prop on input change and renders on Resume
  return (
    <div className="app">
      <div className="inputHalf">
        <h1>input</h1>
        <form action="">
            <InputsContainer 
              categorySetter={setPersonalInfo} 
              categoryObj={{...personalInfo}} 
              categoryTitle='Personal info'
              containerClass='personalInfo'
              inputsArray={personalInfoInputs}
              >
            </InputsContainer>

            <InputsContainer 
              categorySetter={setEducation} 
              categoryObj={[...education]}
              categorySelectedId={selectedEducationId} 
              categoryTitle='Education'
              containerClass='educationInfo'
              inputsArray={educationInputs}
              setSelectedId={setSelectedEducationId}
              >
            </InputsContainer>

            <InputsContainer 
              categorySetter={setExperience} 
              categoryObj={[...experience]}
              categorySelectedId={selectedExperienceId} 
              categoryTitle='Experience'
              containerClass='experience-input-container'
              inputsArray={experienceInputs}
              setSelectedId={setSelectedExperienceId}

              >
            </InputsContainer>
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
          {education.map((item, index) => 
          <div className="education-item" key={index}>
            <p>{item.school}</p>
            <p>{item.field}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <p>{item.location}</p>
          </div>
          )}
        </div>
        <div className="resume-experience-info">
          {experience.map((item, index) => 
          <div className="experience-item" key={index}>
            <p>{item.jobTitle}</p>
            <p>{item.company}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <p>{item.location}</p>
          </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default App
