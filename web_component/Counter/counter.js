/*
 * File: index.js
 * Project: Counter
 * File Created: Saturday, 30th March 2024 9:04:25 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 10:53:20 pm
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
        this.render()
        this.increment=this.increment.bind(this)
    }

    connectedCallback(){
        super.connectedCallback()
        this.shadow.querySelector("counter-button").addEventListener("increment",this.increment)
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.removeEventListener("increment",this.increment)
    }

    increment({detail}){
        this.state.count++
        this.ref.counter_text.setAttribute("key","")
    }

    render(){
        super.render(`
        <div>
            <h2>Counter</h2>
            <counter-button></counter-button><br /><br />
            <counter-text onload="this.getRootNode().ref.counter_text=this;return this.getRootNode().state"></counter-text>
        </div>        
        `)
    }

}

customElements.define("counter-component",CounterComponent)
