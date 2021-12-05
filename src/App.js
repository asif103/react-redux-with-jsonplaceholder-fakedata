import "./App.css";
import { Box } from "@mui/system";
import AllPost from "./pages/AllPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllUser from "./pages/AllUser";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPost />} />
          <Route path="/users" element={<AllUser />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
