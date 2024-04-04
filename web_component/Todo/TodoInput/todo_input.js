/*
 * File: todo_input.js
 * Project: TodoInput
 * File Created: Sunday, 31st March 2024 6:12:09 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Tuesday, 2nd April 2024 7:34:21 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class TodoInput extends ExtendedHTMLElement {

    state={
        txt:""
    }

    constructor() {
        super()
        this.shadow.onAdd = this.onAdd.bind(this)
        this.shadow.updateText = this.updateText.bind(this)
        this.updateUI()
    }


    updateText(event){
        this.state.txt=event.target.value
    }


    onAdd(){ 
        // may be not a better way, since difficult to trace
        const target=this.shadow.querySelector("input[type=text")
        this.parent.onAddTodo(target.value)
        target.value=""
    }

    render() {
        return (`
            <input type="text" onkeyup="this.getRootNode().updateText(event)" /> <input type="button" value="add" onclick="this.getRootNode().onAdd()" />
        `)
    }

}

customElements.define("todo-input", TodoInput)