import { Routes, Route } from "react-router";
import "./App.css";
import UserPage from "./componentsUserPage/UserPage";
import Layout from "./Layout";
import HomePage from "./components/HomePage/HomePage";
import Error404 from "./Error404";
import ForumPage from "./components/Forum/ForumPage";
import IdeaProjects from "./components/IdeaProjects/IdeaProjects";
import Register from "./components/Auth/Register";
import Login from "./Login";
import IdeasDetails from "./components/IdeasDetails/IdeasDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="forum" element={<ForumPage />} />
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="ideas" element={<IdeaProjects />} />
          <Route path="ideas/:id" element={<IdeasDetails />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
