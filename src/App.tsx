import { useState } from 'react'
import React, {Component, PropsWithChildren} from "react";
import { jsPDF } from "jspdf";
import InputField from "./components/inputField"
import TextField from  "./components/textField"








function App() {
  const [Text, setText] = useState("")
  const doc = new jsPDF();

function  getData(val:string){
  setText(val);

}




  return (
    
    <div>
      <InputField sendData={getData}>
      </InputField>
      <TextField Text={Text}>
      </TextField>
    </div>
  )
}

export default App
