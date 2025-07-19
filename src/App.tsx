import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home/HomePage";
import PeoplePage from "./components/People/PeoplePage";
import PublicationsPage from "./components/Publications/PublicationsPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import AwardsPage from "./components/Awards/AwardsPage";
import TeachingPage from "./components/Teaching/TeachingPage";
import ServicePage from "./components/Service/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
