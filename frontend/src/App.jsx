import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

import "./css/style.css";
import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import EcoLearn from "./pages/EcoLearn.jsx";
import EcoLab from "./pages/EcoLab.jsx";
import EcoGames from "./pages/EcoGames.jsx";
import { EcoPulse } from "./pages/EcoPulse.jsx";
import EcoEngage from "./pages/EcoEngage.jsx";
import EcoTracker from "./pages/EcoTracker.jsx";
import EcoBot from "./pages/EcoBot.jsx";
import EcoPolicy from "./pages/EcoPolicy.jsx";
import EcoGuide from "./pages/EcoGuide.jsx";
import GameDetailPage from "./components/EcoGames/GameDetailPage.jsx";
import { AllArticles } from "./components/EcoGuide/AllArticles.jsx";
import BlogArticles from "./components/EcoGuide/BlogArticles.jsx";
import EcoTrackerHome from "./components/EcoTracker/EcoTrackerHome.jsx";
import EcoTrackerWaste from "./components/EcoTracker/EcoTrackerWaste.jsx";
import EcoTrackerFood from "./components/EcoTracker/EcoTrackerFood.jsx";
import EcoTrackerTransport from "./components/EcoTracker/EcoTrackerTransport.jsx";
import EcoTrackerEnergy from "./components/EcoTracker/EcoTrackerEnergy.jsx";
import EcoTrackerWater from "./components/EcoTracker/EcoTrackerWater.jsx";
import EcoTrackerProduct from "./components/EcoTracker/EcoTrackerProduct.jsx";
import EcoTrackerDigital from "./components/EcoTracker/EcoTrackerDigital.jsx";
import DetailPage from "./components/EcoLab/DetailPage.jsx";
import EcoStatCarbon from "./components/EcoStats/EcoStatCarbon.jsx";
import EcoStatEnergy from "./components/EcoStats/EcoStatEnergy.jsx";
import EcoStatAir from "./components/EcoStats/EcoStatAir.jsx";
import EcoStatWater from "./components/EcoStats/EcoStatWater.jsx";
import EcoStatBiodiversity from "./components/EcoStats/EcoStatBiodiversity.jsx";
import EcoStatWaste from "./components/EcoStats/EcoStatWaste.jsx";
import EcoStatMobility from "./components/EcoStats/EcoStatMobility.jsx";
import EcoAgri from "./components/EcoStats/EcoAgri.jsx";
import EcoEconomy from "./components/EcoStats/EcoEconomy.jsx";
import SignUp from "./pages/sign-up.jsx";
import SignIn from "./pages/sign-in.jsx";
import PublicRoutes from "./components/Guards/PublicRoutes.jsx";
import Home from "./pages/Home.jsx";
import ProtectedRoutes from "./components/Guards/ProtectedRoutes.jsx";
import NotFound from "./pages/NotFound.jsx";
import TermsAndConditions from "./pages/TermsandCondition.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ProfileSettings from "./pages/ProfilePage.jsx";
import EcoLearnVideo from "./components/EcoLearn/EcoLearnVideo.jsx";
import EcoLearnCourses from "./components/EcoLearn/EcoLearnCourses.jsx"
import EcoLearnArticles from "./components/EcoLearn/EcoLearnArticles.jsx"
import EcoPulse2 from "./pages/EcoPulse2.jsx";
function App() {
  const location = useLocation();

  // Scroll to the top on route change
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      {/* ToastContainer added here to show notifications globally */}
      <ToastContainer
        position="top-right" // You can change position here
        autoClose={5000} // Auto-close toast after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PublicRoutes />}>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/terms" element={<TermsAndConditions/>}/>
          <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route exact path="/signin" element={<SignIn />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="eco-learn" element={<EcoLearn />} />
          <Route path="eco-learn/video" element={<EcoLearnVideo />} />
          <Route path="eco-learn/courses" element={<EcoLearnCourses />} />
          <Route path="eco-learn/articles" element={<EcoLearnArticles />} />
          <Route path="eco-lab" element={<EcoLab />} />
          <Route path="eco-lab/details" element={<DetailPage />} />
          <Route path="eco-games" element={<EcoGames />} />
          <Route path="eco-games/details" element={<GameDetailPage />} />
          <Route path="eco-pulse" element={<EcoPulse />} />
          <Route path="eco-engage" element={<EcoEngage />} />
          <Route path="eco-tracker" element={<EcoTrackerHome />} />
          <Route path="eco-tracker/home" element={<EcoTrackerHome />} />
          <Route path="eco-tracker/waste" element={<EcoTrackerWaste />} />
          <Route path="eco-tracker/food" element={<EcoTrackerFood />} />
          <Route path="eco-tracker/transport" element={<EcoTrackerTransport />} />
          <Route path="eco-tracker/energy" element={<EcoTrackerEnergy />} />
          <Route path="eco-tracker/water" element={<EcoTrackerWater />} />
          <Route path="eco-tracker/products" element={<EcoTrackerProduct />} />
          <Route path="eco-tracker/digital" element={<EcoTrackerDigital />} />
          <Route path="eco-bot" element={<EcoBot />} />
          <Route path="eco-policy" element={<EcoPolicy />} />
          <Route path="eco-guide" element={<EcoGuide />} />
          <Route path="eco-guide/all-articles" element={<AllArticles />} />
          <Route path="eco-guide/blog" element={<BlogArticles />} />
          <Route path="eco-stats/carbon" element={<EcoStatCarbon />} />
          <Route path="eco-stats/energy" element={<EcoStatEnergy />} />
          <Route path="eco-stats/air-quality" element={<EcoStatAir />} />
          <Route path="eco-stats/water-usage" element={<EcoStatWater />} />
          <Route path="eco-stats/biodiversity" element={<EcoStatBiodiversity />} />
          <Route path="eco-stats/waste-management" element={<EcoStatWaste />} />
          <Route path="eco-stats/mobility" element={<EcoStatMobility />} />
          <Route path="eco-stats/agriculture" element={<EcoAgri />} />
          <Route path="eco-stats/economy" element={<EcoEconomy />}/> 
          <Route path="settings" element={<ProfileSettings/>}/> 
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
