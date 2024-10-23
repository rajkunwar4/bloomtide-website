import { Route, Routes } from "react-router-dom";

import Error from "./pages/Error";
import Navbar from "./components/common/Navbar";

import Landing from "./pages/Landing";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-[62px]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
