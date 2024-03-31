/*
 * File: index.js
 * Project: CounterText
 * File Created: Sunday, 31st March 2024 12:11:59 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 6:39:29 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"


export default class CounterText extends ExtendedHTMLElement {


    count = 0

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        // static HTML
        this.shadow.innerHTML=`<link rel="stylesheet" href="Counter/CounterText/style.css?test" />`
        this.render()
    }

    updateComponent() {
        this.count = this.onload().count
        this.render()
    }


    connectedCallback() {
        this.updateComponent()
    }

    static get observedAttributes() {
        return ["key"];
    }

    attributeChangedCallback() {
        this.updateComponent()
    }


    render() {
        super.render(`<div>Count: ${this.count}</div>`)
    }

}


customElements.define("counter-text", CounterText)