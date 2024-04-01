/*
 * File: ExtendedHTMLElement.js
 * Project: Modules
 * File Created: Sunday, 31st March 2024 5:50:46 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Tuesday, 2nd April 2024 1:18:21 am
 * Modified By: Guruprasad BR (you@you.you>)
 */



export default class ExtendedHTMLElement extends HTMLElement {

    __child_memo=[]
    __render_count=0
    

    constructor() {
        super()
        this.shadow=this.attachShadow({mode:"open"})
        // createDocumentFragment API not working for innerHTML
        this.fragment = document.createElement("fragment-component")
        this.__render_count=0
        this.shadow.classRef=this
    }
    

    get parent(){
        return this.parentNode.parentNode
    }

    __memorizeChildState(){
        this.__child_memo=[]
        for(let i=0;i<this.fragment.childNodes.length;i++){
            this.__child_memo.push(this.fragment.childNodes[i])
        }
    }

    __replace_child(parentNode,memo_node){
        if(!parentNode.childNodes.length) return
        // const _debug=new Array(...parentNode.childNodes).filter(ch=>ch.localName=="todo-component")
        // if(_debug.length){
        //     console.log(parentNode.childNodes)
        // }
        const newChild=[]
        for(let i=0;i<parentNode.childNodes.length;i++){
            const node=parentNode.childNodes[i]
            if(node.shadow){
                newChild.push(memo_node?memo_node.childNodes[i]:node)
            } else{
                this.__replace_child(node,memo_node?memo_node.childNodes[i]:null)
                newChild.push(node)
            }
        }

        // if(_debug.length){
        //     console.log(parentNode.childNodes,memo_node,newChild)
        // }
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.lastChild);
        }
        parentNode.append(...newChild)
        // if(_debug.length){
        //     console.log(parentNode.childNodes,memo_node,newChild)
        // }
    }

    __restoreChildState(){
        // get current state
        this.__replace_child(this.fragment,{childNodes:this.__child_memo})
    }


    render(html) {
        
        this.__memorizeChildState()
        
        this.fragment.innerHTML = ""
        this.shadow.appendChild(this.fragment)

        this.fragment.innerHTML = html

        if(this.__render_count){
            this.__restoreChildState()
        } 

        this.shadow.appendChild(this.fragment)      

        this.__render_count++
    }

}
