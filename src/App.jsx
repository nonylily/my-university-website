import { useState } from 'react'
import './index.css';
import logo from './assets/logo.png'
import london from './assets/london.png'
import newyork from './assets/newyork.png'
import washington from './assets/washington.png'
import basketball from './assets/basketball.png'
import library from './assets/library.png'
import cafeteria from './assets/cafeteria.png'
import user2 from './assets/user2.jpg'
import user1 from './assets/user1.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <section className="header">
        <nav>
          <a href="/">
            <img src={logo} alt="University Logo" />
          </a>

          <div
            className="nav-links"
            id="navLinks"
            style={{ right: menuOpen ? '0' : '-200px' }}
          >
            <i
              className="fa fa-times"
              onClick={() => setMenuOpen(false)}
            ></i>

            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#course">COURSE</a></li>
              <li><a href="#blog">BLOG</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          <i
            className="fa fa-bars"
            onClick={() => setMenuOpen(true)}
          ></i>
        </nav>

        <div className="text-box" id="home">
          <h1>World Biggest University</h1>

          <p>
            Making website is now one of the easiest things in the world.
            You just need to learn HTML, CSS, JavaScript and you are good to go.
          </p>

          <a href="#course" className="hero-btn">
            Visit us to know More
          </a>
        </div>
      </section>

      {/* Courses */}
      <section className="course" id="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo.
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo.
            </p>
          </div>

          <div className="course-col">
            <h3>Graduation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo.
            </p>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="Campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="row">
          <div className="campus-col">
            <img src={london} alt="London Campus" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src={newyork} alt="New York Campus" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src={washington} alt="Washington Campus" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <h1>OUR FACILITIES</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="row">
          <div className="facilities-col">
            <img src={library} alt="Library" />
            <h3>World Class Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.
            </p>
          </div>

          <div className="facilities-col">
            <img src={basketball} alt="Basketball court" />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.
            </p>
          </div>

          <div className="facilities-col">
            <img src={cafeteria} alt="Cafeteria" />
            <h3>Tasty and Healthy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testiomnials">
        <h1>What Our Students Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>

        <div className="row">
          <div className="testiomnials-col">
           <img src={user1} alt="Christine Berkley" />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, debitis quam? Ipsam, aliquam natus tempore officiis
                voluptatibus dolores similique tenetur.
              </p>

              <h3>Christine Berkley</h3>

              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>

          <div className="testiomnials-col">
           <img src={user2} alt="David Byer" />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, debitis quam? Ipsam, aliquam natus tempore officiis
                voluptatibus dolores similique tenetur.
              </p>

              <h3>David Byer</h3>

              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero">
        <h1>
          Enroll For Various Online Courses
          <br />
          Anywhere From The World
        </h1>

        <a href="#contact" className="hero-btn">
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <section className="footer" id="contact">
        <h4>ABOUT US</h4>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum
          esse consequatur, cumque culpa deserunt exercitationem, suscipit
          corporis maiores aliquam nulla eligendi maxime neque facere eos
          atque saepe illum.
        </p>

        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>

        <p>
          designed by <i className="fa-solid fa-heart"></i> CHINONYE LILIAN ONYEULOR
        </p>
      </section>
    </>
  )
}

export default App
