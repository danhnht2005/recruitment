import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="layout-default__header">
        <div className="layout-default__logo">
          <NavLink to="/">
            IT Jobs
          </NavLink>
        </div>
        <div className="layout-default__account">
          <NavLink to="/">
            Đăng nhập
          </NavLink>
          <NavLink to="/">
            Đăng ký
          </NavLink>
        </div>
      </header>
    </>
  )
}

export default Header;