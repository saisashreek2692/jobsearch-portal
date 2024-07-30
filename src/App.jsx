import Footer from "./Components/Footer/Footer"
import Jobs from "./Components/Job/Jobs"
import Navbar from "./Components/Navbar/Navbar"
import Search from "./Components/Search/Search"
import Value from "./Components/Value/Value"

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App