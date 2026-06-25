import { useState } from "react";

const App = () => {

const [title, setTitle] = useState('');

const submitHandler = (e) => {
  e.preventDefault();
  console.log('Form Submitted by', title);
  
  setTitle('');
}

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        Name: <input type='text' placeholder='Enter name' value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} /> <br /> <br />
        Age: <input type='number' placeholder='Enter age' /> <br /> <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
