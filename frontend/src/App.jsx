import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import CreateListing from "./pages/CreateListing"
import UpdateListing from "./pages/UpdateListing"
import Listing from "./pages/Listing"
import Search from "./pages/Search"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App
