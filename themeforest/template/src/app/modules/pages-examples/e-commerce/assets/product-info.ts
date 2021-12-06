import { environment } from '../../../../../environments/environment';

export interface ProductInfo {
  src;
  title;
  price;
  description;
  colors: string[];
  conditionState?;
  oldPrice?;
}

export const catalogProducts: ProductInfo[] = [
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/25.png`,
    title: 'Blue Vase',
    price: '12',
    description: 'Awesome item from Glassy brand',
    colors: ['#00b3c6', '#50e3c2', '#fa4a86'],
    conditionState: 'new',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/26.png`,
    title: 'Pink Vase',
    price: '17',
    description: 'Awesome item from Glassy brand',
    colors: ['#d4d4d4', '#5ff4d3', '#f7a9c4'],
    conditionState: 'new',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/27.png`,
    title: 'Bulldog Pillow',
    price: '17',
    description: 'Awesome item from Glassy brand',
    colors: ['#fa93bd'],
    conditionState: 'sale',
    oldPrice: '23',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/28.png`,
    title: 'Yellow Pillow',
    price: '16',
    description: 'Awesome item from Glassy brand',
    colors: ['#c6890a', '#faee5a'],
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/27.png`,
    title: 'Bulldog Pillow',
    price: '17',
    description: 'Awesome item from Glassy brand',
    colors: ['#fa93bd'],
    conditionState: 'sale',
    oldPrice: '23',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/28.png`,
    title: 'Yellow Pillow',
    price: '16',
    description: 'Awesome item from Glassy brand',
    colors: ['#c6890a', '#faee5a'],
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/25.png`,
    title: 'Blue Vase',
    price: '120',
    description: 'Awesome item from Glassy brand',
    colors: ['#00b3c6', '#50e3c2', '#fa4a86'],
    conditionState: 'new',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/26.png`,
    title: 'Pink Vase',
    price: '17',
    description: 'Awesome item from Glassy brand',
    colors: ['#d4d4d4', '#5ff4d3', '#f7a9c4'],
    conditionState: 'new',
  },
];

export const shortSetProducts: ProductInfo[] = [
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/25.png`,
    title: 'Blue Vase',
    price: '12',
    description: 'Awesome item from Glassy brand',
    colors: ['#00b3c6', '#50e3c2', '#fa4a86'],
    conditionState: 'new',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/26.png`,
    title: 'Pink Vase',
    price: '17',
    description: 'Awesome item from Glassy brand',
    colors: ['#d4d4d4', '#5ff4d3', '#f7a9c4'],
    conditionState: 'new',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/27.png`,
    title: 'Bulldog Pillow',
    price: '17',
    description: 'Awesome item from Glassy brand',
    colors: ['#fa93bd'],
    conditionState: 'sale',
    oldPrice: '23',
  },
  {
    src: `${environment.deployAssetsPath}/assets/images/for_store/catalog/28.png`,
    title: 'Yellow Pillow',
    price: '16',
    description: 'Awesome item from Glassy brand',
    colors: ['#c6890a', '#faee5a'],
  },
];
