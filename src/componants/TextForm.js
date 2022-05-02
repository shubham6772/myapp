import React, { useState } from 'react'

export default function TextForm(props) {
    const handleonchange = (event) => {
        console.log("change")
        settext(event.target.value)

    }

    const handleupclick = () => {
        console.log("uppercase was clicked")
        var newtext = text.toUpperCase();
        settext(newtext);
    }

    const handlelowclick = () => {
        console.log("lowerclick was clicked")
        var newtext = text.toLowerCase();
        settext(newtext);
    }

    const clear = () => {
        console.log("clear was clicked")
        settext('');
    }

    const [text, settext] = useState("Enter Your Text Here")

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} value={text} id="form" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleupclick} >Convert to UPPERCASE</button>
                <span><button className="btn btn-primary mx-4" onClick={handlelowclick} >Convert to lowercase</button></span>
                <button className="btn btn-primary" onClick={clear}>Clear Text</button>
            </div>

            <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(' ').length} words {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes taken to read your words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview it here'}</p>
            </div>
        </>
    )
}
