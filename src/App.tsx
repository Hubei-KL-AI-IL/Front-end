import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        {/* if the router not matching */}
        <Route path="*" element={<Navigate to={"./home"} />} />
      </Routes>
    </>
  );
}

export default App;
