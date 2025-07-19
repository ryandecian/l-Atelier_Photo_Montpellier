import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  console.log(`Test: ${import.meta.env.VITE_DOMAIN_CLIENT}`)
  return (
    <div className="AppContainer">
      <Outlet />
    </div>
  );
}

export default App;
