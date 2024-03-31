/*
 * File: index.js
 * Project: Button
 * File Created: Sunday, 31st March 2024 12:11:51 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 2:29:21 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */


export default class CounterButton extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.render=this.render.bind(this)
        this.render()
        this.shadow.onclickButton = this.onclickButton
    }


    onclickButton(...p) {
        this.dispatchEvent(
            new CustomEvent('increment', {
                bubbles: true,
                composed: true,
                detail: p,
            })
        )        
    }

    render() {
        this.shadow.innerHTML =`
        <button onclick="this.getRootNode().onclickButton(event,this)">Increment</button>
        `
    }

}


customElements.define("counter-button", CounterButton)
