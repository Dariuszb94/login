import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "aaaa", age: 10, email: "asad" }));
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
