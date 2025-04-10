import Home from "./pages/home/Home";
import {Person} from "@mui/icons-material"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Navigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// import React  from 'react';
// function App() {
//   return (
//     <Router>
//     <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/register">
//           <Register />
//         </Route>
//         <Route path="/login">
//           <Login />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
function App() {
  const {user}=useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />}>
        </Route>
        {/* <Route path="/register" element={user ? <Redirect to="/" />: <Register />}> */}
        <Route path="/register" element={user ? <Navigate to="/" />: <Register />}>
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" />: <Login />}>
        </Route>
        <Route path="/profile/:username" element={<Profile />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
