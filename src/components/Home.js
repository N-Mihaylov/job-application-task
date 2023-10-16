import { useUsernameContext } from "../utils/userContext";
const Home = ({ logout }) => {
  const { activeUser, setActiveUser } = useUsernameContext();
  const onLogout = () => {
    if (activeUser.rememberUser === false) {
      setActiveUser({ ...activeUser, username: "" });
    }
    logout();
  };
  return (
    <div className='home-container'>
      <span style={{ paddingRight: "15px" }}>hello {activeUser.username}</span>
      <button className='button' style={{ margin: "0" }} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
