import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="*" element={<h1>404</h1>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
