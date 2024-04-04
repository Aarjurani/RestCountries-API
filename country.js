let cityName = new URLSearchParams(window.location.search).get("name");
let flag = document.querySelector(".img img");
let nameh2 = document.querySelector(" .h2");
let nativeName = document.querySelector(".native-name");
let population = document.querySelector(".popualtion");
let region = document.querySelector(".Region");
let capital = document.querySelector(".capital");
let subregion = document.querySelector(".sub-region");
let domain = document.querySelector(".domain");
let cureency = document.querySelector(".curency");
let languages = document.querySelector(".language");
let bordercountries = document.querySelector(".border-countries");

var mode=0
function modeChange(){
   if(mode==0){
   document.querySelector("body").style.backgroundColor ="black";
   document.querySelector("body").style.color ="white";
   
  mode=1
   }
   else{
    document.querySelector("body").style.backgroundColor ="white";
    document.querySelector("body").style.color ="black";
    mode=0
   }
}



fetch(`https://restcountries.com/v3.1/name/${cityName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flag.src = country.flags.svg;
    nameh2.innerText = country.name.common;
    population.innerText = country.population;
    region.innerText = country.region;
    capital.innerText = country.capital;
    subregion.innerText = country.subregion;
    domain.innerText = country.tld;
    languages.innerHTML = country.languages;
        if(country.currencies){
            cureency.innerText = Object.values(country.currencies).map((cureency)=>cureency.name)
          }
    // cureency.innerText = country.currencies;
    if(country.languages){
        languages.innerHTML = Object.values(country.languages);
      }
     
     if(country.borders){
        country.borders.forEach((border)=>{
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>
            res.json()
            .then(([borderCountry])=>{
                const borderCountryTag = document.createElement('a');
                borderCountryTag.innerText = borderCountry.name.common;
                borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                bordercountries.append(borderCountryTag);
            })
         ) })
        }
    if (country.name.nativeName) {
      nativeName.innerHTML = Object.values(country.name.nativeName)[0].common;
    } else {
      nativeName.innerText = country.name.common;
    }
  });

console.log(cityName);
