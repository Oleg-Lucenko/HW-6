
import './App.css';
import { createContext, useEffect, useState } from 'react';
import UsersContainer from './components/UsersContainer';

export const Context = createContext(null);

function App() {
  

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const getUsers = async () => {
      const request = await fetch('https://dummyjson.com/users');
      const response = await request.json();
      setUsers(response.users);
    }

    getUsers();
  }
    , [])



  return (
    <Context.Provider value={users}>
      <div className="App">
        <UsersContainer />
      </div>
    </Context.Provider>
  );
}

export default App;
