/*
 * File: todo_list.js
 * Project: TodoList
 * File Created: Sunday, 31st March 2024 6:12:17 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Monday, 1st April 2024 12:02:15 am
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class TodoList extends ExtendedHTMLElement {


    todos=[]

    constructor() {
        super()
        this.shadow.innerHTML=`<link rel="stylesheet" href="Todo/TodoList/style.css" />`
        this.render()
    }

    updateComponent() {
        this.todos = this.onload().todo
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

    getList(){
        return this.todos.map(todo=>`<li>${todo}</li>`).join("\n")
    }


    render() {
        super.render(`
            <h1>Todo List</h1>
            <ul>
                ${this.getList()}
            </ul>
        `)
    }

}

customElements.define("todo-list", TodoList)