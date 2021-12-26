import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProcessFile from "./components/ProcessFile";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/layout/Navbar";

import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";

const App = () => {
  const { token } = useSelector((state) => state.auth);

  console.log(`app-token`, token);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={token ? <Home /> : <Navigate to='/signin' />}
          />

          <Route
            path='upload/'
            element={token ? <FileUpload /> : <Navigate to='/signin' />}
          />

          <Route
            path='/signin'
            element={!token ? <Signin /> : <Navigate to='/' />}
          />
          <Route path='process-file/:id' element={<ProcessFile />} />

          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
