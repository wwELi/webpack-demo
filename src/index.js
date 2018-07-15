import Action from './a';
import { join } from 'lodash'

const action = new Action();
const say = action.say;
btnId.onclick = function() {
    const promise = import(
        /* webpackChunkName: "dynamic" */
        /* webpackMode: "lazy" */
        './dynamic');

    promise.then(module => {
        const result = module.default(12, 22);
        console.log(result);
    });
    console.log(join(['aaa', 'bbb'], '-'));
};

btnTwo.onclick = function() {
    const promise = import(
        /* webpackChunkName: "dynamic" */
        /* webpackMode: "lazy" */
        './dynamic');

    promise.then(module => {
        const result = module.default(12, 22);
        console.log(result);
    });
}