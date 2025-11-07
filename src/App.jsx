import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserPage from "./componentsUserPage/UserPage";

function App() {
  return (
    <>
      <div className="text-3xl font-bold text-blue-600">DIYMA</div>

      <Routes>
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
