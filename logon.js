
import sing from './src/common';
import { join } from 'lodash';

const logonBrn = document.querySelector('#logonBtn');

if (logonBrn) {
    logonBrn.onclick = function() {
        sing.tell();
        console.log(join(['cc', 'dd'], '*'));
        window.location = window.location.origin + '/test.html'
    }
}
