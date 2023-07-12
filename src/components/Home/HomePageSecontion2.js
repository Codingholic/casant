import React from "react"
import "./HomePageSecontion2.css"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import image2 from "../Navbar/logo/event deco.JPG"
import image3 from "../Navbar/logo/Sheryl-Crow-Elmo.jpg"
import image4 from "../Navbar/logo/licensing.jpg"
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
                    <img src={image4} alt="audio" />
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

        </div>
        <div className="card_container_2">
            


        </div>
    </div>


}

export default HomePageSecontion2