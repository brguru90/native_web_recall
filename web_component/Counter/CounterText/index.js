/*
 * File: index.js
 * Project: CounterTest
 * File Created: Sunday, 31st March 2024 12:11:59 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 3:39:31 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */




export default class CounterText extends HTMLElement{


    count=0

    constructor(){
        super()
        this.shadow=this.attachShadow({mode:"open"})
        this.render()
    }

    updateComponent(){
        this.count=this.onload().count
        this.render()
    }


    connectedCallback(){
        this.updateComponent()
    }

    static get observedAttributes() {
        return ["key"];
    }

    attributeChangedCallback(){
        this.updateComponent()
    }


    render(){
        this.shadow.innerHTML=`
        <p>Count: ${this.count}</p>
        `
    }

}


customElements.define("counter-text", CounterText)