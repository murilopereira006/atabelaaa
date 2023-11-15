import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CustomTables from "./pages/customTables";
import NoPage from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<CustomTables />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
