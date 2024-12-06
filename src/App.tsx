import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage.tsx";
import AuthLayout from "./components/auth/authlayout.tsx";
import LoginPage from "./pages/loginpage.tsx";
import RegisteredPage from "./pages/registeredPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registred" element={<RegisteredPage />} />
      </Route>
    </Routes>
  );
}

export default App;
