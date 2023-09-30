import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset success and error state
    setRegisterSuccess("");
    setRegisterError("");

    // created validation for different cases
    if (password.length < 8) {
      setRegisterError("Password should be at least eight characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Password should have at least one uppercase character!"
      );
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setRegisterSuccess("User created successfully!");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch();

        // send verification email
        sendEmailVerification(result.user).then(() => {
          alert("Please verify your email");
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[13px] top-[52px]"
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </span>
              </div>
              <div className="mt-3">
                <input type="checkbox" name="terms" id="terms" required />
                <label htmlFor="terms" className="ml-1">
                  I accept the{" "}
                  <Link to="#" className="underline">
                    terms and conditions
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div>
              {registerSuccess && (
                <p className="text-green-500 p-3">{registerSuccess}</p>
              )}
              {registerError && (
                <p className="text-red-500 p-3">{registerError}</p>
              )}
              <p>
                Already have an account? Please{" "}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
