import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Design width
// It will be changed on each project
const DW = 375;

// Design height
// It will be changed on each project
const DH = 667;

const vh = height / DH;

const vw = width / DW;

export const sizeWidth = (number) => number * (width < height ? vw : vh);

export const sizeHeight = (number) => number * (width > height ? vw : vh);

export const sizeFont = (number) => number * (width < height ? vw : vh);
