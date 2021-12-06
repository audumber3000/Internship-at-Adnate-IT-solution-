import { environment } from '../../../../../../../environments/environment';

export interface GalleryCard {
  src;
  category;
}

export const gallerySet: GalleryCard[] = [
  { src: `${environment.deployAssetsPath}/assets/images/gallery/01.png`, category: 'sneakers' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/02.png`, category: 'sneakers' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/03.png`, category: 'sneakers' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/04.png`, category: 'cap' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/05.png`, category: 'watch' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/06.png`, category: 'sneakers' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/07.png`, category: 'sneakers' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/08.png`, category: 'sneakers' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/09.png`, category: 'glasses' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/10.png`, category: 'glasses' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/11.png`, category: 'glasses' },
  { src: `${environment.deployAssetsPath}/assets/images/gallery/12.png`, category: 'glasses' },
];
