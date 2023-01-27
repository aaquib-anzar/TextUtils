import React , {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);
    }

    const[text,setText] = useState("");//state
    return (
    <>
    <div className = "container" style = {{color:props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
       <textarea className="form-control" value = {text} onChange = {handleOnChange} id="MyBox" rows="8" style = {{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}}></textarea>
    </div>
       <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick = {handleSpeak}>Speak</button>
    </div>
    <div className = "container my-3" style = {{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the Text to preview"}</p>
    </div>
    </>

    )
}
