// selecting the popup overlay and popup box class to create display as  block
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById("add-popup-button")

    popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"})

// select cancel button
var cancelbutton=document.getElementById("cancel-popup")
        cancelbutton.addEventListener("click",function(event){
            event.preventDefault()
            popupoverlay.style.display="none"
            popupbox.style.display="none"

        })

// coding js for add button by selecting add button and book title,author,description
var container=document.querySelector(".container") 
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-discription")

// creating a div and adding the book detailss  in the book container class
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    })

function deletebook(event){
    event.target.parentElement.remove()
}