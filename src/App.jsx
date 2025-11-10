import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./Layout";
import ProjectIdeas from "./components/ProjectIdeas/ProjectIdeas";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="projects" element={<ProjectIdeas />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
