import React from 'react';
import './home.css'
import profilePic from './charlotte-luke-hollyclarkphotography-h-905.jpg'
import BrandName from "../../components/brandname/brandname";


function Home() {
  return (
    <>

    <div className='home'> 

        {/* <div className='hook'>
          <span className='hookText'><span >Hey,</span><span> nice to see you</span></span>
        </div> */}

        <BrandName/>

        <div className='introContFlex'>
          
          <div className='profilePictureCont'>
            <img src={profilePic} alt='Nathalie Storey' className='profileImage'></img>
          </div>

          <div id='intro' className='text'>
            <p>Firstly thank you for taking the time to visit. I am new to the world of front end development and still finding my way. 
            </p>
              
            <span className='subtitle'>Why me?</span> 
            <p>I NEED to be creative. I need to be in an environment that allows a creative outlet. This is what is driving me to change and grow. In addition to this I thrive in an environment that fosters communication and teamwork. I enjoy learning and relish a challenge. Creativity, communication and continual learning are some of the cornerstones of web development and are what I need to be fulfilled.
            </p>

          </div>

        </div>

    </div>

    </>
  );
}

export default Home;
