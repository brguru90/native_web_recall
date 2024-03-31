/*
 * File: index.js
 * Project: CounterText
 * File Created: Sunday, 31st March 2024 12:11:59 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Monday, 1st April 2024 12:21:43 am
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

import "../../Todo/todo.js"

export default class CounterText extends ExtendedHTMLElement {


    count = 0

    ref={}

    constructor() {
        super()
        // static HTML
        this.shadow.innerHTML=`<link rel="stylesheet" href="Counter/CounterText/style.css?test" />`
        this.shadow.ref=this.ref
        this.render()
    }

    updateComponent() {
        this.count = this.onload().count
        this.render()
    }


    connectedCallback() {
        super.connectedCallback()
        this.updateComponent()
    }

    static get observedAttributes() {
        return ["key"];
    }

    attributeChangedCallback() {
        this.updateComponent()
    }


    render() {
        super.render(`
            <div>Count: ${this.count}</div>
            <todo-component onload="this.getRootNode()" />
        `)
    }

}


customElements.define("counter-text", CounterText)