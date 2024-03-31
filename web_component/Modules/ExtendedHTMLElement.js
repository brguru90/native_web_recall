/*
 * File: ExtendedHTMLElement.js
 * Project: Modules
 * File Created: Sunday, 31st March 2024 5:50:46 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Monday, 1st April 2024 1:30:40 am
 * Modified By: Guruprasad BR (you@you.you>)
 */



export default class ExtendedHTMLElement extends HTMLElement {

    child_memo={}

    constructor() {
        super()
        this.shadow=this.attachShadow({mode:"open"})
        // createDocumentFragment not working for innerHTML
        this.fragment = document.createElement("fragment-component")
        this.shadow.onChildDisconnect=this.onChildDisconnect.bind(this)
        this.shadow.onChildConnected=this.onChildConnected.bind(this)
    }
    

    get parent(){
        return this.parentNode.parentNode
    }


    onChildConnected(_scope,class_name){
        if(this.parentNode && this.parent) this.oldParent=this.parent
        this.child_memo[class_name]=_scope
        console.log("connected",this.constructor.name,JSON.stringify(this.child_memo))
    }

    connectedCallback() {
        if(this.parentNode && this.parent && this.parent.onChildConnected){
            this.parent.onChildConnected(this,this.constructor.name)
            // if(_scope){
            //     Object.assign(this,_scope)
            // }
        }
    }


    onChildDisconnect(_scope,class_name){
        console.log("child",_scope,class_name,"parent",this.constructor.name,JSON.stringify(this.child_memo))
        const scope=this.child_memo[class_name]
        if(scope){
            Object.assign(scope,_scope)
        }
        // this.child_memo[class_name]
    }

    disconnectedCallback(){
        if(this.parentNode && this.parent && this.parent.onChildDisconnect)
        this.parent.onChildDisconnect(this,this.constructor.name)
        else if(this.oldParent && this.oldParent.onChildDisconnect)
        this.oldParent.onChildDisconnect(this,this.constructor.name)
    }


    render(html) {

        this.fragment.innerHTML = html
        this.shadow.appendChild(this.fragment)
    }

}
