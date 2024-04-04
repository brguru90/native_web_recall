/*
 * File: util.js
 * Project: Modules
 * File Created: Thursday, 4th April 2024 1:35:56 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 1:41:54 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */




function mapStateAndRef(currentTarget,key){
    if(key){
        currentTarget.getRootNode().ref[key]=currentTarget; 
    }
    return currentTarget.getRootNode().state;
}
window.mapStateAndRef=mapStateAndRef