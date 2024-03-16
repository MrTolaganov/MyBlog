import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostPage from "./pages/PostPage";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import FooterCom from "./components/FooterCom";
import AdminPRoute from "./components/AdminRoute";
import ScrollToTop from "./components/ScrollToTop";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      {currentUser !== null && (
        <>
          <ScrollToTop />
          <Header />
        </>
      )}

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<AdminPRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      {currentUser !== null && <FooterCom />}
    </BrowserRouter>
  );
}
