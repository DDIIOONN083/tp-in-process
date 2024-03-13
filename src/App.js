/**
 * @Author: Your name
 * @Date:   2024-03-12 21:39:18
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-03-13 10:08:12
 */
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
     {  <ProductList /> }
    </div>
  );
}

export default App;
