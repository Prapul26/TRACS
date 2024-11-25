import React from 'react'
import './Training.css'
import thumbnail from '../../assets/thumbnail.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import VideoCard from '../../components/VideoCard/VideoCard';
export const Training = () => {
  
  return (
    <div>
      <Header />
      <Navbar />
      <div className='trainingContainer'>
        <div className='trainingHolder'>
          <div className='trainiginput'>
            <select>
              <option value='' disabled selected>Select Category</option>
              <option value='option1'>Centers Of Influence Techniques</option>
              <option value='option2'>Behind the Network</option>
              <option value='option3'>The Perfect Appointment</option>
              <option value='option4'>Network Techniques</option>
              <option value='option5'>7 Habbits Of Faster Word Of Mouth Marketing</option>
              <option value='option6'>30 Second Commercial</option>
              <option value='option7'>Best 30 sec Comm Training</option>

            </select>
            <input placeholder='Search Your Topics' />
          </div>
          <div className='trainingCard'>
            <VideoCard
              id="1"
              title="How to Ask"
              subtitle="The Perfect Appointment"
              description="This video shares techniques on how to ask for the referral in The Perfect Appointment"
              date="Apr 08, 2020"
              imageUrl={thumbnail}
            />
            <VideoCard
              id="2"
              title="How to Serve"
              subtitle="The Perfect Appointment"
              description="This video shares you to serve someone else in a perfect appointment "
              date="Apr 08, 2020"
              imageUrl={thumbnail2}
            />
            <VideoCard
              id="3"
              title="Lets Connect"
              subtitle="The Perfect Appointment"
              description="This video shares techniques on how to ask for the referral in The Perfect Appointment"
              date="Apr 08, 2020"
              imageUrl={thumbnail3}
            />
            <VideoCard
              id="4"
              title="H7 Spotlight black history"
              subtitle="Behind the network"
              description="THis is the story of perserverance during the time when humans were owned and their lives were not their own.What box do you need to build to deliver yourself to freedom? Inspiring message!"
              date="Apr 08, 2020"
              imageUrl={thumbnail4}
            />
            <VideoCard
              id="5"
              title="Behind the Network:Melissa Kiekpatrick"
              subtitle="Behind the network"
              description="Angel hicks,President of H7 networks and founder of Evolve Womens network,interview Melissa Kirakpatrick with Find your own Drive.Melissa has been both evolve and H7 Netwoks for over 2 years and director of Evolve in Cincinnati for 1 year"
              date="Apr 08, 2020"
              imageUrl={thumbnail5}
            />
            <VideoCard
              id="6"
              title="Behind the Network:Phil Snell"
              subtitle="Behind the network"
              description="Clayton Hicks,founder &Ceo of H7 Networks,interview Phill Snell,with Cellular Sales out of Nort Dayton,OH,2 years member H7 Network"
              date="Apr 06, 2020"
              imageUrl={thumbnail6}
            />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
