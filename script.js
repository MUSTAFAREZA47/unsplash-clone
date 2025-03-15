const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];

// Loading
// function loading() {
//   loader.hidden = false;
//   imageContainer.hidden = true;
// }

// // complete Loading
// function complete() {
//   loader.hidden = true;
//   imageContainer.hidden = false;
// }

// Unsplash API
const count = 30;
const apiKey = "b8HbiEfRxZcXm3AYSQzH3QkWUx3AWesqq8WsuzA-Om0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create element for links and photo and dom
function displayPhotos() {
//   loading();
  photoArray.forEach((photo) => {
    // create <a></a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    // create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("atl", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // put <img> inside <a></a> then put both inside imageContainer elemet
    item.appendChild(img);
    imageContainer.appendChild(item);
    // complete();
  });
}

// Get photo from Unsplash API
async function getPhoto() {
//   loading();
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    // console.log(photoArray);
    displayPhotos();
  } catch (error) {
    console.log("whoopps, Error found --->", error);
  }
}

const loadMoreBtn = document.getElementById('load-more')

loadMoreBtn.addEventListener('click', () => {
    getPhoto()
})

// On Load
getPhoto();
