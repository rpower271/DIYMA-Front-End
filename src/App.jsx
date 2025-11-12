import { Routes, Route } from "react-router";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserPage from "./componentsUserPage/UserPage";
import Layout from "./Layout";
import HomePage from "./components/HomePage/homePage";
import Error404 from "./Error404";
import IdeaProjects from "./components/IdeaProjects/IdeaProjects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/UserPage" element={<UserPage />} />
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ideas" element={<IdeaProjects />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
