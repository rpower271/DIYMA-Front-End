import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserPage from "./componentsUserPage/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
