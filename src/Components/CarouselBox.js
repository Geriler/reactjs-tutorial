import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import network from '../assets/network.jpeg';
import code from '../assets/code.jpg';
import desktop from '../assets/desktop.jpeg';

class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className={"d-block img-fluid"}
              src={network}
              alt={"Network"}
            />
            <Carousel.Caption className={"text-light bg-dark"}>
              <h3>Network image</h3>
              <p>Ubi est emeritis armarium? Fidelis, brevis mortems sed mire gratia de festus, secundus compater.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={"d-block img-fluid"}
              src={code}
              alt={"Code"}
            />
            <Carousel.Caption className={"text-light bg-dark"}>
              <h3>Code image</h3>
              <p>Devirginato, mensa, et decor. Festus, domesticus victrixs sensim demitto de audax, salvus historia.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={"d-block img-fluid"}
              src={desktop}
              alt={"Desktop"}
            />
            <Carousel.Caption className={"text-light bg-dark"}>
              <h3>Desktop image</h3>
              <p>Bursas crescere in talis alta muta! Azureus, castus galataes tandem reperire de camerarius, grandis mensa.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselBox;