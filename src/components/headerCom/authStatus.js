
import { UseAppContext } from 'contexts/contexts';
import { setAuthToken } from "utils/utils";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function AuthStatus() {
  const { apiValue:{ user, setUser } } = UseAppContext();
  const location = useLocation();
  let navigate = useNavigate();

  if (!user) {
    return  ;
  }
  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  return (
      <a
        className='logout'
        onClick={handleLogout}
      >
        Sign out
      </a>
  );
}