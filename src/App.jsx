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
      phone:'444-666-8888'
    },
    education:[
      {
        school:'Middlesex County College',
        field:'General Biology',
        startDate:'Aug 21 2020',
        endDate:'Jul 21 2022',
        location:'Middlesex County'
      }
    ],
    experience:[
      {
        jobTitle:'Waiter',
        company:'Buffalo Wild WIngs',
        startDate:'Jul 14 2017',
        endDate:'Mar 02 2018',
        location:''
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
      inputType:'text'
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
      inputType:'text'
    },
    {
      id:'endDate',
      label:'End Date',
      inputType:'text'
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
      inputType:'text'
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
  console.log(selectedEducationId);

  const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`
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
        <div className="resume-personal-info">
          <p className='full-name'>{fullName}</p>
          <p className='email'>{personalInfo.email}</p>
          <p className='phone'>{personalInfo.phone}</p>
        </div>
        <div className="resume-education-info">
          {education.length > 0 && 
          <h2>Education</h2>
          }
          {education.map((item, index) => 
          <div className="education-item dynamic-container" key={index}>
            <p>{item.school}</p>
            <p>{item.field}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <p>{item.location}</p>
          </div>
          )}
        </div>
        <div className="resume-experience-info">
        {experience.length > 0 && 
          <h2>Experience</h2>
          }
          {experience.map((item, index) => 
          <div className="experience-item dynamic-container" key={index}>
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
