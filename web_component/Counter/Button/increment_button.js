/*
 * File: index.js
 * Project: Button
 * File Created: Sunday, 31st March 2024 12:11:51 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Tuesday, 2nd April 2024 7:35:02 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

import ExtendedHTMLElement from "../../Modules/ExtendedHTMLElement.js"

export default class CounterButton extends ExtendedHTMLElement {

    constructor() {
        super()
        this.shadow.innerHTML=`<link rel="stylesheet" href="Counter/Button/style.css" />`
        this.updateUI()
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
        return (`
            <button onclick="this.getRootNode().onclickButton(event,this)">Increment</button>
        `)
    }

}


customElements.define("counter-button", CounterButton)
