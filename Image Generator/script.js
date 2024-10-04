const imgContainer = document.getElementById("img-container")
const dogButton = document.getElementById("dog-button")
const catButton = document.getElementById("cat-button")
const dogUrl = "https://dog.ceo/api/breeds/image/random"
const catUrl = "https://api.thecatapi.com/v1/images/search"

dogButton.addEventListener("click", () => {
    fetchDogApi(dogUrl)
})
catButton.addEventListener("click", () => {
    fetchCatApi(catUrl)
})

function fetchDogApi(URL){
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`"HTTP Error" ${response.status}`)
        } return response.json()
    })
    .then(datas => {
        imgContainer.innerHTML = ""
        const image = document.createElement("img")
        image.src = datas.message
        image.className = "animal-image"
        imgContainer.appendChild(image)})
    .catch(Error => console.log(Error))
}
function fetchCatApi(URL){
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`"HTTP Error" ${response.status}`)
        } return response.json()
    })
    .then(datas => {
        imgContainer.innerHTML = ""
        const image = document.createElement("img")
        image.src = datas[0].url
        image.className = "animal-image"
        imgContainer.appendChild(image)})
    .catch(Error => console.log(Error))
}