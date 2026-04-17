import { NavLink } from "react-router-dom";
import { Button } from "antd";

function Header() {
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
              <NavLink to="/">
                <Button>
                  Đăng nhập
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button type="primary">
                  Đăng ký
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;