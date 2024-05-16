import { useState } from "react"
function InputField(prop:any) {
    const [Text, setText] = useState("");
    function Change(event:React.ChangeEvent<HTMLTextAreaElement>){
        
      setText(event.target.value);
    }

    prop.sendData(Text);
 
    return (
      <div >
       <textarea className="bg-[#D9D9D9] rounded" onChange={Change}></textarea>
        <button className="bg-[#D9D9D9] rounded" >button</button>
      </div>
    )
  }
  
  export default InputField
  