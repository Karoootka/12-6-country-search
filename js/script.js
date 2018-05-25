var url = 'https://restcountries.eu/rest/v1/name/';
var countries = document.querySelector('.countries');

document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
  var country = document.getElementById('country').value;
  if(!country.length) countryName = 'Poland';

  fetch(url + country)
    .then(function(resp) {
      document.querySelector('.table').classList.add('show');
      return resp.json();
    })
    .then(showCountriesList);
};

function showCountriesList(resp) {
  countries.innerHTML = '';
  resp.forEach(function(item) {
    var newRow = document.createElement('tr');
    var countryName = document.createElement('td');
    var countryCapital = document.createElement('td');
    var countryRegion = document.createElement('td');
    countryName.innerText = item.name;
    countryCapital.innerText = item.capital;
    countryRegion.innerText = item.region;

    countries.appendChild(newRow);
    newRow.appendChild(countryName);
    newRow.appendChild(countryCapital);
    newRow.appendChild(countryRegion);


  })
};
