/*
 * File: util.js
 * Project: Modules
 * File Created: Thursday, 4th April 2024 1:35:56 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Sunday, 7th April 2024 4:27:35 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */




function mapStateAndRef(currentTarget,key,...rest){
    console.log({key,rest})
    // if(rest){
    //     alert(rest)
    // }
    if(key){
        currentTarget.getRootNode().ref[key]=currentTarget; 
    }
    return currentTarget.getRootNode().state;
}
window.mapStateAndRef=mapStateAndRef