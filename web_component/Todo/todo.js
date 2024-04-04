/*
 * File: todo.js
 * Project: Todo
 * File Created: Sunday, 31st March 2024 6:07:32 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 1:35:27 pm
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
        this.updateUI()

        
        // this.onSlotUpdate=this.onSlotUpdate.bind(this)
        // this.shadowRoot.addEventListener('slotchange', this.onSlotUpdate);     
        
    }

    // onSlotUpdate(event){
    //     console.log(event)
    //     this.shadowRoot.removeEventListener('slotchange', this.onSlotUpdate); 
    //     this.render()     
    // }

    onAddTodo(value){
        // may be not a better way, since difficult to trace
        this.state.todo.push(value)
        this.ref.todo_list.setAttribute("key","")
    }

    render() {
        return (`
            <todo-input></todo-input>
            SLOT: <slot></slot>
            <div>
                <todo-list onload="return mapStateAndRef(this,'todo_list')"></todo-list>
            </div>
        `)
        // console.log("slot",this.shadow.querySelector("slot"))
    }

}


customElements.define("todo-component", TodoComponent)