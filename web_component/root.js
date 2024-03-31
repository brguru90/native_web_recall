/*
 * File: root.js
 * Project: web_component
 * File Created: Saturday, 30th March 2024 8:44:38 pm
 * Author: Gurruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 31st March 2024 5:12:22 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */

export default class RootComponent extends HTMLElement{

    constructor(){
        super()
        this.shadow=this.attachShadow({mode:"open"})
        this.shadow.innerHTML=this.render()
    }


    render(){
        return `
        <fragment-component>
            <h1>Root component</h1>
            <slot></slot>
        </fragment-component>        
        `
    }
}

customElements.define("root-component",RootComponent)