const imgContainer = document.getElementById("img-container")
const dogButton = document.getElementById("dog-button")
const catButton = document.getElementById("cat-button")
//separate urls for each api
const dogUrl = "https://dog.ceo/api/breeds/image/random"
const catUrl = "https://api.thecatapi.com/v1/images/search"

//on click of the buttons, fetchApi functions are called
dogButton.addEventListener("click", () => {
    fetchDogApi(dogUrl)
})
catButton.addEventListener("click", () => {
    fetchCatApi(catUrl)
})

//function with reusability for the url
function fetchDogApi(URL){
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`"HTTP Error" ${response.status}`)
        } return response.json()
    })
    //get data from object and append to imagecontainer
    .then(datas => {
        imgContainer.innerHTML = ""
        const image = document.createElement("img")
        image.src = datas.message
        image.className = "animal-image"
        imgContainer.appendChild(image)})
        //catch error is given
    .catch(Error => console.log(Error))
}

//function for catApi
function fetchCatApi(URL){
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            //throw error with the status of response
            throw new Error(`"HTTP Error" ${response.status}`)
        } return response.json()
    })
    .then(datas => {
        //take the data from array and append to imagecontainer
        imgContainer.innerHTML = ""
        const image = document.createElement("img")
        image.src = datas[0].url
        image.className = "animal-image"
        imgContainer.appendChild(image)})
        //handle errors
    .catch(Error => console.log(Error))
}