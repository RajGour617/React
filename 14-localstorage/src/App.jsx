
const App = () => {
  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('user', 'Raj');
  // sessionStorage.setItem('name', 'riya');

  // const user = localStorage.getItem('user');
  // console.log(user);

  // localStorage.removeItem('user');

  const user = {
    username: 'Raj',
    age: 22,
    city: 'Indore'
  }

  localStorage.setItem('user', JSON.stringify(user));

  const user1 = JSON.parse(localStorage.getItem('user'));
  console.log(user1);

  return (
    <div>
      App
    </div>
  )
}

export default App
