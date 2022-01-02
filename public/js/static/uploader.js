let formGenre;

function readFileAsText(file) {}
const genre = document.querySelector(".upload-categories");
genre.addEventListener("change", function() {
  console.log(this.value);
  formGenre = this.value;
});

const uploaderButton = document.querySelector(".upload-button");
uploaderButton.addEventListener("change", (event) => {
  let files = event.currentTarget.files;
  let fileArray = [];
  let photoObject = [];
  if (!files.length) return;

  for (let i = 0; i < files.length; i++) {
    fileArray.push(URL.createObjectURL(files[i]));
  }
  fileArray.forEach((blob) => {
    photoObject.push({ src: blob });
    console.log(photoObject);

    //call uploadFile here, and pass in formGenre as the foldername!
  });
});
