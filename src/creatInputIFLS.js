function creatInput(mediaName){
    return `<div class="form-floating mb-3">
    <input type="text" class="form-control" id="${mediaName}" >
    <label for="${mediaName}">Llink to ${mediaName} </label>
  </div>`
   
}

function buildInputsSocialMedia(){
    const listOfChocenSocial = localStorage.arrayOfSocialMedia.split(",")
    const mainPage = document.getElementById('eilon')
    listOfChocenSocial.forEach(media => {
         
        mainPage.innerHTML += (creatInput(media))
    });
}


addEventListener('DOMContentLoaded', buildInputsSocialMedia);