import React, {useState} from 'react'


export default function TextForm(props) {
const handleUpClick = ()=>{
  console.log("Uppercase was Clicked " + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted in UpperCase: ", "Success: ");

}
const handleLoClick = ()=>{
  console.log("Lowercase was Clicked " + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted in LowerCase: ", "Success: ");


}
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed Extra Spaces: ", "Success: ");

}
const handleClearClick = ()=>{
  console.log("Clear button Clicked " + text);
  let newText = '';
  setText(newText)
  props.showAlert("TextForm is clear: ", "Success: ");

}

const handleOnChange = (event)=>{
  console.log("On Change");
  setText(event.target.value)
}

  const [text, setText] = useState('');
  //setText("Hello Ashwin");
  return (
    <>
  <div className='container'style={{color: props.mode ==='dark'?'white':'black'}}>

  <h1>{props.heading} </h1>
  {/* <h1>Enter Text To Analyze</h1> */}
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} 
   id="myBox" rows="7" ></textarea>

</div>
<button className='btn btn-info mx-2'onClick={handleUpClick} >Convert To UpperCase</button>
<button className='btn btn-success mx-2'onClick={handleLoClick} >Convert To LowerCase</button>
<button className='btn btn-secondary mx-2'onClick={handleExtraSpaces} > Remove ExtraSpaces </button>
<button className='btn btn-warning mx-2'onClick={handleClearClick} > Clear </button>

</div>
<div className='container my-3'style={{color: props.mode ==='dark'?'white':'black'}}>
  <h1>Your Text summary </h1>
  <p>{text.split (" ").length} Words and {text.length} Characters </p>
  <p>{0.008 * text.split (" ").length } minutes to read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something in the textbox to preview it here "}</p>
</div>
</>

  )

}

