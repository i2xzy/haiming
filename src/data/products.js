import images from '../img';
import { reject } from 'lodash';

export default [
  {
    slug: 'stone',
    name: 'Stone',
    chineseName: '石',
    image: images.stone[2],
    isCentered: true,
    imagePosition: 'top',
    colour: 'black',
    description:
      'This project is to express the feelings of nature, combined with modern material of carbon fiber to re-design the original seat.',
    details: {
      material: 'Carbon Fiber',
      size: 'L680 X W480 X H480 mm'
    },
    additionalImages: reject(images.stone, (_, i) => i === 2)
  },
  {
    slug: 'armour-chair',
    name: 'Armour Chair',
    chineseName: '薄膜椅',
    image: images.armour[0],
    imagePosition: 'center',
    namePosition: 'flex-start',
    isCentered: false,
    colour: 'black',
    description:
      'This project is to express the traditional Chinese handcraft. It mainly shows the different knitting methods and the level of the line.',
    details: {
      material: 'Carbon Fiber',
      size: 'L680 X W480 X H480mm'
    },
    additionalImages: reject(images.armour, (_, i) => i === 0)
  },
  {
    slug: 'ming-chair-pink',
    name: 'Ming Chair',
    chineseName: '明式家具',
    image: images.mingPink[1],
    isCentered: true,
    colour: 'pink',
    description:
      'This project is to satirize the traditional culture of China. Chinese society should eliminate the discrimination against women.',
    details: {
      material: 'Wood/Leather/Rivet',
      size: 'L555 X W435 X H1200mm'
    },
    additionalImages: reject(images.mingPink, (_, i) => i === 1)
  },
  {
    slug: 'ming-chair-black',
    name: 'Ming Chair',
    chineseName: '明式家具',
    image: images.mingBlack[2],
    imagePosition: 'center',
    namePosition: 'flex-start',
    isCentered: false,
    colour: 'black',
    description:
      'This project is to satirize the traditional culture of China. Chinese society should eliminate the discrimination against women.',
    details: {
      material: 'Wood/Leather/Rivet',
      size: 'L555 X W435 X H1200mm'
    },
    additionalImages: reject(images.mingBlack, (_, i) => i === 2)
  },
  {
    slug: 'sunset',
    name: 'Sunset ',
    chineseName: '余晖灯',
    image: images.sunset[0],
    isCentered: true,
    colour: 'black/white',
    description:
      'This project is to record the beautiful scene which is the moment when the setting sun is about to touch the sea.',
    details: {
      material: 'Wood/Leather/Rivet',
      size: 'L555 X W435 X H1200mm'
    },
    additionalImages: []
  }
];
