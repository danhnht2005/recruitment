/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { deleteAllCookies } from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkedLogin } from "../../actions/login";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookies();
  useEffect(() => {
    dispatch(checkedLogin(false));
    navigate("/login");
  }, []);

  return <></>;
}

export default Logout;
