import React,{useState} from 'react';
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleClearClick=()=>{
      console.log("Upper case was clicked");
      let newText="";
      setText(newText);
      props.showAlert("Text Cleared","success");
  }
    const handleLoClick=()=>{
      console.log("Lower case was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }
  const handleCopy=()=>{
    console.log("Copy was clicked")
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }
    //IMPORTANT TO TYPE TEXT
    const handleOnChange=(e)=>{
        console.log("Upper case was clicked");
        setText(e.target.value);
    }
    //Declare a new state variable ,which we will call count
    const [text,setText]=useState("");
    //change the text
    //setText("new text");
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase
  </button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase
  </button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text
  </button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text
  </button>
  </div>
  
  <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>
{text.split(" ").filter((t)=>t!=="").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").filter((t)=>t!=="").length} minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Something in Textbox above to preview it here"}</p>
  </div>
  </>
  )
}
