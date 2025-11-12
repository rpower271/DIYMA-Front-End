import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./Layout";
import ProjectIdeas from "./components/ProjectIdeas/ProjectIdeas";
import HomePage from "./components/HomePage/homePage";
import Error404 from "./Error404";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" index element={<HomePage />} />
          <Route path="projects" element={<ProjectIdeas />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
