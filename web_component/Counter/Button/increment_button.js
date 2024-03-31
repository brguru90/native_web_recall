/*
 * File: index.js
 * Project: Button
 * File Created: Sunday, 31st March 2024 12:11:51 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 6:08:46 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class CounterButton extends ExtendedHTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.innerHTML=`<link rel="stylesheet" href="Counter/Button/style.css" />`
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
        super.render(`
            <button onclick="this.getRootNode().onclickButton(event,this)">Increment</button>
        `)
    }

}


customElements.define("counter-button", CounterButton)
