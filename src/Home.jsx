import React from 'react'
import "./Home.css"

import logo from "./images/logo.png"
import home1 from "./images/home1.jpg"
import home3 from "./images/home3.jpg"
import home4 from "./images/home4.jpg"
import home2 from "./images/home2.jpg"
import a1 from "./images/a1.jpg"
import a2 from "./images/a2.JPG"
import r1 from "./images/r1.jpg"
import r2 from "./images/r2.jpg"
import r3 from "./images/r3.jpg"
import c from "./images/c.jpg"
import re from "./images/re.jpg"
import g1 from "./images/g1.jpg"
import g2 from "./images/g2.jpg"
import g3 from "./images/g3.jpg"
import g4 from "./images/g4.jpg"



const Home = () => {
  return (
    <>
      <header class="header" id="navigation-menu">
        <div class="container">
          <nav>
            <a href="#" class="logo heading2"><h1>M</h1>useo<h1>M</h1>atic</a>

            <ul class="nav-menu">
              <li> <a href="home" class="nav-link">Home</a> </li>
              <li> <a href="#Other" class="nav-link">Other</a> </li>
              <li> <a href="/feedback" class="nav-link">Feedback</a> </li>
              <li> <a href='/gallery' class="nav-link">Gallery</a> </li>
              <li> <a href="/about" class="nav-link">About</a> </li>
              <li> <a href="/admin" class="nav-link">Admin</a> </li>
            </ul>

            <div class="hambuger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      <section class="home" id="home">
        <div class="head_container">
          <div class="box">
            <div class="text">
              <h1>MUSEUM</h1>
              <p>&quot;Time Travel Experience,&quot; the Timeless Treasures Museum provides visitors with an unparalleled
                opportunity to not just observe history, but to actively engage with it. It creates a sense of connection
                and understanding, allowing visitors to develop a profound appreciation for the richness and
                complexity of human history. </p>
              <button><a href="https://www.tripadvisor.in/Attractions-g297648-Activities-c49-Maharashtra.html">MORE INFO</a></button>
            </div>
          </div>
          <div class="image">
            <img src={home1} class="slide" />
          </div>
          <div class="image_item">
            <img src={home1} alt="" class="slide active" onclick="img('\images\home1.jpg')" />
            <img src={home2} alt="" class="slide" onclick="img('\images\home2.jpg')" />
            <img src={home3} alt="" class="slide" onclick="img('\images\home3.jpg')" />
            <img src={home4} alt="" class="slide" onclick="img('\images\home4.jpg')" />
          </div>
        </div>
      </section>

      <section class="book">
        <div class="container flex">
          <div class="input grid">
            <div class="box">
              <label>Check-in:</label>
              <input className='input-homepage' type="date" placeholder="Check-in-Date" />
            </div>
            <div class="box">
              <label>Check-out:</label>
              <input className='input-homepage' type="date" placeholder="Check-out-Date" />
            </div>
            <div class="box">
              <label>Adults:</label> <br />
              <input className='input-homepage' type="number" placeholder="0" />
            </div>
            <div class="box">
              <label>Children:</label> <br />
              <input className='input-homepage' type="number" placeholder="0" />
            </div>
          </div>
          <div class="search">
            <a href="/registration">
              <input className='input-homepage' type="submit" value="SEARCH" />
            </a>

          </div>
        </div>
      </section>


      <section class="about top">
        <div class="container flex">
          <div class="left">
            <div class="img">
              <img src={a1} alt="" class="image1" />
              <img src={a2} alt="" class="image2" />
            </div>
          </div>
          <div class="right">
            <div class="heading">
              <h5>RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
              <h2>Welcome to MUSEUM</h2>
              <p>The National Museum, New Delhi, as we see it today, has an interesting beginning. The blueprint for establishing the National Museum in Delhi was prepared by the Maurice Gwyer Committee in May 1946. An Exhibition of Indian Art, consisting of selected artefacts from various museums of India was organized by the Royal Academy, London with the cooperation of Government of India and Britain. The Exhibition went on display in the galleries of Burlington House, London during the winter months of 1947-48. It was decided to display the same collection in Delhi, before the return of exhibits to their respective museums. An exhibition was organized in the the RashtrapatiBhawan (President's residence), New Delhi in 1949, which turned out to be a great success. This event proved responsible for the creation of the National Museum. </p>

              <button class="btn1"> <a href="/about">READ MORE</a></button>
            </div>
          </div>
        </div>
      </section>


      <section class="wrapper top">
        <div class="container">
          <div class="text">
            <h2>Our Amenities</h2>
            <p>These brief descriptions highlight the amenities that museums commonly offer, providing a glimpse into the additional features and services that enhance the overall visitor experience. </p>

            <div class="content">
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Guided Tours</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Cafe or Restaurant</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Multi-Language Support</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Interactive Exhibits</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Information Desk</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Seating Area & Restrooms</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Wi-Fi</span>
              </div>
              <div class="box flex">
                <i class="fas fa-spa"></i>
                <span>Parking Facilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="room top" id="Other">
        <div class="container">
          <div class="heading_top flex1">
            <div class="heading">
              <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2>Explore other museum</h2>
            </div>
            <div class="button">
              <button class="btn1"><a href="https://www.tripadvisor.in/Attractions-g297648-Activities-c49-Maharashtra.html">VIEW ALL</a></button>
            </div>
          </div>

          <div class="content grid">
            <div class="box">
              <div class="img">
                <img src={r1} alt="" />
              </div>
              <div class="text">
                <h3>Darshan Museum</h3>
                <p> <span>Time</span>10:00 AM - 6:00 PM
                  <span> <p><a href="https://darshan.net.in/">CLICK HERE</a> to visit their website</p></span> </p>
              </div>
            </div>
            <div class="box">
              <div class="img">
                <img src={r2} alt="" />
              </div>
              <div class="text">
                <h3>Mani Bhavan Gandhi Museum</h3>
                <p> <span>Time</span>10:00 AM - 5:30 PM
                  <span><p><a href="https://www.gandhi-manibhavan.org/">CLICK HERE</a> to visit their website</p></span> </p>
              </div>
            </div>
            <div class="box">
              <div class="img">
                <img src={r3} alt="" />
              </div>
              <div class="text">
                <h3>Sunil's Celebrity Wax Museum</h3>
                <p> <span>Time</span>9:00 AM - 10:00 AM
                  <span><p><a href="https://celebritywaxmuseum.com/wax-museum-lonavala/">CLICK HERE</a> to visit their website</p></span> </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="wrapper wrapper2 top" id="Feedback">
        <div class="container">
          <div class="text">
            <div class="heading">
              <h5>AT THE HEART OF COMMUNICATION</h5>
              <h2>People Say</h2>
            </div>

            <div class="para">
              <p>I wanted to express my appreciation for the seamless online ticketing process and the enjoyable experience I had visiting your museum. Booking tickets online was easy and straightforward, and upon arrival, the staff efficiently scanned my e-ticket for entry. The exhibits were captivating, and the amenities provided added to the overall convenience and enjoyment. Thank you for a great experience! </p>

              <div class="box flex">
                <div class="img">
                  <img src={c} alt="" />
                </div>
                <div class="name">
                  <h5>Janavhi</h5>
                  <h5>IDAHO</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="restaurant top" >
        <div class="container flex">
          <div class="left">
            <img src={re} alt="" />
          </div>
          <div class="right">
            <div class="text">
              <h2>Our Museum</h2>
              <p> Excepteur </p>
            </div>
            <div class="accordionWrapper">
              <div class="accordionItem open">
                <h2 class="accordionIHeading">Exhibition development</h2>
                <div class="accordionItemContent">
                  <p> Expenses related to the planning, design, fabrication, installation, and promotion of temporary or permanent exhibitions </p>
                </div>
              </div>
              <div class="accordionItem close">
                <h2 class="accordionIHeading">Educational programs</h2>
                <div class="accordionItemContent">
                  <p> Costs associated with developing and delivering educational programs, workshops, lectures, guided tours, and outreach initiatives for visitors, schools, and community groups.</p>
                </div>
              </div>
              <div class="accordionItem close">
                <h2 class="accordionIHeading">Research and development</h2>
                <div class="accordionItemContent">
                  <p>  Investment in research, scholarly activities, collaborations, and innovative projects that contribute to the advancement of knowledge and enhance the museum's offerings. </p>
                </div>
              </div>
              <div class="accordionItem close">
                <h2 class="accordionIHeading">Operations and maintenance</h2>
                <div class="accordionItemContent">
                  <p>his includes expenses for utilities, security systems, building maintenance, insurance, cleaning services, and general upkeep of the museum's facilities. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gallary mtop " id="Gallery">
        <div class="container">
          <div class="heading_top flex1">
            <div class="heading">
              <h5>WELCOME TO OUR PHOTO GALLERY</h5>
              <h2>Photo Gallery of Our Museum</h2>
            </div>
            <div class="button">
              <button class="btn1"><a href="/gallery">VIEW GALLERY</a></button>
            </div>
          </div>

          <div className='carousel_img'>
            <div className='individual_img'>
              <img src={g1} alt="" />
              <p>Ancient Costumes</p>
            </div>
            <div className='individual_img'>
              <img src={g2} alt="" />
              <p>Horology</p>
            </div>
            <div className='individual_img'>
              <img src={g3} alt="" />
              <p>Clay and culture</p>
            </div>
            <div className='individual_img'>
              <img src={g4} alt="" />
              <p>Pre-historic archeology</p>
            </div>
          </div>

        </div>
      </section>

      <section class="map top">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14131.036667732067!2d85.32395955!3d27.69383745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1637755481449!5m2!1sen!2snp" width="600" height="450"
          allowfullscreen="" loading="lazy"></iframe>
      </section>


      <footer>
        <div class="container grid top">
          <div class="box">
            <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/48/000000/external-hotel-hotel-services-and-city-elements-flatart-icons-flat-flatarticons-1.png" />
            <p>Accepted payment methods</p>
            <div class="payment grid">
              <img src="https://img.icons8.com/color/48/000000/visa.png" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" />
              <img src="https://img.icons8.com/color-glass/48/000000/paypal.png" />
              <img src="https://img.icons8.com/fluency/48/000000/paytm.png" />
            </div>
          </div>

          <div class="box">
            <h3>Recent News</h3>

            <ul>
              <li>Exclusive Museum Experience</li>
              <li>Unveiling Ancient Artifacts</li>
              <li>Cultural Exchange Program</li>
              <li>Art Talks and Workshops</li>
              <li>Virtual Museum Experience</li>
            </ul>
          </div>

          <div class="box">
            <h3>For Customers</h3>
            <ul>
              <li>About Museum</li>
              <li>Customer Care/Help</li>
              <li>Corporate Accounts</li>
              <li>Financial Information</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div class="box">
            <h3>Contact Us</h3>

            <ul>
              <li>678 Grand Ave, Cocount Grove, Merrick Way FL 123456</li>
              <li><i class="far fa-envelope"></i> demoexample@gmail.com </li>
              <li><i class="far fa-phone-alt"></i> 123 456 7898 </li>
              <li><i class="far fa-phone-alt"></i> 123 456 7898 </li>
              <li><i class="far fa-comments"></i> 24/ 7 Customer Services </li>
            </ul>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Home