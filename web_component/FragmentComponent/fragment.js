/*
 * File: index.js
 * Project: FragmentComponent
 * File Created: Sunday, 31st March 2024 5:08:29 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 5:48:52 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */


export default class FragmentComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"}).innerHTML="<slot></slot>"
    }
}

customElements.define("fragment-component", FragmentComponent);