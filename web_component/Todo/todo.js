/*
 * File: todo.js
 * Project: Todo
 * File Created: Sunday, 31st March 2024 6:07:32 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 6:38:54 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../Modules/ExtendedHTMLElement.js"

export default class CounterButton extends ExtendedHTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.innerHTML=`<link rel="stylesheet" href="Todo/style.css" />`
    }

    render() {
        super.render(`
            <todo-input />
            <todo-list />
        `)
    }

}


customElements.define("counter-button", CounterButton)