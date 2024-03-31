/*
 * File: todo_list.js
 * Project: TodoList
 * File Created: Sunday, 31st March 2024 6:12:17 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 6:38:36 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class TodoList extends ExtendedHTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.innerHTML=`<link rel="stylesheet" href="Todo/TodoList/style.css" />`
    }

    render() {
        super.render(`
            <h1>Todo List</h1>
        `)
    }

}

customElements.define("todo-list", TodoList)