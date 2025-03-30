import Home from "./pages/home/Home";
import {Person} from "@mui/icons-material"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

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
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/profile/:username" element={<Profile />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
