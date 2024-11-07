import React, { useContext, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate, Redirect,useLocation } from "react-router-dom";

import Register from "./register"
import Login from "./login";
import WalletOverView from "./walletOverview";
import Affiliate from "./affliate"
import Profile from "./profile"
import Referral from "./referral";

import Mytip from "./mytip"
import Virc from "./vorc"
import About from "./about"
import Contact from "./contact"
import TermsAndCondition from "./termsAndCondition"
import Disclaimer from "./disclaimer"
import "./App.css"
import Mobile from "./mobileheader"
import SampleHome from "./home2"
import Premium from "./premium"
import SportPage from "./sportsPage"
import ForexPage from "./forexPage"
import CryptoPage from "./cryptoPage"
import BinaryPage from "./binarypage"
import TipSterDashboard from "./tipStarDashboard"
// import Airtime from "./airtime"
import ForgotPassword from "./forgetpassword"
import OTP from "./otp"
import Success from "./success"
import TipsterWallet from "./tipsterWallet"
import ResetPassword from "./resetPassword"
import UsersWallet from "./tipsWallet"
import { AuthContext } from './context/authContext';
import AllTips from "./allTips"
import UserDashBoard from "./userDashboard"


import Admin from "./admin"
import AdminLogin from "./adminLogin"
import Navbar from "./navbar"
import Exchange from "./exchange"
import BuyAndSellEnar from "./buyAndSellEnar"
import TipsWallet from "./tipsterWallet";
import ProfilePageFile from "./profilePage"
import BecomeATipster from "./becomeATipster";
import FindTipster from "./findTipster";
import MarketPrediction from "./marketPrediction";
import RecentPrediction from "./recentPrediction";
import Token from "./token";
import "./App.css"

import DashboardHome from "./Dashboard/dashboardHome"
// import { Link, useLocation } from "react-router-dom";

function App() {
  
  const [admin, setAdmin] = useState(true)
  const { currentUser } = useContext(AuthContext);

  // const isLoginRoute = location.pathname;
  const tr = window.location.pathname;
  // const navigate = useLocation();
  return (
    <div className="kingsley_the_coder">
      <BrowserRouter>
        {tr === "/dashboard" || tr === "/user-dashboard" ? null : <> <Navbar />
          <Mobile /></>}

        <Routes>
          <Route path="/" element={<SampleHome />} />
          <Route path="/token" element={<Token />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {currentUser ? <Route path="/wallet" element={<WalletOverView />} /> : <Route path="/" element={<SampleHome />} />}
          <Route path="/affiliate" element={<Affiliate />} />
          {currentUser ? <Route path="/profile" element={<Profile />} /> : <Route path="/" element={<SampleHome />} />}
          {!currentUser ? <Route path="/forgotpassword" element={<ForgotPassword />} /> : <Route path="/" element={<SampleHome />} />}
          {!currentUser ? <Route path="/otp" element={<OTP />} /> : <Route path="/" element={<SampleHome />} />}
          {!currentUser ? <Route path="/success" element={<Success />} /> : <Route path="/" element={<SampleHome />} />}
          <Route path="/referral/:id" element={<Referral />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/forex" element={<ForexPage />} />
          <Route path="/cryptocurrency" element={<CryptoPage />} />
          <Route path="/binary" element={<BinaryPage />} />
          <Route path="/sport" element={<SportPage />} />
          {currentUser ? <Route path="/tip" element={<Mytip />} /> : <Route path="/" element={<SampleHome />} />}
          <Route path="/tips" element={<Mytip />} />
          <Route path="/betcalculator" element={<Virc />} />
          <Route path="/about" element={<About />} />
          <Route path="/allTips" element={<AllTips />} />
          <Route path="/premium" element={<Premium />} />
          {/* <Route path="/" element={<SampleHome />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
          {admin === true ? <Route path="/dashboard" element={< DashboardHome />} /> : <Route path="/" element={<SampleHome />} />}
          <Route path="/contact" element={< Contact />} />
          <Route path="/disclaimer" element={< Disclaimer />} />
          {/* <Route path="/airtime" element={<Airtime />} /> */}
          <Route path="/termscondition" element={<TermsAndCondition />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/tipster" element={<TipSterDashboard />} />
          <Route path="/tipsterWallet" element={<TipsWallet />} />
          <Route path="/userWallet" element={<UsersWallet />} />
          <Route path="/view-profile" element={<ProfilePageFile />} />
          <Route path="/become-tipster" element={<BecomeATipster />} />
          <Route path="/find-tipster" element={<FindTipster />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/buy-and-sell-enar" element={< BuyAndSellEnar />} />
          <Route path="/market-predictions" element={<MarketPrediction />} />
          <Route path="/recent-predictions" element={<RecentPrediction />} />
          {/* {currentUser ? <Route path="/user-dashboard" element={<UserDashBoard />} /> : <Route path="/" element={<SampleHome />} />} */}
          <Route path="/user-dashboard" element={<UserDashBoard />} /> 




        </Routes>

      </BrowserRouter>

    </div>

  )

}

export default App;
