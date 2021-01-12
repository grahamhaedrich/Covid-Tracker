const covid_API_url = 'https://corona.lmao.ninja/v2/countries/Canada';

fetch (covid_API_url)
  .then(response => response.json())
  .then(function(data) {
    document.getElementById('population').innerHTML = data.population.toLocaleString();
    document.getElementById('total_cases').innerHTML = data.cases.toLocaleString();
    document.getElementById('active_cases').innerHTML =  data.active.toLocaleString();
    document.getElementById('recovered').innerHTML = data.recovered.toLocaleString();
    document.getElementById('deaths').innerHTML = data.deaths.toLocaleString();
    document.getElementById('tests').innerHTML = data.tests.toLocaleString();
  })
  .catch(error => console.log("error has occured"));
