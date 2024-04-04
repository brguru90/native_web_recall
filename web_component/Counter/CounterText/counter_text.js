/*
 * File: index.js
 * Project: CounterText
 * File Created: Sunday, 31st March 2024 12:11:59 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 3:29:31 pm
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
        this.shadow.innerHTML+=`<script> var test_var=Math.randrom();</script>`
        this.shadow.ref=this.ref
        this.updateUI()
         
        setInterval(() => {
            // slot seems to work on only update to reference
            this.shadow.querySelector("#clock").querySelector("span").innerHTML=new Date().toLocaleString()
        }, 1000);
    }

    updateComponent() {
        this.count = this.onload().count
        this.updateUI()
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
        return (`
            Empty text
            <div>Count: ${this.count}</div>
            <todo-component onload="return mapStateAndRef(this,null,'test_var')"><span id="clock">slot_<span>clock</span></span></todo-component>
            <div>
                Todo Nested in Div<br />
                <todo-component onload="return mapStateAndRef(this,null,'test_var')"><span>slot_${this.count}</span></todo-component>

                Todo nested itself: <br />
                <fieldset>
                    <legend>Outer Todo</legend>
                    <todo-component onload="return mapStateAndRef(this,null,'test_var')">
                        <span>slot_${this.count}</span><br />
                        <fieldset>
                            <legend>Nested Todo</legend>
                            <todo-component onload="return mapStateAndRef(this,null,'test_var')">
                                <span>slot_${this.count}</span>
                            </todo-component>     
                        </fieldset>           
                    </todo-component>
                </fieldset>     
            </div>
        `)
    }

}


customElements.define("counter-text", CounterText)