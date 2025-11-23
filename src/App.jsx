import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import ViewPaste from "./Components/ViewPaste";
import Navbar from "./Components/Navbar";
import Paste from "./Components/Paste";

function App() {
  const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewPaste/>
    </div>,
    }
  ]
)


  return (
      <RouterProvider router = {router} />
  );
}

export default App;
