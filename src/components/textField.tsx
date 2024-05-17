//import { useState } from "react";

function TextField(prop:any) {
   // const [Text, setText] = useState("");
      //console.log(prop.Text);
  

    return (
      <div className="bg-[#BCB496] w-[520px] flex font-lumanosimo  ">
       <br/>
       <p  className="whitespace-pre">
       {prop.Text}
       </p>
       
      </div>
    )
  }
  
  export default TextField
  