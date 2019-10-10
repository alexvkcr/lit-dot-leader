// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class LitDotLeader extends LitElement {

  render(){
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('lit-dot-leader', LitDotLeader);