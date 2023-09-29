import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
      {user ? (
        <button
          onClick={handleSignOut}
          style={{ marginTop: "10px", cursor: "pointer" }}
        >
          Sign Out
        </button>
      ) : (
        <>
          <button
            onClick={handleGoogleSignIn}
            style={{ marginTop: "10px", cursor: "pointer" }}
          >
            Sign with Google
          </button>
          <button
            onClick={handleGitHubSignIn}
            style={{ marginTop: "10px", cursor: "pointer" }}
          >
            Sign with GitHub
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
