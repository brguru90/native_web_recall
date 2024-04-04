/*
 * File: index.js
 * Project: Counter
 * File Created: Saturday, 30th March 2024 9:04:25 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 1:40:53 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */


import "./Button/increment_button.js"
import "./CounterText/counter_text.js"


import ExtendedHTMLElement from "../Modules/ExtendedHTMLElement.js"

export default class CounterComponent extends ExtendedHTMLElement{
    
    state={
        count:1,
    }

    ref={}

    constructor(){
        super()
        this.shadow.innerHTML=`<link rel="stylesheet" href="Counter/style.css" />`
        // this.shadow.render=this.render.bind(this)
        this.shadow.state=this.state
        this.shadow.ref=this.ref
        this.updateUI()
        this.increment=this.increment.bind(this)
    }

    connectedCallback(){
        this.shadow.querySelector("counter-button").addEventListener("increment",this.increment)
    }

    disconnectedCallback(){
        this.removeEventListener("increment",this.increment)
    }

    increment({detail}){
        this.state.count++
        this.ref.counter_text.setAttribute("key","")
    }

    render(){
        return (`
        <div>
            <h2>Counter</h2>
            <counter-button></counter-button><br /><br />
            <counter-text onload="return mapStateAndRef(this,'counter_text')"></counter-text>
        </div>        
        `)
    }

}

customElements.define("counter-component",CounterComponent)
