import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function Header() {
  const isLogin = useSelector(state => state.loginReducer)

  return (
    <>
      <header className="layout-default__header">
        <div className="container">
          <div className="layout-default__wrap">
            <div className="layout-default__logo">
              <NavLink to="/">
                IT Jobs
              </NavLink>
            </div>
            <div className="layout-default__account">
              {isLogin ? (
                <>
                  <NavLink to="/admin">
                    <Button icon={<UserOutlined />}>Quản lý</Button>
                  </NavLink>
                  <NavLink to="/logout" className="ml-10">
                    <Button icon={<LogoutOutlined />}>Đăng xuất</Button>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login">
                    <Button>Đăng nhập</Button>
                  </NavLink>
                  <NavLink to="/register">
                    <Button type="primary" className="ml-10">
                      Đăng ký
                    </Button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;