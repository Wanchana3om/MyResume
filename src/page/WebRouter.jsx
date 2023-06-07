import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SkillPage from "./SkillPage";
import Education from "./Education";
import Experience from "./Experience";

function WebRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default WebRouter;
