import { useState } from "react";
import OAuth from "../components/OAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { signFailure, signStart, signSuccess } from "../redux/user/userSlice";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { isLoading, error: errMsg } = useSelector(state => state.user);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { username, email, password } = formData;
    if (!username || !email || !password) {
      return dispatch(signFailure("Please fill out all fields."));
    }

    try {
      dispatch(signStart());

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      const { success, message } = data;

      if (res.ok) {
        dispatch(signSuccess(data));
        navigate("/");
      }

      if (!success) {
        return dispatch(signFailure(message));
      }
    } catch (err) {
      dispatch(signFailure(err.message));
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex p-3 pt-28 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Student&#x2019;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a blog project. You can sign up with your email and password or with Google.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Student Tulaganov"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Studenttulaganov@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errMsg && (
            <Alert className="mt-5" color={"failure"}>
              {errMsg}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
