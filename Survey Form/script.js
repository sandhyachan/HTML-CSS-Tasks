//on click of submit button, function is called
const submit = document.getElementById("submit")

submit.addEventListener("click", ()=>{
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const pincode = document.getElementById("pincode").value
    const foodChoice = Array.from(document.getElementById('food-choice').selectedOptions)

    if (firstName == "" || lastName == "") {
        window.alert("Please fill in your first and last name.")
        return
    } 
    else if (pincode.length <4 ){
        window.alert("Please enter a valid pincode.")}
    else if (foodChoice.length<2){
        window.alert("You must select atleast two choice of food.")
    } else {
        submitForm()
    window.alert("Your response has been submitted")
    }
})

function submitForm(){
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const gender = document.querySelector('input[name=gridRadios]:checked').value
    const address = document.getElementById('address').value
    const state = document.getElementById('state').value
    const country = document.getElementById('country').value
    const pincode = document.getElementById("pincode").value

    const foodChoice = Array.from(document.getElementById('food-choice').selectedOptions)
    const selectedFood = foodChoice.map(Option => Option.text).join(',')

    const dataTable = document.getElementById("dataTable")

    const newRow = document.createElement('tr')
    newRow.innerHTML = `<th scope="row">${dataTable.rows.length}</th>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${state}</td>
    <td>${country}</td>
    <td>${pincode}</td>
    <td>${selectedFood}</td>`
    dataTable.appendChild(newRow)

    document.getElementById("form").reset()
}

