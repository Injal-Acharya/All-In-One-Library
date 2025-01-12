let data = fetch("http://127.0.0.1:5500/modals/books.js")
data.then((response) => {
    return response.json()

})
.then((value) => {
    console.log(value[0])
})
