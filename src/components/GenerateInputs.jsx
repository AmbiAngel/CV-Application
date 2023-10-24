import Input from './customInput'

export default function GenerateInputs(){
    <Input id='first-name' label='First Name' inputType='text' isRequired={true} value={categoryObj.firstName} onChange={(e)=> categorySetter({...categoryObj, firstName: e.target.value})}></Input>

}