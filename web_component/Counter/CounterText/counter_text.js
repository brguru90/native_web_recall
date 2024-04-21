/*
 * File: index.js
 * Project: CounterText
 * File Created: Sunday, 31st March 2024 12:11:59 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 21st April 2024 12:38:56 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

import "../../Todo/todo.js"

export default class CounterText extends ExtendedHTMLElement {


    state={
        count:0,
    }

    ref={}

    constructor() {
        super()
        // static HTML
        this.shadow.innerHTML=`<link rel="stylesheet" href="Counter/CounterText/style.css?test" />`
        this.shadow.innerHTML+=`<script> var test_var=Math.randrom();</script>`        
        this.shadow.state=this.state
        this.shadow.ref=this.ref
        this.updateUI()
         
        setInterval(() => {
            // slot seems to work on only update to reference
            this.shadow.querySelector("#clock").querySelector("span").innerHTML=new Date().toLocaleString()
        }, 1000);
    }

    updateComponent() {
        this.state.count = this.onload().count
        this.updateUI()
    }


    connectedCallback() {
        this.updateComponent()
    }

    static get observedAttributes() {
        return ["__update_key","key"];
    }

    attributeChangedCallback() {
        this.updateComponent()
    }


    render() {
        return (`
            Empty text
            <div>Count: ${this.state.count}</div>
            <todo-component onload="return mapStateAndRef(this,null,'test_var')"><span id="clock">slot_<span>clock</span></span></todo-component>
            <div>
                Todo Nested in Div<br />
                <todo-component onload="return mapStateAndRef(this,null,'test_var')"><span>slot_${this.state.count}</span></todo-component>

                Todo nested itself: <br />
                <fieldset>
                    <legend>Outer Todo</legend>
                    <todo-component  debugcomp="true" onload="return mapStateAndRef(this,null,'test_var')">
                        <!--- issue start here (slot update issue) --->
                        <span>slot_${this.state.count}</span><br />
                        <fieldset>
                            <legend>Nested Todo</legend>
                            <todo-component onload="return mapStateAndRef(this,null,'test_var')">
                                <span>slot_${this.state.count}</span>
                            </todo-component>     
                        </fieldset>         
                        <!--- issue end here here --->  
                    </todo-component>
                </fieldset>     
            </div>
        `)
    }

}


customElements.define("counter-text", CounterText)