import { Button } from "@chakra-ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FileList from "../../components/FileList";
import FileUpload from "../../components/FileUpload";
import { defaultState } from "../../store/state/authSlice";

const Home = () => {
  const { username } = useSelector((state) => state.auth);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = () => {
    localStorage.removeItem("token");
    dispatch(defaultState());
    navigate("/signin", { replace: true });
  };

  return (
    <div>
      Home Works
      {username && <p>{username}</p>}
      <FileUpload />
      <FileList />
      <Button onClick={signout}>Signout</Button>
    </div>
  );
};

export default Home;
