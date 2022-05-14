const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg",
    "./images/img4.jpg",
  ];
  
  let i = 0;
  
  function nextImg() {
    if (i >= images.length - 1) {
      i = 0;
      document.getElementById("image").src = images[i];
    } else {
      i++;
      document.getElementById("image").src = images[i];
    }
  }
  
  function previousImg() {
    if (i <= 0) {
      i = images.length - 1;
      document.getElementById("image").src = images[i];
    } else {
      i--;
      document.getElementById("image").src = images[i];
    }
  }
  
  function showImg(n) {
      i = n;
      document.getElementById("image").src = images[i];}