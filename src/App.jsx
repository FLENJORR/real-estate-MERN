import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/signIn"
import Home from "./pages/home"
import SignUp from "./pages/SignUp"
import About from "./pages/about"
import Profile from "./pages/profile"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/sign-in" element= {<SignIn />} />
      <Route path="/sign-up" element= {<SignUp />} />
      <Route path="/about" element= {<About />} />
      <Route path="/profile" element= {<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
