/*
 * File: todo.js
 * Project: Todo
 * File Created: Sunday, 31st March 2024 6:07:32 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 8:46:52 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../Modules/ExtendedHTMLElement.js"
import "./TodoInput/todo_input.js"
import "./TodoList/todo_list.js"

export default class TodoComponent extends ExtendedHTMLElement {

    state={
        todo:[]
    }

    ref={}

    constructor() {
        super()
        this.shadow.innerHTML=`<link rel="stylesheet" href="Todo/style.css" />`
        this.shadow.state=this.state
        this.shadow.ref=this.ref
        this.shadow.onAddTodo=this.onAddTodo.bind(this)
        this.render()
    }


    onAddTodo(value){
        // may be not a better way, since difficult to trace
        this.state.todo.push(value)
        this.ref.todo_list.setAttribute("key","")
    }

    render() {
        super.render(`
            <todo-input></todo-input>
            <todo-list onload="this.getRootNode().ref.todo_list=this; return this.getRootNode().state"></todo-list>
        `)
    }

}


customElements.define("todo-component", TodoComponent)