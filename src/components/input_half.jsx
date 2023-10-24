import Input from "./customInput"
import { useState } from 'react'


export default function InputHalf(){

    const [value, setValue] = useState('')

    return(
        <div className="inputHalf">
            <h1>input</h1>
            <form action="">

                <fieldset className="personal-info-container">
                    <legend>Personal info</legend>
                    <Input id='first-name' label='First Name' inputType='text' isRequired={true}  onChange={(e)=>(console.log(e.target.dataset))}></Input>
                    <Input id='last-name' label='Last Name' inputType='text' isRequired={true} ></Input>
                    <Input id='email' label='Email' inputType='text'></Input>
                    <Input id='phone' label='Phone' inputType='text'></Input>
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
    )
}