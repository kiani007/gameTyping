import { useEffect } from 'react';
import { useState, useRef } from 'react'
import './App.css'


function App() {
  // const minimumCount = 5;
  const [text, setText]= useState("")
  const [timeCountIntervel, setTimeCount] = useState(5);
  const [wordCount, setWordCount] = useState(0);
  const [timeRunning, setTimeRunning] = useState(false);
  const inputTextRef = useRef(null)
 
  function textOnChange(event) {
    const {value} = event.target
    setText(value)
    
  }
  function calculateWordCount(text) {
    const trimedText = text.trim().split(" ")
    const filterText = trimedText.filter(filText=> filText !=="")
    const textLength = filterText.length;
   return(textLength)
 
    
  }
  function onButtonClick() {
    setTimeRunning(true)
    timeCountIntervel === 0
    setTimeCount(15)
    setText("")
    setWordCount(0)
    inputTextRef.current.disabled = false;
    inputTextRef.current.focus()
    // console.log(inputTextRef.current)
 }
   
  useEffect(() => {
    if (timeRunning && timeCountIntervel > 0) {
      setTimeout(() => {
        setTimeCount(timeCountIntervel - 1)
        console.log(timeCountIntervel)
      },1000)
    } else if(timeCountIntervel === 0) {
      setTimeRunning(false)
      setWordCount(calculateWordCount(text))
    }
    
  }, [timeRunning,timeCountIntervel])
  console.log(timeRunning)
  return (
    <>
      <div>

        <h1>How fast do you type?</h1>
        <textarea ref={inputTextRef} onChange={textOnChange} disabled={!timeRunning} value={text}/>
        <h4> Time Remaining: {timeCountIntervel}</h4>
        <button onClick={onButtonClick} disabled={timeRunning}>Start</button>   
        <h1>Word Count: {!timeRunning  && wordCount}</h1> 
        
        
      </div>
    </> 
  )
}

export default App
