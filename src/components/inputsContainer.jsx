import Input from './customInput'

const defaultObj = {
    school: 'Enter school',
    field: 'Enter Field',
    startDate: 'Enter Start Date',
    endDate: 'Enter End Date',
    location: 'Enter Location'
}

export default function InputsContainer({containerClass, categorySetter, categoryObj, categoryTitle, inputsArray, categorySelectedId, setSelectedId}){
    // Code for rendering the Education and Experience sections' inputs
    if (Array.isArray(categoryObj)){
        const isolatedObj = categoryObj[categorySelectedId]
        return(
        <fieldset className={containerClass}>
            <legend>{categoryTitle}</legend>
            <select onChange={(e)=>setSelectedId(e.target.value)}>
                {categoryObj.map((obj,index)=>{
                    let selectedOption = false;
                    if(categorySelectedId === index){selectedOption = true}
                    return(
                        <option 
                        key={index} 
                        value={index}
                        selected={selectedOption}
                        >{`${obj.school || obj.jobTitle} - ${obj.field || obj.company}`}
                        </option>)
                })}
            </select>
            {inputsArray.map((item)=>
                <Input 
                key={item.id} 
                id={`${containerClass}-${item.id}`} 
                label={item.label} 
                inputType={item.inputType} 
                isRequired={true} 
                value={isolatedObj[item.id]} 
                onChange={(e)=>{
                    categoryObj[categorySelectedId][item.id] = e.target.value
                    categorySetter([...categoryObj])
                    }}>
                </Input>
            )}

            <button type='button' className="add-item" 
            onClick={()=>{
                console.log(isolatedObj);
                const emptyObj = {}
                for(let key in isolatedObj){
                    emptyObj[key]=''
                }
                categorySetter([...categoryObj, emptyObj] )
                setSelectedId(categoryObj.length)
            }}
            >Add</button>
        </fieldset>
        )
    }
    
    // Code for Rendering the Personal Info section's Inputs
    return(
        <fieldset className={containerClass}>
            <legend>{categoryTitle}</legend>
            {inputsArray.map((item)=>
            <Input key={item.id} id={item.id} label={item.label} inputType={item.inputType} isRequired={true} value={categoryObj[item.id]} onChange={(e)=> categorySetter({...categoryObj, [item.id]: e.target.value})}></Input>
            
            )}
        </fieldset>
    )
} 