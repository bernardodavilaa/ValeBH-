import { Routes, Route } from "react-router-dom";
import ChooseForMePage from "pages/chooseForMePage/chooseForMePage";
import FeedPage from "pages/feedPage/feedPage";
import DiscoverPage from "pages/discoverPage/discoverPage";
import { Cards } from "components";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/descobrir" element={<DiscoverPage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/escolhe" element={<ChooseForMePage />} />
    </Routes>
  );
}

export default AppRoutes;
