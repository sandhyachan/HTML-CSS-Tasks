const dataBox = document.getElementById("inputbox")
const generateButton = document.getElementById("button")
const url = "https://meowfacts.herokuapp.com/"

//on the click of the button, API is fetched
generateButton.addEventListener("click", () => {
    fetchApi()
})

function fetchApi(){
    //reusabilty for url
    fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP Errow: ${response.status}`)
        }
        return response.json()})
    .then(data => {
        //data is appended to the textarea
        dataBox.value = data.data[0]

        })
    .catch(err => console.error(err))
}

