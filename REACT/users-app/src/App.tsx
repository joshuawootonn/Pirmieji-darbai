import axios from "axios";
import { useEffect, useState } from "react";
import { RenderUserList } from "./components/RenderUserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>USERS</h1>
      </header>

      <div className="container">
        <RenderUserList users={users} />
      </div>
    </div>
  );
}

export default App;
