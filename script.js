let galleryArr = document.getElementsByClassName("gallery-item");

console.log(galleryArr);

let pos = 0;
galleryArr[0].style.display = "flex";

const Next = () => {
  if (pos === galleryArr.length - 1) {
    galleryArr[pos].style.display = "none";
    pos = 0;
    galleryArr[pos].style.display = "flex";
  } else {
    galleryArr[pos].style.display = "none";
    pos++;
    galleryArr[pos].style.display = "flex";
  }
};

const Prev = () => {
  if (pos === 0) {
    galleryArr[pos].style.display = "none";
    pos = galleryArr.length - 1;
    galleryArr[pos].style.display = "flex";
  } else {
    galleryArr[pos].style.display = "none";
    pos--;
    galleryArr[pos].style.display = "flex";
  }
};
