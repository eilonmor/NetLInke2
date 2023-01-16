

window.onload = ()=>{
    getCountryState()
    setTimeout(() => {
        som();
      }, 350);
    
}

const listOfCountry = []
 async function getCountryState(){
    const url ='https://restcountries.com/v3.1/all'
    const respon = await fetch(url);
    const data = await respon.json()
    await data.sort().forEach(country => {
        listOfCountry.push(country.name.common)
    });

}

 function som(){
    const dropDownListOfCountry = document.querySelector('#country')
    const listOfCountrysSort = listOfCountry.sort()
    let output = ''
    listOfCountrysSort.forEach(countrySort =>{
        output += `<option value="${countrySort}">${countrySort}</option>`;
    })
    dropDownListOfCountry.innerHTML = output;
}