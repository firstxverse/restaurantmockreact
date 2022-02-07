import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/assets/images/don.jpg',
    altText: 'Udon',
    caption: 'Udon caption 1',
    header: 'Udon types'
  },
  {
    src: '/assets/images/udon-2.jpg',
    altText: 'Udon 2',
    caption: 'Udon caption 2',
    header: 'Udon header 2'
  },
  {
    src: '/assets/images/udon-3.jpg',
    altText: 'Udon 3',
    caption: 'Udon caption 3',
    header: 'Udon header 3'
  }
];
const Gallery = () => <UncontrolledCarousel items={items} />;

export default Gallery;