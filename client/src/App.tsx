import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  console.log(`Test 1: ${import.meta.env.VITE_DOMAIN_CLIENT}`)
  console.log(`Test 2: ${import.meta.env.VITE_NODE_ENV}`)
  console.log(`Test 3: ${import.meta.env.VITE_DOMAIN_API_SERVER}`)
  return (
    <div className="AppContainer">
      <Outlet />
    </div>
  );
}

export default App;
