import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { retrieveblogs } from "./actions/blogs";
import ManagePosts from './pages/AdminPanel'

function App() {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveblogs());
  }, []);
  console.log(blogs);
  console.log(blogs.map((blog)=>blog._id))

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-panel" element={<ManagePosts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
