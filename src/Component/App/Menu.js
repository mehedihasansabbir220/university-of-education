import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import images1 from '../../image/03.12.19_omc10267_hannah_nguyen_24_copy.jpg';
import images2 from '../../image/Optimized-happy-graduates.jpg';


export default function App() {
    return (
        <div style={{ display: 'block', width: "auto", padding: 30 }}>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={images1}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <p> the best learning Instuition </p>
                        <h3>WELLCAME TO OUR UNIVERSITY </h3>
                        <p>We Belive there is  nothing More important than education
                        </p>
                        <button className='btn btn-primary'> Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={images2}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <p> Opening A new World of education  </p>
                        <h3>LARGEST EDUCATION INSTUITIE </h3>
                        <p>We Belive there is  nothing More important than education
                        </p>
                        <button className='btn btn-primary'> Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}