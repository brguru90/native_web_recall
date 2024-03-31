/*
 * File: index.js
 * Project: Counter
 * File Created: Saturday, 30th March 2024 9:04:25 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 3:40:29 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */


import "./Button/index.js"
import "./CounterText/index.js"

export default class CounterComponent extends HTMLElement{
    
    state={
        count:1,
    }

    ref={}

    constructor(){
        super()
        this.shadow=this.attachShadow({mode:"open"})
        this.shadow.render=this.render.bind(this)
        this.shadow.state=this.state
        this.shadow.ref=this.ref
        this.render()
        this.increment=this.increment.bind(this)
    }

    connectedCallback(){
        this.shadow.querySelector("counter-button").addEventListener("increment",this.increment)
    }

    disconnectedCallback(){
        this.removeEventListener("click2",this.increment)
    }

    increment({detail}){
        this.state.count++
        this.ref.counter_text.setAttribute("key","")
    }

    render(){
        this.shadow.innerHTML=`
        <link rel="stylesheet" href="Counter/style.css" />
        <div>
            <h2>Counter</h2>
            <counter-button></counter-button>
            <counter-text onload="this.getRootNode().ref.counter_text=this;return this.getRootNode().state"></counter-text>
        </div>        
        `
    }

}

customElements.define("counter-component",CounterComponent)
