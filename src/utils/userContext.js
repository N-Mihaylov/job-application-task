import { createContext, useContext, useState } from "react";
import { getCookie, USER_COOKIE } from "./cookies";
// could be a separate folder called "context"

const UserContext = createContext(null);
const username = getCookie(USER_COOKIE) || "";

const UserContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({
    username: username,
    rememberUser: !!username,
  });

  return (
    <UserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUsernameContext = () => {
  const context = useContext(UserContext);
  return context;
};
