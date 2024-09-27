
import Footer from "./components/Footer";
import Header  from "./components/Header";
import {Route,Routes} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Trailer from "./pages/Trailer";
import Music from "./pages/Music";
import ReviewMovie from "./pages/ReviewMovie";
import requests from "../request";
import About from "./pages/About";
import ShowMore from "./pages/ShowMore";

function App() {
  return (
    <>

      <Header />
      <Routes >
        <Route path="/" element ={<LandingPage fetchUrl = {requests.fetchNetflixOriginals} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/music" element={<Music />}/>
        <Route path="/review" element={<ReviewMovie />} />
        <Route path="/showmore" element={<ShowMore />} />
      </Routes>

      
      <Footer />
    </>
  );
}

export default App;
