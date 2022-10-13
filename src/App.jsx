import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { retrieveblogs } from "./actions/blogs";
import CreatePost from "./pages/CreatePost";

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
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
