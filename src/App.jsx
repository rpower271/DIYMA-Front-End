import { Routes, Route } from "react-router";
import "./App.css";
import UserPage from "./componentsUserPage/UserPage";
import Layout from "./Layout";
import HomePage from "./components/HomePage/homePage";
import Error404 from "./Error404";
import IdeaProjects from "./components/IdeaProjects/IdeaProjects";
import Register from "./components/Auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="ideas" element={<IdeaProjects />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
