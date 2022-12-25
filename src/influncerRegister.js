let listOfSocialInput = []

function buildInputsSocial(){
    listOfSocialInput = []
    const listOfSocialMedia = document.querySelectorAll('input')
    const eilonM = document.querySelectorAll('eilon')
    listOfSocialMedia.forEach(social => {
        if (social.checked === true){
            console.log(social.value)
            listOfSocialInput.push(social.value)
        }
        localStorage.setItem('arrayOfSocialMedia', listOfSocialInput)
    });
}


