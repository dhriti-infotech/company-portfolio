import * as React from 'react';
import outsourcing from "../assets/Servicesimages/outsourcing.jpg";
import aop from "../assets/Servicesimages/aop.jpg";
import iot from "../assets/Servicesimages/iot-solutions.jpg";
import hr from "../assets/Servicesimages/hr.jpg";
import mobileapp from "../assets/Servicesimages/mobile-app.jpg";
import web from "../assets/Servicesimages/web-portals-types.webp";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Services() {
  return (
    <AutoplaySlider
      animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      bullets={false}
      organicArrows={false}
      style={{height:"72%"}}
    >
      <div data-src={outsourcing} style={{height:"100%"}} />
      <div data-src={iot} />
      <div data-src={web} />
      <div data-src={aop} />
      <div data-src={mobileapp} />
      <div data-src={hr} />
    </AutoplaySlider>
  );
}
