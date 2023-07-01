import "./App.css";
import Counter from "./features/counter/Counter";
import {Customers} from "./features/customers/Customers";


function App() {
  return (
    <div className='App'>
      <Counter />
      <Customers/>
    </div>
  );
}

export default App;
