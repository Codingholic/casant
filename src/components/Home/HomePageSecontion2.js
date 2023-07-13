import React from "react"
import "./HomePageSecontion2.css"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import image2 from "../Navbar/logo/event deco.JPG"
import image3 from "../Navbar/logo/Sheryl-Crow-Elmo.jpg"
import image4 from "../Navbar/logo/licensing.jpg"
import image5 from "../Navbar/logo/food.jpg"
import image6 from "../Navbar/logo/floral.webp"
import image7 from "../Navbar/logo/Customer_serv-ice_hospitality.jpg"
import image8 from "../Navbar/logo/lights.JPG"
import image9 from "../Navbar/logo/novelty.jpg"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

const HomePageSecontion2 = () => {
    return <div className="HomePageSecontion2">
        <div className="card_container_1">
            <div className="service_cards">
                <div className="card_image">
                    <img src={image2} alt="audio" />
                </div>
                <h5>Decor & Props</h5>
                <div className="para_button_container">
                    <p>Custom designed sets that are tailor-made to suit your requirement...</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>
            <div className="service_cards">
                <div className="card_image">
                    <img src={image3} alt="audio" />
                </div>
                <h5>Artists & Performers</h5>
                <div className="para_button_container">
                    <p>Speciality acts to add a level of glamour to your event....</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>
            <div className="service_cards">
                <div className="card_image">
                    <img src={image4} alt="audio" />
                </div>
                <h5>Event permissions & licensing</h5>
                <div className="para_button_container">
                    <p>From music permissions to fire safety, we know what your event needs, and get it...</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>

            <div className="service_cards">
                <div className="card_image">
                    <img src={image5} alt="audio" />
                </div>
                <h5>Food & Beverage</h5>
                <div className="para_button_container">
                    <p>Menu planners that cater to wide range of cuisines and dishes....</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>
        </div>
        <div className="card_container_2">
            <div className="service_cards">
                <div className="card_image">
                    <img src={image6} alt="audio" />
                </div>
                <h5>Floral Arrangements</h5>
                <div className="para_button_container">
                    <p>Arrangements ranging from grand table pieces to entire floral wall coverings...</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>
            <div className="service_cards">
                <div className="card_image">
                    <img src={image7} alt="audio" />
                </div>
                <h5>Hospitality Services</h5>
                <div className="para_button_container">
                    <p>We reflect your intentions towards attendees by making sure they have a good time...</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>
            <div className="service_cards">
                <div className="card_image">
                    <img src={image8} alt="audio" />
                </div>
                <h5>Lighting design</h5>
                <div className="para_button_container">
                    <p>Lighting solutions designed to brings the glitz in the moment...</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>
            <div className="service_cards">
                <div className="card_image">
                    <img src={image9} alt="audio" />
                </div>
                <h5>Merchandise & Memorabilia</h5>
                <div className="para_button_container">
                    <p>Novelty concepts and creations for the most discerning event planners...</p>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </div>
                <div className="know_more_Button">
                    <button className="button-7">know more</button>
                </div>
            </div>


        </div>
    </div>


}

export default HomePageSecontion2