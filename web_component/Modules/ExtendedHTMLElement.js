/*
 * File: ExtendedHTMLElement.js
 * Project: Modules
 * File Created: Sunday, 31st March 2024 5:50:46 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Monday, 1st April 2024 1:38:58 am
 * Modified By: Guruprasad BR (you@you.you>)
 */



export default class ExtendedHTMLElement extends HTMLElement {
    constructor() {
        super()
        // createDocumentFragment not working for innerHTML
        this.fragment = document.createElement("fragment-component")
    }
    

    get parent(){
        return this.parentNode.parentNode
    }

    render(html) {
        this.shadow.state=this.state
        this.shadow.ref=this.ref
        
        this.fragment.innerHTML = html
        this.shadow.appendChild(this.fragment)
    }
}