import React from 'react'
import './AboutUs.css'
import '../../components/Header/Header'
import '../../components/Footer/Footer'
import '../../components/Navbar/Navbar'
import pic1 from '../../assets/abd1.png'
import pic2 from '../../assets/abd2.png'
import pic3 from '../../assets/abd3.png'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const AboutUs = () => {
  return (
    <div className='ooop'>
      <Header />
      <Navbar />
      <div className='ablue' ><div style={{ paddingTop: "2px" }}><h1>ABOUT US</h1></div></div>
      <div className='aboutCOntainer'>
        <div className='abd1'>
          <h1 style={{ textDecoration: "underline" }}>Welcome to TRACS</h1>
          <p>At TRACS, we believe in the power of connections. Our platform is designed to be the heartbeat of professional networking, where members come together to forge meaningful relationships, exchange ideas, and unlock new opportunities. Our platform is designed for individuals and businesses seeking meaningful networking experiences.</p>
        </div>
        <div className='abd2'>
          <h1 style={{ textDecoration: "underline" }}>Who We Are:</h1>
          <p>We are more than just a networking app; we are a dynamic community of professionals, entrepreneurs, and thought leaders. TRACS is the go-to destination for those who understand the importance of building strong, authentic connections in the business world.</p>
        </div>
        <div className='abd3'>
          <div className='abd31'><img src={pic1} /></div>
          <div className='abd32'><h1 style={{ textDecoration: "underline" }}>Our Mission:</h1>
            <p>Empowering individuals to grow, succeed, and innovate through the strength of their network. We are on a mission to redefine how professionals connect, communicate, and collaborate in today's fast-paced business landscape.</p></div>
        </div>
        <div className='abd4'>
          <div className='abd41'><h1 style={{ textDecoration: "underline" }}>What We Offer:</h1>
            <h3>Effortless Networking:</h3>
            <p>Connect with like-minded professionals effortlessly through our intuitive platform.</p>
            <h3>Explore Opportunities:</h3>
            <p>Discover new opportunities, collaborations, and business ventures with ease.</p>
            <h3>Community Hub:</h3>
            <p>Join a vibrant community of professionals, exchange ideas, and stay updated on industry trends.</p>
            <h3>Global Reach, Local Impact:</h3>
            <p>Connect with professionals from around the world while also having the ability to tap into local networks and opportunities.</p>
          </div>
          <div className='abd42'>
            <img src={pic2} />
          </div>
        </div>
        <div className='abd5'>
          <div className='abd51'><img src={pic3} /></div>
          <div className='abd52'>
            <h1 style={{ textDecoration: "underline" }}>Key Features:</h1>
            <h3>Connection Management:</h3>
            <p>Our intelligent algorithm ensures that you connect with the right people based on your professional goals and interests.</p>
            <h3>Search and Discovery:</h3>
            <p>Robust search functionality allows users to find professionals or businesses based on criteria such as industry, location, skills.</p>
            <h3>Content Sharing:</h3>
            <p>Users can share articles, blog posts, videos, and other content relevant to their industry or expertise, showcasing their knowledge and expertise to their network.</p>
            <h3>Secure Collaboration:</h3>
            <p>Experience seamless and secure communication with fellow members, fostering a trusted environment for collaboration and idea exchange.</p>
          </div>

        </div> <div className='abd6'>
          <h1 style={{ textDecoration: "underline" }}>Join Us in Building the Future:</h1>
          <p>We invite you to be part of a community that values collaboration, innovation, and the limitless possibilities that arise when great minds come together. Whether you're looking for career opportunities, business partnerships, or simply seeking inspiration, TRACS is the catalyst for your success.

          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default AboutUs;