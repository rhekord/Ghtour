import { Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Sites from "./pages/Sites";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sites" element={<Sites/>} />
      <Route path="/booking" element={<Booking/>} />
    </Routes>
    </>
  );
}

export default App;
 