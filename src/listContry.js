window.onload = () =>{
    getNameOfcuintry()
}
// // function getCountryState(){
// 	const req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

// 	req.headers({
// 		"Accept": "application/json",
// 		"api-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0",
// 		"user-email": "eilonmor@gmail.com"
//   });
// }
// function getCountryState(){
//     fetch('GET https://www.universal-tutorial.com/api/countries',{
//         method: post
//         headers: new Headers({

//         })
//     })
    
//     const myHeaders = new Headers();
//     myHeaders.append('Accept', 'application/json');
//     myHeaders.append('api-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0');
//     myHeaders.append('user-email', 'eilonmor@gmail.com');
//     myHeaders.get('Accept', ) // should return 'text/xml'
//     }
// fetch
// const myHeaders = new Headers();
// myHeaders.append('Accept', 'application/json');
// myHeaders.append('api-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0');
// myHeaders.append('user-email', 'eilonmor@gmail.com');
// myHeaders.get('Accept', ) // should return 'text/xml'



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
// 	}
// };

// const init = () => {fetch('https://countries-states-cities-dataset.p.rapidapi.com/list-countries', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }
// }
// var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "API_KEY");

// var requestOptions = {
//    method: 'GET',
//    headers: headers,
//    redirect: 'follow'
// };
// const init = () => {
//     fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

 async function getCountryState(){
    const url ='https://restcountries.com/v3.1/all'
    const respon = await fetch(url);
    const data = await respon.json();
    // console.log(data);
    
}

async function getNameOfcuintry(){
    await getCountryState().forEach(element => {
        console.log('hi')
    });
}
