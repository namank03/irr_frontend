import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSigninUserMutation } from "../../store/api/authApi";
import { setUsername } from "../../store/state/authSlice";

const Signin = () => {
  const [signinUser, result] = useSigninUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onUserSignIn = (data) => {
    dispatch(setUsername(data.username));
    signinUser(data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit((data) => onUserSignIn(data))}>
      <label htmlFor='username'>Username</label>
      <input
        {...register("username", {
          required: "This field is required",
        })}
        id='username'
      />
      {errors.username && <p>{errors.username.message}</p>}

      <label htmlFor='password'>password</label>
      <input
        {...register("password", {
          required: "This field is required",
        })}
        id='password'
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Signin;
