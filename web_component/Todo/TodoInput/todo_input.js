/*
 * File: todo_input.js
 * Project: TodoInput
 * File Created: Sunday, 31st March 2024 6:12:09 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 6:38:15 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class TodoInput extends ExtendedHTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
    }

    render() {
        super.render(`
            <h1>Todo input</h1>
        `)
    }

}

customElements.define("todo-input", TodoInput)