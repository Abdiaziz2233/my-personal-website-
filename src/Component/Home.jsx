import React, { useState, useEffect } from 'react';
import photo from "../photo.png";
import { CiCircleCheck } from "react-icons/ci";


function Home() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);



  
  return (
    <>
      <div className='home-div'>
        <div className='home-left'>
          <p id='welcome'>WELCOME TO SARAP PHARMACY AND SPECIALIST CLINIC</p>
          <p>Welcome to our hospital, where compassionate care meets cutting-edge technology. Our dedicated team of healthcare professionals is committed to providing the highest quality medical services to our patients.</p>
          <p id='madowow'>Our performance is your healthcare. Our passion is innovation. Our expertise is unmatched. we get you more.</p>
          <button
            className='twin-1 twins-btns'
            onClick={() => setShowAdditionalInfo(true)}
          >
            Get Started
          </button>
          {showAdditionalInfo && (
            <p className='additional-info'>We treat God heals.</p>
          )}
          <button className='twin-2 twins-btns'>View Case Study</button>
        </div>
        <div className='home-right'>
          <img className='one-way' src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-%26-health-care-flyer-design-template-db3d0834aafa6599955bf4d869246e0c_screen.jpg"} alt="" />
        </div>
      </div>
      <div className='white-div'>
        <div className='cards'>
          <h2>General clinics</h2>
          <p>Clinical chemistry.
            Clinical Microbiology.
            Hematology.
            Blood banking and serology (ie, Immunohematology, Transfusion medicine)
            Histopathology and cytopathology.
            Molecular biology.
            Public health: providing tests such as water analysis and testing for environmental toxins.</p>
          <button>Learn More</button>
        </div>
        <div className='cards'>
          <h2>Laboratory services</h2>
          <p>Clinical chemistry.
            Clinical Microbiology.
            Hematology.
            Blood banking and serology (ie, Immunohematology, Transfusion medicine)
            Histopathology and cytopathology.
            Molecular biology.
            Public health: providing tests such as water analysis and testing for environmental toxins.</p>
          <button>Learn More</button>
        </div>
        <div className='cards'>
          <h2>Specilialist clinics</h2>
          <p>Clinical chemistry.
            Clinical Microbiology.
            Hematology.
            Blood banking and serology (ie, Immunohematology, Transfusion medicine)
            Histopathology and cytopathology.
            Molecular biology.
            Public health: providing tests such as water analysis and testing for environmental toxins.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className='customers'>
        <h2>Join Our 30,000 Happy Patients</h2>
      </div>

      <div className='logo-apple'>
        <img src={"https://dmmc.co.ke/wp-content/uploads/2020/03/43-4-1.png"} alt="" />
        <img src={"https://dmrckenya.co.ke/wp-content/uploads/2020/04/augmentin.jpg"} alt="" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHQk47wiJE3i9sBLbRQGBDOhfgvF9G1xfSZvm_RECEA&s"} alt="" />
        <img src={"https://countrymedicalpharmacy.com/wp-content/uploads/2022/12/fe43de3c-c43c-4b5e-8ed7-8470b464f397_500x500.jpg"} alt="" />
        <img src={"https://www.mycare.lk/image/cache/catalog/products/006843-1000x1000.JPG"} alt="" />
      </div>

      <div className='matter'>
        <div className='matter-one'>
          <h3 className='matter-h3'>let us do the work, so you can focus on what matters</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est id earum, sint, dolorem, doloremque necessitatibus.</p>
          <button className='matter-button'>learn more</button>
        </div>
        <img className='investerman' src={photo} alt="" />
        <div>
          <div className='remote-div'>
            <CiCircleCheck className='check' />
            <div>
              <h3>Remote Home Office</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='blulight remote-div'>
            <CiCircleCheck className='check' />
            <div>
              <h3>Virtual Workstation</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='remote-div'>
            <CiCircleCheck className='check' />
            <div>
              <h3>Terminal Server</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

    </>

    
  );
}

export default Home;
