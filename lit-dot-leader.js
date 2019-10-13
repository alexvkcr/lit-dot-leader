import { LitElement, html } from 'lit-element';

class LitDotLeader extends LitElement {
  static get properties() { return {
    lines: { type: Array },/*This property stores an array that has an entry for each line that you want to have 'dot-leadered'
                          Every entry will have two values, the text, and the price*/
    separator: {type: String }/*This sets up what will be the character to type in separate the text and price*/
  }}

  constructor() {
    super();
    this.lines = [{text:'Loren Ipsum',
                  price:'99€'}];
    this.separator='.'
  }

  render(){
    return html`
      <span>${this.lines[0]['text']}</span>
      ${this.separator.repeat(3)}
      <span>${this.lines[0]['price']}</span>
    `;
  }
}
// Register the new element with the browser.
customElements.define('lit-dot-leader', LitDotLeader);