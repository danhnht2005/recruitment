import { Outlet } from "react-router-dom";
import "./layoutDefault.scss"

function LayoutDefault() {

  return (
    <>
      <div>
        <div className="layout-default">
          <header className="layout-default__header">
            <div className="container d-flex  justify-content-between align-items-center">
              <div className="layout-default__logo">
              </div>
              <div className="layout-default__menu">
                <ul>
                  
                </ul>
              </div>
              <div className="layout-default__account">
                
              </div>
            </div>
          </header>

          <main className="layout-default__main">
            <div className="container">
              <Outlet />
            </div>
          </main>

          <footer className="layout-default__footer fixed-bottom">
            Copyright @ 2026 by danhnht2005
          </footer>
        </div>

      </div>
    </>
  )
}

export default LayoutDefault;