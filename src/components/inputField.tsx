import { useState } from "react"
import jsPDF from "jspdf";
import './GochiHand-Regular-normal'
function InputField(prop:any) {
    const [Text, setText] = useState(" ");
    const [charecterCount, setCharecterCount] = useState(0);

    function Change(event:React.ChangeEvent<HTMLTextAreaElement>){
     
   
            
         setCharecterCount(event.target.value.length);
         if(charecterCount<=2520){
   
       
        setText(event.target.value);
      }
  
    }


   
  function saveToPDF(){
    

    
      let pdf=new jsPDF();
           
      pdf.setFont('GochiHand-Regular');

      pdf.text(Text,10,10);
       console.log(pdf.getFontList())
      pdf.save();

  }


    prop.sendData(Text);
 
    return (
      <div className=" w-[32rem]">
        <label className=" text-yellow-50">Max character 2520: current count: {charecterCount}</label>
       <textarea   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={Change}></textarea>
        <button className="bg-[#D9D9D9] rounded"  onClick={saveToPDF}>Save</button>
      </div>
    )
  }
  
  export default InputField
  