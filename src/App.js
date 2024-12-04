// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberDetails from './components/MemberDetails/MemberDetails';
import Schedule from './components/Schedule/Schedule';
import Notes from './components/Notes/Notes';
import SendMail from './components/SendMail/SendMail';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './routes/Home/Home';
import Pricing from './routes/PRICING/Pricing';
import Payment from './components/Payment/Payment';
import Partner from './routes/ABOUT_US/Partner';
import AboutUs from './routes/ABOUT_US/AboutUs';
import Contact from './routes/ABOUT_US/Contact'
import About_us from './routes/ABOUT_US/About_us';
import Members from './routes/MEMBERS/Members';
import ReferralSupport from './routes/REFERAL-SUPPORT/ReferralSupport';
import { Blog } from './routes/RESOURCES/Blog';
import { Training } from './routes/RESOURCES/Training';
import { Help } from './routes/RESOURCES/Help';
import Video from './components/Video/Video';
import Testing from './routes/RESOURCES/Testing';
import Insurance from './routes/RESOURCES/Insurance';
import Events from './routes/EVENTS/Events';
import UserHeader from './User/UserHeader/UserHeader';
import MyMembership from './User/MyMembership/myMembership';
import Profile from './User/MyProfile/Profile';
import OrderHistory from './User/orderHistory/OrderHistory';
import StatusPage from './User/status/statusPage';
import BusinessProfile from './User/businessProfile/businessProfile';
import Ex1 from './Example/ex1';
import MyNotes from './User/Notes/MyNotes';
import NotesTemplate from './User/Notes/NotesTemplate';
import MakeNotes from './User/MakeNotes/MakeNotes';



const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path='/' element={isLogin ? <Login switchToRegister={() => setIsLogin(false)} /> : <Register switchToLogin={() => setIsLogin(true)} />} />
        <Route path='/register' element={<Register />} />
        <Route path="/memberDetails" element={<MemberDetails />} />
        <Route path="/schedule" element={<Schedule />} /> {/* New route for scheduling */}
        <Route path='/Notes' element={<Notes />} />
        <Route path='/sendMail' element={<SendMail />} />
        <Route path='/home' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/about' element={<About_us />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/members' element={<Members />} />
        <Route path='/referral' element={<ReferralSupport />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/training' element={<Training />} />
        <Route path='/help' element={<Help />} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/insurance' element={<Insurance />} />
        <Route path='/events' element={<Events />} />
        <Route path='/userHeader' element={<UserHeader />} />
        <Route path='/myMembership' element={<MyMembership />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/statusPage' element={<StatusPage />} />
        <Route path='/businessProfile' element={<BusinessProfile />} />
        <Route path='/ex1' element={<Ex1 />} />
        <Route path='/myNotes' element={<MyNotes />} />
        <Route path='/notesTemplate' element={<NotesTemplate />} />
        <Route path='/makeNotes' element={<MakeNotes />} />
      </Routes>
    </Router>
  );
};

export default App;
