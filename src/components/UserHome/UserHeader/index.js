import React from 'react';
import { Parallax } from 'react-parallax';
import { Image } from 'semantic-ui-react'
import image from '../../../img/background2.jpg'
import marlintuna from '../../../img/marlintuna.png'
import logo from '../../../img/logo.PNG'

const HeaderParallax = () => (
    <div>
        <Parallax
            blur={5}
            bgImage={image}
            bgImageAlt='background'
            strength={200}
        >
        <div style={{ height: '400px' }}>
        <Parallax
        bgImage={marlintuna}
        bgImageAlt='marlituna'
        strength={250}
        >
          <Image src={logo} centered  size='small' style={{marginTop: '5%', marginLeft: '3em'}}/>>
          <div style={{ height: '30em' }}/>>
        </Parallax>
        </div>
        </Parallax>

    </div>
);
export default HeaderParallax;