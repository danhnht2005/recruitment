import "./layoutDefault.scss"
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

function LayoutDefault() {

  return (
    <>
      <div>
        <div className="layout-default">
          <Header />
          <Main />
          <Footer />
        </div>

      </div>
    </>
  )
}

export default LayoutDefault;