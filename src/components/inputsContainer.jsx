import Input from './customInput'


export default function InputsContainer({containerClass, categorySetter, categoryObj, categoryTitle, inputsArray, categorySelectedId, setSelectedId}){
    if (Array.isArray(categoryObj)){
        const isolatedObj = categoryObj[categorySelectedId]
        return(
        <fieldset className={containerClass}>
            <legend>{categoryTitle}</legend>
            <select onChange={(e)=>setSelectedId(e.target.value)}>
                {categoryObj.map((obj,index)=>{
                    return <option key={index} value={index}>{`${index+1}`}</option>
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
        </fieldset>
        )
    }
    
    return(
        <fieldset className={containerClass}>
            <legend>{categoryTitle}</legend>
            {inputsArray.map((item)=>
            <Input key={item.id} id={item.id} label={item.label} inputType={item.inputType} isRequired={true} value={categoryObj[item.id]} onChange={(e)=> categorySetter({...categoryObj, [item.id]: e.target.value})}></Input>
            
            )}
        </fieldset>
    )
} 