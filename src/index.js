import jquery from 'jquery';
import _ from 'lodash';
import { loadIlandImage, loadLibraryImage } from "./imageViewer";
import './main.css';


console.log('Welcome from webpack');

function test() {
    return {
        name: "Kawsar Ahmed"
    }
}

console.log(test().name);

const fullName = () => {
    console.log('Kawsar Ahmed');
}

loadIlandImage();
loadLibraryImage();

console.log(jquery, 'jquery');
console.log(_, 'lodash');