import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "nodi, sagor, khal, bil" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

/* 
    1.  create context and export it
    2.  set provider with value
    3.  use AuthProvider in the main.js file
    4. access children in AuthProvider component as prop and use into AuthContext.Provider
*/
