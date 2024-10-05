const tableBody = document.querySelector("tbody")
const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"

//function to fetch the api
function fetchApi(url){
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        } return response.json()
    })
    .then(datas =>{
        //run foreach loop to get key for table
        Object.keys(datas).forEach(
            key => {
                const tableRow = document.createElement("tr")
                tableRow.innerHTML = `
                <td>${key.toUpperCase()}</td>
                <td>${datas[key]}</td>
                `
                tableBody.appendChild(tableRow)
            }
        )
    })
    .catch(err => console.log(err))
}
//initially fetching the function for the table
fetchApi(url)