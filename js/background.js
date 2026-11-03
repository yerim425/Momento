const images = ["01.png", "02.png", "03.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.classList = "background";
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);