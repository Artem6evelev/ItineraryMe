import "./App.css";
import Loading from "./components/loading/Loading";
import NavBar from "./components/navbar/NavBar";
import Notification from "./components/notification/Notification";
import Login from "./components/user/Login";

function App() {
  return (
    <>
      <Loading />
      <Notification />
      <Login />
      <NavBar />
    </>
  );
}

export default App;
