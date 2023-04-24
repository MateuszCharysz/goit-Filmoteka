import { openModal } from './js/modal/openModal';
import { movieBox } from './js/gallery/galleryVariables';
import './js/localStorage/loadLocal';
import './sass/main.scss';

movieBox.addEventListener('click', openModal);
