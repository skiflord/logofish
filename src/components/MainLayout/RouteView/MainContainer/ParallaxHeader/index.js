import React from 'react';
import { Parallax } from 'react-parallax';
import { Image } from 'semantic-ui-react'

import image from '../../../../../img/background2.jpg'
import marlintuna from '../../../../../img/marlintuna.png'
import logo from '../../../../../img/logo.PNG'

import './index.css'

const ParallaxHeader = () => (
  <div>
    <Parallax
        blur={5}
        bgImage={image}
        bgImageAlt='background'
        strength={200}
    >
      <div className='innerBlockInLayerOne'>
        <Parallax
        bgImage={marlintuna}
        bgImageAlt='marlituna'
        strength={250}
        >
          <Image src={logo} centered  size='small' className='imageBlockLogo'/>>
          <div className='innerBlockInLayerTwo'/>>
        </Parallax>
      </div>
    </Parallax>
  </div>
);
export default ParallaxHeader