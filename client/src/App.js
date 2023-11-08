import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Notification from "./components/notification/Notification";
import Login from "./components/user/Login";

function App() {
  return (
    <>
      <Notification />
      <Login />
      <NavBar />
    </>
  );
}

export default App;
