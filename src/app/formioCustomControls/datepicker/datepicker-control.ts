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
            input: false,
            html: ''
        }, ...extend);
    }

    static get builderInfo() {
        return {
            title: 'Content',
            group: 'basic',
            icon: 'fa fa-html5',
            documentation: 'http://help.form.io/userguide/#content-component',
            weight: 100,
            schema: DatepickerControlComponent.schema()
        };
    }

    get defaultSchema() {
        return DatepickerControlComponent.schema();
    }

    setHTML() {
        this.element.innerHTML = this.interpolate(this.component.html);
    }

    build() {
        debugger
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


