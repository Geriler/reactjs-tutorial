import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import network from '../assets/network.jpg';
import code from '../assets/code.jpg';
import desktop from '../assets/desktop.jpg';

class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className={"d-block w-100"}
              src={network}
              alt={"Network"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={"d-block w-100"}
              src={code}
              alt={"Code"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={"d-block w-100"}
              src={desktop}
              alt={"Desktop"}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselBox;