/*
 * File: todo_list.js
 * Project: TodoList
 * File Created: Sunday, 31st March 2024 6:12:17 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 1:40:11 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class TodoList extends ExtendedHTMLElement {


    todos=[]

    constructor() {
        super()
        this.shadow.innerHTML=`<link rel="stylesheet" href="Todo/TodoList/style.css" />`
        this.updateUI()
    }

    updateComponent() {
        this.todos = this.onload().todo
        this.updateUI()
    }


    connectedCallback() {
        this.updateComponent()
    }

    static get observedAttributes() {
        return ["__update_key","key"];
    }

    attributeChangedCallback(name) {
        // console.log({name})
        super.attributeChangedCallback()
        this.updateComponent()
    }

    getList(){
        return this.todos.map(todo=>`<li>${todo}</li>`).join("\n")
    }


    render() {
        return `
            <h1>Todo List</h1>
            <ul>
                ${this.getList()}
            </ul>
         `
    }

}

customElements.define("todo-list", TodoList)