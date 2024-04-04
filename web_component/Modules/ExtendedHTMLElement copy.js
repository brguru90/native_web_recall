/*
 * File: ExtendedHTMLElement.js
 * Project: Modules
 * File Created: Sunday, 31st March 2024 5:50:46 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 8:34:35 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */



export default class ExtendedHTMLElement extends HTMLElement {
    constructor() {
        super()
        this.shadow=this.attachShadow({mode:"open"})
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
