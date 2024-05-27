import React, { useState } from 'react';

function Contact() {

    const [isVisible, setIsVisible] = useState(false);
    const [cvContent, setCvContent] = useState("");
  
    const handleToggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    const handleCvChange = (e) => {
      setCvContent(e.target.value);
    };

  

  return (
    <div className="App">
      <header>
        <h1>Contact Us</h1>
      </header>
      <section className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select id="department" name="department">
              <option value="General">General Inquiry</option>
              <option value="Emergency">Emergency</option>
              <option value="Billing">Billing</option>
              <option value="Appointments">Appointments</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <button onClick={handleToggleVisibility}>
        {isVisible ? 'Hide CV Section' : 'Show CV Section'}
      </button>
      <section className={isVisible ? "cv-section visible" : "cv-section"}>
        <h2>Curriculum Vitae</h2>
        <textarea
          id="cv-content"
          name="cv-content"
          rows="10"
          value={cvContent}
          onChange={handleCvChange}
          placeholder="                                                 CURRICULUM   VITAE                        

          PERSONAL INFORMATION
NAME 	ABDIAZIZ HUSSEIN HADUN
SEX 	MALE
ID NO:	37358613
NATIONALITY	KENYAN
MARITAL STATUES	SINGLE
LANGUAGES	ENGLISH ,ARABIC AND SOMALI
TEL:	+254722337524
DATE OF BIRTH	1996
EMAIL	Zizoalhusyny73@gmail.com
RESIDENCE	GA
VISION

•	To be an agent of change in the lives of people by upholding integrity ,strong work ethics and sharpening individual problem solving skills so as to generate solutions in all the spheres of the lives of People and develop mechanisms of unlocking their potentials

Career Objective

•	To use my training and  inherit ability to fulfill capacity while valuing team work
•	To create or harness the range of resources within the institution to achieve quality production and satisfaction of clients.
•	To serve as a change agents in respect of the institution and the implementation of any institution changed.
•	T be honest accountable and discipline to realize the objectives of my employers
•	To be valued through my positive and visible contributions


Academic and Professional Qualifications 

INSTITUTION
Area of Learning 
Year
AL AMIN  SECONDARY SCHOOL	K.C.S.E Certificate	2019-2022
SUNSHINE PRIMARY SCHOOL	K.C.P.E Certificate
2007 - 2014  



HOBBIES 
•	Making friends.
•	Learning new things 
•	Helping others/ Humanitarian work
•	Reading the Holy Qur’an.

INTEREST 
Learning new things practically, coming up with my own ideas.

PROFESSIONAL ACTIVITIES 
	Administrative skills 
	Report writing  
	Leading project 

Key Achievements
	Regularly met strict work deadlines and delivered quality work as per expectations.
	Give an opinion and made recommendations where applicable on various matters geared at improving the quality of services I provide.
	Promoted teamwork within my team enables us to deliver with in time frame
	Practically managed resources ensuring optimal use.

Referees

1	Name	IDIRIS ABDI BILAL
Role	DIRECTOR OF PUBLIC AND ADMINISTRATION
Organization	GARISSA COUNTY
Telephone / Email/address	+254728627558

2	Name	ABDI AHMED ALI
Role	DEPUTY DIRECTOR OF TRADE
Organization	GARISSA COUNTY GOVERNMENT
Telephone/ E-mail/address	0728215723

"
        ></textarea>
      </section> 
    </div>
  );
}

export default Contact;
