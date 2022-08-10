// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
require('dotenv').config();
import { Routes, Route, Link } from 'react-router-dom';
import Profile2 from './pages/prfile2';
import Landing from './pages/Landing';
import Login from './pages/Login';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />

      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile2 />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </ThemeProvider>
  );
}
