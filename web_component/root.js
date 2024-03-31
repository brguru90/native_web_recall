/*
 * File: root.js
 * Project: web_component
 * File Created: Saturday, 30th March 2024 8:44:38 pm
 * Author: Gurruprasad BR (you@you.you)
 * -----
 * Last Modified: Saturday, 30th March 2024 9:14:11 pm
 * Modified By: Gurruprasad BR (you@you.you>)
 */

export default class RootComponent extends HTMLElement{

    constructor(){
        super()
        this.shadow=this.attachShadow({mode:"open"})
        this.shadow.innerHTML=this.render()
    }


    render(){
        return `
        <div>
            <h1>Root component</h1>
            <slot></slot>
        </div>        
        `
    }
}

customElements.define("root-component",RootComponent)