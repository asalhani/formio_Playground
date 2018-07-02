// import { Formio } from 'formiojs';
import BaseComponent from 'formiojs/components/base/Base';
import * as _ from 'lodash';
declare var $: any;

import { DatepickerConst } from './const';


export class DatepickerControlComponent extends BaseComponent {
    [x: string]: any;

    static schema(...extend) {
        return BaseComponent.schema({
            type: 'datepickerControl',
            key: 'datepickerControl',
            input: true,
            label: 'select date',
            fields: {
                calendarType: {
                    label: 'Calendar Type',
                    type: 'select',
                    placeholder: '',
                    required: true
                },
                date: {
                    label: 'dsfds',
                    type: 'textfield',
                    placeholder: '',
                    required: true
                }
            }
        }, ...extend);
    }

    onstructor(component, options, data) {
        // push any validations required
    }

    static get builderInfo() {
        return {
            title: 'Datepicker',
            group: 'basic',
            icon: 'fa fa-html5',
            documentation: '',
            weight: 100,
            schema: DatepickerControlComponent.schema()
        };
    }

    // implement it if you want to access the underlying element where component will be hosted.
    elementInfo() {
        const info = super.elementInfo();
        info.type = 'input';
        info.attr.type = 'hidden';
        info.changeEvent = 'change';
        return info;
    }

    get defaultSchema() {
        return DatepickerControlComponent.schema();
    }

    get calendarTypes() {
        if (this._calendarTypes) {
            return this._calendarTypes;
        }

        this._calendarTypes = [
            { value: 'Gregorian', label: 'Gregorian' },
            { value: 'UmmAlqurra', label: 'UmmAlqurra' }
        ];
        return this._calendarTypes;
    }

    createInput(container) {

        // create div container
        const inputGroup = this.ce('div', {
            class: 'input-group row',
            style: 'width: 100%'
        });

        // build component controls (calendar type, date textbox)
        const subinputAtTheBottom = this.component.inputsLabelPosition === 'bottom';
        const [calendarTypeColumn, dateInputColumn] = this.createInputs(subinputAtTheBottom);

        // Add the columns to the UI in the right order.
        // if (this.dayFirst && this.showDay) {
        //     inputGroup.appendChild(dayColumn);
        //   }
        //   if (this.showMonth) {
        //     inputGroup.appendChild(monthColumn);
        //   }
        //   if (!this.dayFirst && this.showDay) {
        //     inputGroup.appendChild(dayColumn);
        //   }
        //   if (this.showYear) {
        //     inputGroup.appendChild(yearColumn);
        //   }

        inputGroup.appendChild(calendarTypeColumn);
        inputGroup.appendChild(dateInputColumn);

        const input = this.ce(this.info.type, this.info.attr);
        this.addInput(input, inputGroup);
        this.errorContainer = container;
        this.setInputStyles(inputGroup);
        container.appendChild(inputGroup);

    }

    createInputs(subinputAtTheBottom) {
        return [
            this.createCalendarTypeInput(subinputAtTheBottom),
            this.createDateInput(subinputAtTheBottom),
        ];
    }

    createCalendarTypeInput(subinputAtTheBottom) {
        const calendarTypeColumn = this.ce('div', {
            class: 'form-group col col-xs-6'
        });

        const id = `${this.component.key}-calendarType`;

        const calendarTypeLabel = !this.hideInputLabels
            ? this.ce('label', {
                for: id,
                class: _.get(this.component, 'fields.calendarType.required', false) ? 'field-required' : ''
            })
            : null;

        if (calendarTypeLabel) {
            calendarTypeLabel.appendChild(this.text(_.get(this.component, 'fields.calendarType.label', '')));
            this.setSubinputLabelStyle(calendarTypeLabel);
        }

        if (calendarTypeLabel && !subinputAtTheBottom) {
            calendarTypeColumn.appendChild(calendarTypeLabel);
        }

        const calendarTypeInputWrapper = this.ce('div');
        this.calendarTypeInput = this.ce('select', {
            class: 'form-control',
            id
        });
        this.hook('input', this.calendarTypeInput, calendarTypeInputWrapper);
        this.selectOptions(this.calendarTypeInput, 'calendarTypeOption', this.calendarTypes);
        const self = this;

        // add event when selected type changed
        this.calendarTypeInput.onchange = function () {
            console.log(self.dateInput);
        };

        calendarTypeInputWrapper.appendChild(this.calendarTypeInput);
        this.setSubinputStyle(calendarTypeInputWrapper);
        calendarTypeColumn.appendChild(calendarTypeInputWrapper);

        if (calendarTypeLabel && subinputAtTheBottom) {
            calendarTypeColumn.appendChild(calendarTypeLabel);
        }

        return calendarTypeColumn;
    }

    createDateInput(subinputAtTheBottom) {
        const dateColumn = this.ce('div', {
            class: 'form-group col col-xs-3'
        });

        const id = `${this.component.key}-date`;

        const dateLabel = !this.hideInputLabels
            ? this.ce('label', {
                for: id,
                class: _.get(this.component, 'fields.date.required', false) ? 'field-required' : ''
            })
            : null;

        if (dateLabel) {
            dateLabel.appendChild(this.text('Date'));
            this.setSubinputLabelStyle(dateLabel);
        }

        if (dateLabel && !subinputAtTheBottom) {
            dateColumn.appendChild(dateLabel);
        }

        const dateInputWrapper = this.ce('div');

        this.dateInput = this.ce('input', {
            class: 'form-control',
            type: 'text',
            placeholder: _.get(this.component, 'fields.date.placeholder') || (this.hideInputLabels ? this.t('Day') : ''),
            id
        });
        this.hook('input', this.dateInput, dateInputWrapper);
        this.addEventListener(this.dateInput, 'change', () => this.updateValue());

        this.createCalendar(this.dateInput, this.getCalendarConfig('UmmAlQura', 'en'));

        dateInputWrapper.appendChild(this.dateInput);
        this.setSubinputStyle(dateInputWrapper);
        dateColumn.appendChild(dateInputWrapper);

        if (dateLabel && subinputAtTheBottom) {
            dateColumn.appendChild(dateLabel);
        }

        return dateColumn;
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

    getCalendarConfig(calendarType, lang) {
        // for complete configuarion options, visit: http://keith-wood.name/calendarsPicker.html
        
        lang = 'en';

        return {
            calendar: $.calendars.instance(calendarType, lang),
            firstDay: 0, // 0 = sunday, 1 = monday, ....
            dateFormat: 'dd/mm/yyyy',
            rangeSelect: true,
            monthsToShow: 1,
            onSelect: date => {
                console.log(date);
            },
            onClose: () => {
                console.log("closed");
            }
        };
    }

    createCalendar(input, config) {
        $(input).calendarsPicker('destroy');
        $(input).calendarsPicker('clear');

        $(input).calendarsPicker(config);
    }

    get emptyValue() {
        return '';
    }
}


