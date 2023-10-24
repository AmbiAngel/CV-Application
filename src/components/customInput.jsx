export default function Input({id, label, inputType, isRequired = false, value, onChange = undefined}){
    return(
        <>
            <label htmlFor={id}>{label}</label>
            {isRequired ? 
            <input type={inputType} id={id} onChange={onChange} value={value} required/> :
            <input type={inputType} id={id} onChange={onChange} value={value} />
            }
            
        </>
    )
}