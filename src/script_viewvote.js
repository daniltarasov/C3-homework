const cats = document.querySelector('#cats');
const parrots = document.querySelector('#parrots');
const dogs = document.querySelector('#dogs');

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});


const url_stats = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(url_stats, header);

ES.onopen = event => {
  console.log(event)
}

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = message => {
	
    data = message.data
    console.log(data)
    jsonObj = JSON.parse(data)
    sumVotes = jsonObj.cats + jsonObj.parrots + jsonObj.dogs

    cats.style.cssText = `width: ${jsonObj.cats/sumVotes*100}%;`
    parrots.style.cssText = `width: ${jsonObj.parrots/sumVotes*100}%;`
    dogs.style.cssText = `width: ${jsonObj.dogs/sumVotes*100}%;`

    parrots.textContent = `${jsonObj.parrots}`
    dogs.textContent = `${jsonObj.dogs}`
    cats.textContent = `${jsonObj.cats}`
}
