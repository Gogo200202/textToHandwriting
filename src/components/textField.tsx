//import { useState } from "react";

function TextField(prop:any) {
   // const [Text, setText] = useState("");
      console.log(prop.Text);
      let newText=prop.Text;
      if(prop.Text==""){
    
        newText=" "
      }   

    return (
      <div className="flex justify-center">
      <div className="bg-[#BCB496] w-[520px] rounded-lg font-GochiHandRegular">
      <div>
      <p className="whitespace-pre">
       {newText}
       </p>
      </div>
       
      </div>
      </div>
    )
  }
  
  export default TextField
  