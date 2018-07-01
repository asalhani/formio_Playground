// import { Formio } from 'formiojs';
import BaseComponent from 'formiojs/components/base/Base';
import * as _ from 'lodash';
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
                    type: 'select',
                    placeholder: '',
                    required: true
                },
                date: {
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
        // info.type = 'input';
        // info.attr.type = 'hidden';
        // info.changeEvent = 'change';
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


    setHTML() {
        this.element.innerHTML = this.interpolate(this.component.html);
    }

    build() {
        this.element = this.ce('div', {
            id: this.id,
            class: `form-group ${this.component.customClass}`
        });

        this.element.component = this;

        if (this.options.builder) {
            const editorElement = this.ce('div');
            this.addQuill(editorElement, this.wysiwygDefault, (element) => {
                this.component.html = element.value;
            }).then((editor) => {
                editor.setContents(editor.clipboard.convert(this.component.html));
            });
            this.element.appendChild(editorElement);
        }
        else {
            this.setHTML();
        }

        if (this.component.refreshOnChange) {
            this.on('change', () => this.setHTML());
        }
    }

    get emptyValue() {
        return '';
    }
}


