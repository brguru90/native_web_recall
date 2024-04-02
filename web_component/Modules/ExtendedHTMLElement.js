/*
 * File: ExtendedHTMLElement.js
 * Project: Modules
 * File Created: Sunday, 31st March 2024 5:50:46 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Tuesday, 2nd April 2024 7:52:26 pm
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

        if(this.render==undefined){
            throw "render is not implemented"
        }
        this.onSlotUpdate=this.onSlotUpdate.bind(this)
        this.shadow.addEventListener('slotchange', this.onSlotUpdate); 

    }

     onSlotUpdate(event){
        console.log(event)
        this.shadow.removeEventListener('slotchange', this.onSlotUpdate); 
        this.updateUI()     
    }
    
    static get observedAttributes() {
        return ["__update_key"]
    }

    attributeChangedCallback(){
        this.updateUI()
        console.log(this.shadow.querySelectorAll("slot"))
    }
    

    get parent(){
        return this.parentNode.parentNode
    }

    updateUI(){
        this.__render(this.render())
    }

    __memorizeChildState(){
        this.__child_memo=[]
        for(let i=0;i<this.fragment.childNodes.length;i++){
            this.__child_memo.push(this.fragment.childNodes[i])
        }
    }

    __replace_child(parentNode,memo_node,attribute_change){
        if(!parentNode.childNodes.length) return
        /****
         * need some way to update slot contents
         * $0.querySelector("slot").assignedNodes()
         */



        // const _debug=new Array(...parentNode.childNodes).filter(ch=>ch.localName=="todo-component")
        // if(_debug.length){
        //     console.log(parentNode.childNodes)
        // }
        const newChild=[]
        for(let i=0;i<parentNode.childNodes.length;i++){
            const node=parentNode.childNodes[i]
            if(node.shadow){
                newChild.push(memo_node?memo_node.childNodes[i]:node)
                attribute_change.push(newChild[newChild.length-1])
            } else{
                this.__replace_child(node,memo_node?memo_node.childNodes[i]:null,attribute_change)
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
        const attribute_change=[]
        this.__replace_child(this.fragment,{childNodes:this.__child_memo},attribute_change)
        attribute_change.forEach(elem=>{
            elem.setAttribute("__update_key",Math.random())
        })
    }


    __render(html) {
        
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
