import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./Layout";
import ProjectIdeas from "./components/ProjectIdeas/ProjectIdeas";
import Error404 from "./Error404";
import ForumPage from "./components/Forum/ForumPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="forum" element={<ForumPage />} />
          <Route path="projects" element={<ProjectIdeas />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
