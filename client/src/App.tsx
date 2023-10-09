// Globals
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import About from "@/pages/About";
import Profile from "@/pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
