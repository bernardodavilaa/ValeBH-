import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cards, Header } from 'components';
import ChooseForMePage from 'pages/chooseForMePage/chooseForMePage';
import DiscoverPage from 'pages/discoverPage/discoverPage';
import FeedPage from 'pages/feedPage/feedPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/descobrir" element={<DiscoverPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/escolhe" element={<ChooseForMePage />} />
      </Routes>
    </Router>
  );
}
