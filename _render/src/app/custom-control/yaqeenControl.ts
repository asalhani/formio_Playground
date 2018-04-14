import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';
import * as _ from "lodash";

import { FormioOptions } from 'angular-formio';

export class YaqeenControlComponent extends BaseComponent {
    [x: string]: any;
    constructor(component, options, data) {
        super(component, options, data);
    }
    elementInfo() {
        // this.validators.push('email');

        // tslint:disable-next-line:prefer-const
        const info = super.elementInfo();
        info.type = 'input';
        info.changeEvent = 'change';
        // info.attr.type = 'hidden';
        return info;
        // debugger


        // info.attr.placeholder = "cccccc";
        //let test = info.component.validations;
        //info.template = FormioUtils.interpolate("<h1>test</h2>")
        // read proparty from JSON
        // info.attr.spellcheck = this.component.spellcheck;


    }

    get idTypes() {
        if (this._idTypes)
            return this._idTypes;

        this._idTypes = [
            { value: 0, label: _.get(this.component, 'fields.idType.placeholder', '') },
            { value: 1, label: this.t('nin') },
            { value: 2, label: this.t('iqama') },
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

        // const input = this.ce(this.info.type, this.info.attr);
        //this.addInput(input, inputGroup);
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
            // self.dayInput.max = new Date(self.yearInput.value, this.value, 0).getDate();
            // if (self.dayInput.value > self.dayInput.max) {
            //     self.dayInput.value = self.dayInput.max;
            // }
            console.log("id type changed");
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
            class: _.get(this.component, 'fields.day.required', false) ? 'field-required' : ''
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
        this.hook('input', this.dayInput, dayInputWrapper);
        this.addEventListener(this.dayInput, 'change', () => this.updateValue());
        dayInputWrapper.appendChild(this.dayInput);
        this.setSubinputStyle(dayInputWrapper);
        dayColumn.appendChild(dayInputWrapper);

        //if (subinputAtTheBottom) {
        dayColumn.appendChild(dayLabel);
        //     }

        return dayColumn;
    }

    setSubinputStyle(input) {
        const { inputsLabelPosition } = this.component;

        if (['left', 'right'].includes(inputsLabelPosition)) {
            input.style.width = '67%';

            if (inputsLabelPosition === 'left') {
                input.style.marginLeft = '33%';
            }
            else {
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


