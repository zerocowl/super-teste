import { OPTIONS } from './constant'
export default class Night {
    constructor() {
        this._options = OPTIONS
    }

    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value;
    }
}