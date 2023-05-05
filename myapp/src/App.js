import './login'
import { users } from './users'
import Login from './login';
import { useState } from 'react';
import Welcome from './register';

function App() {
  let [islogged , setIslogged] = useState(false);
  return (
    <>
    {islogged ? <Welcome users = {users}/> : <Login setIslogged = {setIslogged} users = {users} />}
    </>
  );
}

export default App;
