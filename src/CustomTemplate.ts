import { LitElement, html, property } from 'lit-element';
import { TemplateHelper } from './TemplateHelper';
TemplateHelper.setBindingSyntax(`~~`, `~~`);

export class CustomTemplate extends LitElement {
  @property({ type: HTMLTemplateElement }) template:
    | HTMLTemplateElement
    | null
    | undefined;

  @property({ type: Array }) items = [
    { text: 'item1', number: 1 },
    { text: 'item2', number: 2 },
    { text: 'item3', number: 3 },
    { text: 'item4', number: 4 },
    { text: 'item5', number: 5 },
    { text: 'item6', number: 6 },
    { text: 'item7', number: 7 },
    { text: 'item8', number: 8 },
    { text: 'item9', number: 9 },
    { text: 'item10', number: 10 },
    { text: 'item11', number: 11 },
    { text: 'item12', number: 12 },
    { text: 'item13', number: 13 },
    { text: 'item14', number: 14 },
    { text: 'item15', number: 15 },
    { text: 'item16', number: 16 },
    { text: 'item17', number: 17 },
    { text: 'item18', number: 18 },
    { text: 'item19', number: 19 },
    { text: 'item20', number: 20 },
    { text: 'item21', number: 21 },
    { text: 'item22', number: 22 },
    { text: 'item23', number: 23 },
    { text: 'item24', number: 24 },
    { text: 'item25', number: 25 },
    { text: 'item26', number: 26 },
    { text: 'item27', number: 27 },
    { text: 'item28', number: 28 },
    { text: 'item29', number: 29 },
    { text: 'item30', number: 30 },
    { text: 'item31', number: 31 },
    { text: 'item32', number: 32 },
    { text: 'item33', number: 33 },
    { text: 'item34', number: 34 },
    { text: 'item35', number: 35 },
    { text: 'item36', number: 36 },
    { text: 'item37', number: 37 },
    { text: 'item38', number: 38 },
    { text: 'item39', number: 39 },
    { text: 'item40', number: 40 },
    { text: 'item41', number: 41 },
    { text: 'item42', number: 42 },
    { text: 'item43', number: 43 },
    { text: 'item44', number: 44 },
    { text: 'item45', number: 45 },
    { text: 'item46', number: 46 },
    { text: 'item47', number: 47 },
    { text: 'item48', number: 48 },
    { text: 'item49', number: 49 },
    { text: 'item50', number: 50 },
    { text: 'item51', number: 51 },
    { text: 'item52', number: 52 },
    { text: 'item53', number: 53 },
    { text: 'item54', number: 54 },
    { text: 'item55', number: 55 },
    { text: 'item56', number: 56 },
    { text: 'item57', number: 57 },
    { text: 'item58', number: 58 },
    { text: 'item59', number: 59 },
    { text: 'item60', number: 60 },
    { text: 'item61', number: 61 },
    { text: 'item62', number: 62 },
    { text: 'item63', number: 63 },
    { text: 'item64', number: 64 },
    { text: 'item65', number: 65 },
    { text: 'item66', number: 66 },
    { text: 'item67', number: 67 },
    { text: 'item68', number: 68 },
    { text: 'item69', number: 69 },
    { text: 'item70', number: 70 },
    { text: 'item71', number: 71 },
    { text: 'item72', number: 72 },
    { text: 'item73', number: 73 },
    { text: 'item74', number: 74 },
    { text: 'item75', number: 75 },
    { text: 'item76', number: 76 },
    { text: 'item77', number: 77 },
    { text: 'item78', number: 78 },
    { text: 'item79', number: 79 },
    { text: 'item80', number: 80 },
    { text: 'item81', number: 81 },
    { text: 'item82', number: 82 },
    { text: 'item83', number: 83 },
    { text: 'item84', number: 84 },
    { text: 'item85', number: 85 },
    { text: 'item86', number: 86 },
    { text: 'item87', number: 87 },
    { text: 'item88', number: 88 },
    { text: 'item89', number: 89 },
    { text: 'item90', number: 90 },
    { text: 'item91', number: 91 },
    { text: 'item92', number: 92 },
    { text: 'item93', number: 93 },
    { text: 'item94', number: 94 },
    { text: 'item95', number: 95 },
    { text: 'item96', number: 96 },
    { text: 'item97', number: 97 },
    { text: 'item98', number: 98 },
    { text: 'item99', number: 99 },
    { text: 'item100', number: 100 },
  ];

  @property() _template: HTMLTemplateElement | null;

  private _slotchange() {
    this._template = this.querySelector(`template`);
  }

  render() {
    if (this._template) {
      this.items.map(item => {
        if (this._template) {
          TemplateHelper.renderTemplate(
            this.renderRoot as any,
            this._template,
            item
          );
        }
      });
    }

    return html` <slot @slotchange="${this._slotchange}"></slot> `;
  }
}
