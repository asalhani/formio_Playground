import { Formio } from 'formiojs';
// import { BaseComponent } from './Base';
// import BaseComponent = require('formiojs/components/base/Base');
import BaseComponent from 'formiojs/components/base/Base';

import * as _ from 'lodash';
import { DatepickerConst } from './const';


export class DatepickerControlComponent extends BaseComponent  {


    constructor(component, options, data) {
        debugger;
        super(component, options, data);
    }

    elementInfo() {
        const info = super.elementInfo();
        info.type = 'input';
        info.attr.type = 'hidden';
        info.changeEvent = 'change';
        return info;
    }

    build() {
        debugger
        super.build();
    }
}


