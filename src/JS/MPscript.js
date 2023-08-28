const callAPI = () => {
    const url = "https://localhost:44307/api/Decisoes"

    fetch(url)
     .then(response =>response.json ())
     .then(cartas => {
        console.log(cartas)
     })
}
callAPI()