import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
const App = () => {
  const { token } = useSelector((state) => state.auth);

  console.log(`app-token`, token);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={token ? <Home /> : <Navigate to='/signin' />}
        />

        <Route
          path='/signin'
          element={!token ? <Signin /> : <Navigate to='/' />}
        />

        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
