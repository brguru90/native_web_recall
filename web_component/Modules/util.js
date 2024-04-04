/*
 * File: util.js
 * Project: Modules
 * File Created: Thursday, 4th April 2024 1:35:56 pm
 * Author: Guruprasad BR (you@you.you)
 * -----
 * Last Modified: Thursday, 4th April 2024 3:28:36 pm
 * Modified By: Guruprasad BR (you@you.you>)
 */




function mapStateAndRef(currentTarget,key,test_param){
    console.log({key,test_param})
    if(test_param){
        alert(test_param)
    }
    if(key){
        currentTarget.getRootNode().ref[key]=currentTarget; 
    }
    return currentTarget.getRootNode().state;
}
window.mapStateAndRef=mapStateAndRef