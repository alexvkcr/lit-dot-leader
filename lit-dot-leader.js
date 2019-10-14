import { LitElement, html, css, unsafeCSS} from 'lit-element';

class LitDotLeader extends LitElement {
  
  static get properties() { return {
    lines: { type: Array },/*This property stores an array that has an entry for each line that you want to have "dot-leader'ed"
                          Every entry will have two values, the text, and the price*/
    separator: {type: String }/*This sets up what will be the character to type in separate the text and price*/
  }}  

  constructor() {
    super();
    this.lines = [{text:'Loren Ipsum',
                  price:'0.00€'}]
    this.separator='.'
  }

  static get styles() {
    return [ css`
    :host{
      --lit-dot-leader-width: 100%;
      --lit-dot-leader-light-padding: 0.33em;
      --lit-dot-leader-background: white;
    }
    ul.leaders {
      max-width: var(--lit-dot-leader-width, 100%);
      padding: 0;
      overflow-x: hidden;
      list-style: none}
  ul.leaders li:after {
      float: left;
      width: 0;
      white-space: nowrap;
      content:
        "................................................................................................................................................................"
        "................................................................................................................................................................"
        "................................................................................................................................................................"
        "................................................................................................................................................................"
      }
  ul.leaders span:first-child {
      padding-right: var(--lit-dot-leader-light-padding, 0.33em);
      background: var(--lit-dot-leader-background, white)}
  ul.leaders span + span {
      float: right;
      padding-left: var(--lit-dot-leader-light-padding, 0.33em);
      background: var(--lit-dot-leader-background, white);
      position: relative;
      z-index: 1}`];
  }

  render(){
    return html`<ul class="leaders">
    ${this.lines.map(i =>
      html`<li>
        <span>${i['text']}</span>
        <span>${i['price']}</span>
      </li>`)}
  </ul>`;
  }
}
// Register the new element with the browser.
customElements.define('lit-dot-leader', LitDotLeader);