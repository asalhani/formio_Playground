import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';
import { Validator } from 'formiojs/lib/components/Validator';
import * as _ from 'lodash';

import { FormioOptions } from 'angular-formio';
import { IdentityType } from './const';

export class YaqeenObject {
    idType: number;
    idNumber: string;
}

// Register a custom validor to use card validition from Stripe
if (typeof Validator.validators.yaqeenValidateor === 'undefined') {
    Validator.validators.yaqeenValidateor = {
        key: 'validate.yaqeenValidateor',
        message(component) {
            let stripeMessage = '';
            if (component.lastResult && component.lastResult.error) {
                stripeMessage = 'error message wsp';//component.lastResult.error.message;
            }
            return component.t(component.errorMessage('yaqeenValidateor'), {
                field: component.errorLabel,
                stripe: stripeMessage,
                stripeError: component.lastResult.error,
                data: component.data
            });
        },
        check(component, setting, value) {
            return true;
        }
    };
}

export class YaqeenControlComponent extends BaseComponent {
    [x: string]: any;
    constructor(component, options, data) {
        super(component, options, data);
        this.validators.push('yaqeenValidateor');
    }
    elementInfo() {

        // this.validators.push('my_validateor');
        // this.validators.push('email');
        // let test = Validator.validators;

        // tslint:disable-next-line:prefer-const
        const info = super.elementInfo();
        info.type = 'input';
        info.changeEvent = 'change';
        return info;
        // debugger

    }

    get yaqeenObj() {
        const idType = this.monthInput.value;
        const idNumber = this.dayInput.value;
        const y: YaqeenObject = {
            idNumber: idNumber,
            idType: idType
        };
        return JSON.stringify(y);
    }

    setValueAt(index, value) {
        if (!value) {
            return;
        }
        this.monthInput.value = value.idType;
        this.dayInput.value = value.idNumber;
        // return value;
    }

    // get validationValue() {
    //     debugger
    //     Validator.validators.myValidateor.check();
    //     return this.yaqeenObj;
    // }

    getValueAt(index) {
        this.inputs[index].value = this.yaqeenObj;
        return this.inputs[index].value;
    }

    getView() {
        return this.yaqeenObj ? this.yaqeenObj : null;
    }

    get idTypes() {
        if (this._idTypes) {
            return this._idTypes;
        }

        this._idTypes = [
            { value: 0, label: _.get(this.component, 'fields.idType.placeholder', '') },
            { value: IdentityType.Nin, label: this.t('nin') },
            { value: IdentityType.Iqama, label: this.t('iqama') },
        ];

        return this._idTypes;
    }

    createInput(container) {
        const inputGroup = this.ce('div', {
            class: 'input-group row',
            style: 'width: 100%'
        });

        const [idTypeColumn, idNumberColumn] = this.createInputs();

        inputGroup.appendChild(idTypeColumn);
        inputGroup.appendChild(idNumberColumn);

        const input = this.ce(this.info.type, this.info.attr);
        this.addInput(input, inputGroup);
        this.errorContainer = container;
        this.setInputStyles(inputGroup);
        container.appendChild(inputGroup);
    }

    createInputs() {
        return [
            this.createIdTypesInput(),
            this.createIdNumberInput()
        ];
    }
    createIdTypesInput() {

        const monthColumn = this.ce('div', {
            class: 'form-group col col-xs-4'
        });

        const id = `${this.component.key}-month`;
        const monthLabel = this.ce('label', {
            for: id,
            class: _.get(this.component, 'fields.idType.required', false) ? 'field-required' : ''
        });
        monthLabel.appendChild(this.text(_.get(this.component, 'fields.idType.label', '')));
        this.setSubinputLabelStyle(monthLabel);
        monthColumn.appendChild(monthLabel);


        const monthInputWrapper = this.ce('div');
        this.monthInput = this.ce('select', {
            class: 'form-control',
            id
        });
        this.hook('input', this.monthInput, monthInputWrapper);
        this.selectOptions(this.monthInput, 'monthOption', this.idTypes);
        const self = this;

        // Ensure the day limits match up with the months selected.
        this.monthInput.onchange = function () {

            // set disbled attr. to false
            self.setDisabled(self.dayInput, +this.value > 0 ? false : true);

            console.log('id type changed --> ', this.value);
            // self.dayInput.max = new Date(self.yearInput.value, this.value, 0).getDate();
            // if (self.dayInput.value > self.dayInput.max) {
            //     self.dayInput.value = self.dayInput.max;
            // }

            self.updateValue();
        };

        monthInputWrapper.appendChild(this.monthInput);
        this.setSubinputStyle(monthInputWrapper);
        monthColumn.appendChild(monthInputWrapper);

        return monthColumn;
    }

    createIdNumberInput() {
        const dayColumn = this.ce('div', {
            class: 'form-group col col-xs-3'
        });

        const id = `${this.component.key}-day`;

        const dayLabel = this.ce('label', {
            for: id,
            class: _.get(this.component, 'fields.idNumber.required', false) ? 'field-required' : ''
        });
        dayLabel.appendChild(this.text(_.get(this.component, 'fields.idNumber.label', false)));
        this.setSubinputLabelStyle(dayLabel);
        // if (!subinputAtTheBottom) {
        dayColumn.appendChild(dayLabel);
        // }

        const dayInputWrapper = this.ce('div');
        this.dayInput = this.ce('input', {
            class: 'form-control',
            type: 'text',
            placeholder: _.get(this.component, 'fields.idNumber.placeholder', ''),
            id
        });

        // diabel control initially
        this.setDisabled(this.dayInput, true);

        this.hook('input', this.dayInput, dayInputWrapper);
        this.addEventListener(this.dayInput, 'change', () => this.updateValue());
        dayInputWrapper.appendChild(this.dayInput);
        this.setSubinputStyle(dayInputWrapper);
        dayColumn.appendChild(dayInputWrapper);

        // if (subinputAtTheBottom) {
        // dayColumn.appendChild(dayLabel);
        //     }

        return dayColumn;
    }

    setSubinputStyle(input) {
        const { inputsLabelPosition } = this.component;

        if (['left', 'right'].includes(inputsLabelPosition)) {
            input.style.width = '67%';

            if (inputsLabelPosition === 'left') {
                input.style.marginLeft = '33%';
            } else {
                input.style.marginRight = '33%';
            }
        }
    }

    setSubinputLabelStyle(label) {
        const { inputsLabelPosition } = this.component;

        if (inputsLabelPosition === 'left') {
            _.assign(label.style, {
                float: 'left',
                width: '30%',
                marginRight: '3%',
                textAlign: 'left',
            });
        }

        if (inputsLabelPosition === 'right') {
            _.assign(label.style, {
                float: 'right',
                width: '30%',
                marginLeft: '3%',
                textAlign: 'right',
            });
        }
    }

    // build(){
    //     // debugger;
    //     // super.build();
    //     // let ele = super.renderTemplate("<div id='yaqeenControl'>{{myNmae}}</div>", {myNmae: this.myNmae});
    //     // let element = super.getElement();
    //     // element.appendChild(ele);
    //   }

}


