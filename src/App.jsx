import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/404"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={"Layout"}>
        <Route index element={"dashboard"} />
        <Route path="builder/:resumeId" element="resumeBuilder" />
      </Route>

      <Route path="view/:resumeId" element="view" />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
