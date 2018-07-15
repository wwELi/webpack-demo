const msg = process.env.NODE_ENV;
import sing from './common';

export default class Action {
    say() {
        sing.tell();
        console.log('----'+ API, msg)
    }
};