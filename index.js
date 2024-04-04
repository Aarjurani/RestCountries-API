// fetch.then('https://restcountries.com/v3.1/all')

var countryContainer = document.getElementById("countries-container");
let filterByregion = document.querySelector('.filter-by-region');
const searchInput = document.querySelector(".search-container input");
// fetch("https://restcountries.com/v3.1/all").then((res)=>{
//     res.json()
//       .then(console.log);
// })

// fetch('https://restcountries.com/v3.1/all').then((res)=>{
//     res.json()
//     .then((data)=>{
//         console.log(data)
//     })
// })

let allCountry
fetch('https://restcountries.com/v3.1/all').then((res)=>
    res.json())
    .then((data)=>{
      renderCompnies(data)
      allCountry =data
    })


filterByregion.addEventListener('change',(e)=>{
  
 
  fetch(`https://restcountries.com/v3.1/region/${filterByregion.value}`)

  .then((res)=>
    res.json())
    .then(renderCompnies)
})



 var flag=0
function modeChange(){
   if(flag==0){
   document.querySelector("body").style.backgroundColor ="black";
   document.querySelector("body").style.color ="white";
   
  flag=1
   }
   else{
    document.querySelector("body").style.backgroundColor ="white";
    document.querySelector("body").style.color ="black";
    flag=0
   }
}

function renderCompnies(data){
  countryContainer.innerHTML=''
  data.forEach((country)=>{
     const countryCard = document.createElement('a');
     
    countryCard.classList.add('country-card');
    countryCard.href=`/country.html?name=${country.name.common}`
    const cardHTML = `
    
    <img
      src="${country.flags.svg}"
      alt="flag"
    />
    <div class="card-text">
      <h3 class="card-title">&nbsp;${country.name.common}</h3>
      <p><b>Population : </b>&nbsp;${country.population}</p>
      <p><b>Region : </b>&nbsp;${country.region}</p>
      <p><b>Capital : </b>&nbsp;${country.capital}</p>
    </div>
    <br>
    `;
    countryCard.innerHTML = cardHTML
    
    countryContainer.append(countryCard);
    
   })
}
searchInput.addEventListener('input',(e)=>{
  // console.log(e.target.value)
      const filterarr =   allCountry.filter((country)=>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));

renderCompnies(filterarr)

})



















