const getData = () => {
  const url = "http://randomuser.me/api/?results=10"
  axios.get(url)
    .then((res) => {
      // console.log(res) 
      const response = res.data.results
      // console.log(response) 
      response.forEach((person) => {
        console.log(person.name)
        const peopleDiv = document.querySelector('.people')
        const personDiv = document.createElement('div')
        peopleDiv.append(personDiv)

        const firstName = person.name.first

      })
    })
}

getData()