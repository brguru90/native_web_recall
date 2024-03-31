/*
 * File: style.js
 * Project: js brushup
 * File Created: Saturday, 30th March 2024 1:38:53 pm
 * Author: Gurruprasad BR (you@you.you)
 * -----
 * Last Modified: Saturday, 30th March 2024 3:55:32 pm
 * Modified By: Gurruprasad BR (you@you.you>)
 */



const header=document.querySelector(".header")
const parent_container=document.querySelector(".parent_container")

function callback(payload) {
    if(!payload[0].isIntersecting){
        header.classList.add("fixed")
    } else{
        header.classList.remove("fixed")
    }
}

const ob=new IntersectionObserver(callback,{
        root: parent_container,
        threshold: 1,
})
ob.observe(header)


const body=document.querySelector(".body").firstElementChild


function callback2(payload) {
    if(payload[0].isIntersecting){
        header.classList.remove("fixed")
    } else{
        header.classList.add("fixed")
    }
}

const ob2=new IntersectionObserver(callback2,{
    root: parent_container,
    threshold: 1,
})
ob2.observe(body)

function checkTemplate(...p) {
    alert(p)
}

function addDom() {
    const content=document.querySelector('template').content
    const btn=document.importNode(content,true).querySelector(".test_button")
    document.querySelector(".body").prepend(btn)
    const arr=["guru","prasad"]

    document.querySelector(".header").innerHTML+=`
    <button class="test_button" onclick="checkTemplate('${arr[0]}','${arr[1]}')">template</button>
    `
}

setTimeout(addDom, 2000);



