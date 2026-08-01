// Drop your own hero images into /images and list their filenames here.
// The two layers crossfade between images in this array on a timer.
const heroImages = [
  "images/hero-1.jpg",
  "images/hero-2.jpg",
  "images/hero-3.jpg"
];

const CYCLE_MS = 5000;

const layerA = document.getElementById("heroLayerA");
const layerB = document.getElementById("heroLayerB");

let index = 0;
let showingA = true;

function setLayerImage(layer, src) {
  layer.style.backgroundImage = `url("${src}")`;
}

if (heroImages.length > 0) {
  setLayerImage(layerA, heroImages[0]);
  layerA.classList.add("is-active");
}

if (heroImages.length > 1) {
  setInterval(() => {
    index = (index + 1) % heroImages.length;
    const nextLayer = showingA ? layerB : layerA;
    const currentLayer = showingA ? layerA : layerB;

    setLayerImage(nextLayer, heroImages[index]);
    nextLayer.classList.add("is-active");
    currentLayer.classList.remove("is-active");

    showingA = !showingA;
  }, CYCLE_MS);
}
