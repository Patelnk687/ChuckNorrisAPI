//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.chucknorris.io/jokes/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.value)
        console.log()
       
        document.querySelector('h2').innerText = data.value
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

