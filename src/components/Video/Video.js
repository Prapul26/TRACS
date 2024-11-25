import React from 'react'
import './Video.css'
import { useParams } from 'react-router-dom';
 const Video = () => {
  
  
        const { id } = useParams();
        const videoData = {
          '1': {
            title: 'How to Ask',
            videoUrl: 'https://path/to/video1.mp4',
            description: 'This video shares techniques on how to ask for the referral in The Perfect Appointment',
            date: 'Apr 08, 2020',
          },
          '2': {
            title: 'How to Serve',
            videoUrl: 'https://path/to/video2.mp4',
            description: 'This video shares you to serve someone else in a perfect appointment',
            date: 'Apr 08, 2020',
          },
          '3':{
            title: 'Lets Connect',
            videoUrl: 'https://path/to/video1.mp4',
            description: 'This video shares techniques on how to ask for the referral in The Perfect Appointment',
            date: 'Apr 08, 2020',
          },
          '4':{
            title: 'H7 Spotlight black history',
            videoUrl: 'https://path/to/video1.mp4',
            description: 'THis is the story of perserverance during the time when humans were owned and their lives were not their own.What box do you need to build to deliver yourself to freedom? Inspiring message!',
            date: 'Apr 08, 2020',
          },
          '5':{
            title: 'Behind the Network:Melissa Kiekpatrick',
            videoUrl: 'https://path/to/video1.mp4',
            description: 'Angel hicks,President of H7 networks and founder of Evolve Womens network,interview Melissa Kirakpatrick with Find your own Drive.Melissa has been both evolve and H7 Netwoks for over 2 years and director of Evolve in Cincinnati for 1 year',
            date: 'Apr 08, 2020',
          },
          '6':{
            title: 'Behind the Network:Phil Snell',
            videoUrl: 'https://path/to/video1.mp4',
            description: 'Clayton Hicks,founder &Ceo of H7 Networks,interview Phill Snell,with Cellular Sales out of Nort Dayton,OH,2 years member H7 Network',
            date: 'Apr 08, 2020',
          }
          // Add more video data as needed
        };
      
        const video = videoData[id];
      
        if (!video) {
          return <div>Video not found</div>;
        }
      
        return (
          <div>
            <h1>{video.title}</h1>
            <video width="600" controls>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.description}</p>
            <p>{video.date}</p>
          </div>
        );
      };
      
      export default Video;