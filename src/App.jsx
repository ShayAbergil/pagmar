import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BioQuestions from "./pages/BioQuestions";
import GeneralQuestions from "./pages/GeneralQuestions";
import SubjectSelection from "./pages/SubjectSelection";
import SurveyQuestions from "./pages/SurveyQuestions";
import Finish from "./pages/Finish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<BioQuestions />} />
        <Route path="/general" element={<GeneralQuestions />} />
        <Route path="/subjects" element={<SubjectSelection />} />
        <Route path="/survey/:subjectId" element={<SurveyQuestions />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
