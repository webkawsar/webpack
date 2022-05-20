import iland from './assets/iland.jpg';
import library from './assets/library.jpg';

export const loadIlandImage = () => {
    const ilandImage = document.createElement('img');
    ilandImage.src = iland;
    document.body.appendChild(ilandImage);
}

export const loadLibraryImage = () => {
    const libraryImage = document.createElement('img');
    libraryImage.src = library;
    document.body.appendChild(libraryImage);
}