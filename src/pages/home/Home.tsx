// global components 
import Navbar from "@components/navbar/Navbar"
import Dropdown from "@components/dropdown/Dropdown"
// home components
import FinancialReporting from "./components/financial-reporting/FinancialReporting"
import GetInTouch from "./components/get-in-touch/GetInTouch"
import ProgressAndInnovate from "./components/progress-and-innovate/ProgressAndInnovate"

const Home = () => {
  return (
    <div className="relative">
      <Navbar Component={Dropdown}/>
      <ProgressAndInnovate/>
      <FinancialReporting />
      <GetInTouch/>
    </div>
  )
}

export default Home
