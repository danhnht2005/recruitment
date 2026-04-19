import CompanyList from "../../components/CompanyList";
import SearchForm from "../../components/SearchForm";
import SkillList from "../../components/SkillList";

function Home() {
  return (
    <>
      <div>
        <SearchForm  />
        <SkillList />
        <CompanyList />
      </div>
    </>
  )
}

export default Home;