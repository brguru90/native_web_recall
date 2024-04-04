/*
 * File: ExtendedHTMLElement.js
 * Project: Modules
 * File Created: Sunday, 31st March 2024 5:50:46 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 1:23:26 pm
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
        // this.onSlotUpdate=this.onSlotUpdate.bind(this)
        // this.shadow.addEventListener('slotchange', this.onSlotUpdate); 

    }

    //  onSlotUpdate(event){
    //     this.shadow.removeEventListener('slotchange', this.onSlotUpdate); 
    //     this.updateUI()     
    // }
    
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

    /**   !!! reactivity on web component */

    __memorizeChildState(){
        this.__child_memo=[]
        for(let i=0;i<this.fragment.childNodes.length;i++){
            this.__child_memo.push(this.fragment.childNodes[i])
        }
    }

    

    __replace_child(parentNode,memo_node){
        if(!parentNode.childNodes.length) return
        const newChild=[]
        for(let i=0;i<parentNode.childNodes.length;i++){
            const node=parentNode.childNodes[i]
            if(node.shadow){ // if the node has shadow then identifying current node as web component (in current implementation all wc have shadow)
                // first restore the shadow child or web component 
                // i.e., <wc></wc>  restore->wc
                const updatedWC=memo_node?memo_node.childNodes[i]:node.shadow
                // then <wc> children </wc> look for --> children
                while (updatedWC.firstChild) {
                    updatedWC.removeChild(updatedWC.lastChild);
                }
                // then replace old child elements with new child elements
                updatedWC.append(...node.childNodes)
                // the repeat same with all the nested child elements
                // to restore in deep nested web components states
                this.__replace_child(updatedWC,memo_node?memo_node.childNodes[i]:null)
                newChild.push(updatedWC)
            } else{ // if its regular native element like <div>
                this.__replace_child(node,memo_node?memo_node.childNodes[i]:null)
                newChild.push(node)
            }
        }
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.lastChild);
        }
        parentNode.append(...newChild)
    }

    __restoreChildState(){
        // get current state
        this.__replace_child(this.fragment,{childNodes:this.__child_memo})
    }


    /**   !!! reactivity on web component */


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
