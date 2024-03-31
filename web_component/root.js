/*
 * File: root.js
 * Project: web_component
 * File Created: Saturday, 30th March 2024 8:44:38 pm
 * Author: Gurruprasad BR (you@you.you)
 * -----
 * Last Modified: Monday, 1st April 2024 12:15:37 am
 * Modified By: Guruprasad BR (you@you.you>)
 */


import ExtendedHTMLElement from "./Modules/ExtendedHTMLElement.js"

export default class RootComponent extends ExtendedHTMLElement{

    constructor(){
        super()
        this.render()
    }


    render(){
        super.render(`
        <fragment-component>
            <h1>Root component</h1>
            <slot></slot>
        </fragment-component>        
        `)
    }
}

customElements.define("root-component",RootComponent)