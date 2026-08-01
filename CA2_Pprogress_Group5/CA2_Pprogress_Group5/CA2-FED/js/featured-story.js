// Picks one story at random to spotlight in the hero's "Pick a Random Story" card.
// Add an entry here as each story gets its own banner image — 8 total once all are ready.
const featuredStories = [
  {
    title: "The Christmas Truce of 1914",
    blurb: "Soldiers on the Western Front laid down their rifles for one unordered night of peace.",
    image: "images/web-xmas-truce-1-ap.avif",
    link: "story1.html"
  },
  {
    title: "Apollo-Soyuz: A Handshake in Orbit",
    blurb: "At the height of the Cold War, two rival space programs docked in orbit and shook hands.",
    image: "images/10-apollo-soyuz-docking-1975.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg",
    link: "story2.html"
  }
];

const pick = featuredStories[Math.floor(Math.random() * featuredStories.length)];

document.getElementById("featuredImg").src = pick.image;
document.getElementById("featuredTitle").textContent = pick.title;
document.getElementById("featuredBlurb").textContent = pick.blurb;
document.getElementById("featuredCard").href = pick.link;
