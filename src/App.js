// import Icon from './components/icon.js';
import DashBoard from "./components/DashBoard";
import Login from "./components/login";
import FavouriteMovie from './components/favourite';
import About1 from "./components/about.js";
// import Admin from './components/admin.js';
import Review from "./components/review";
// import BasicTable from "./components/userDetails";
import WatchLater from "./components/WatchLater";
import Admin from "./components/admin.js";
import Spider from "./components/spider.js";
import Demon from "./components/Demon.js";
import Aot from "./components/Aot.js";
import {Route,Routes} from "react-router-dom";
// import SampleCont from "./components/SampleCont";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashBoard />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/watchlater" element={<WatchLater/>}/>
      <Route path="/favourite" element={<FavouriteMovie/>}/>
      <Route path="/about" element={<About1/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/spider" element={<Spider/>}/>
      <Route path="/demon" element={<Demon/>}/>
      <Route path="/aot" element={<Aot/>}/>
    </Routes>
    {/* <SampleCont/> */}
   </>
  );
}

export default App;

