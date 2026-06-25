
const App = () => {

const submitHandler = (e) => {
  e.preventDefault();
  console.log('Form Submitted');
  
}

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        Name: <input type='text' placeholder='Enter name'/> <br /> <br />
        Age: <input type='number' placeholder='Enter age' /> <br /> <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
