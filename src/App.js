import { useEffect, useState } from "react";
import { ExpenseProvider } from "./app/ExpenseContext";
import ExpenseForm from "./app/expenseform";
import ExpenseList from "./app/expenselist";
import Header from "./app/header";

function App() {
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
 


        
        <ExpenseProvider>
            <Header/>
            {/* <ServerInfo/> */}
            <ExpenseForm/>
            <ExpenseList/>
        </ExpenseProvider>


    </div>
  );
}

export default App;