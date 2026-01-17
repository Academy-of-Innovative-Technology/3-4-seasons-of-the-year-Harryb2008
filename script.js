const seasons = [
  {
    name: "Winter",
    months: ["December", "January", "February"],
    images: [
      "https://images.unsplash.com/photo-1608889175123-8eea4c1b6c73",
      "https://images.unsplash.com/photo-1489587027915-9e64b9e0b7c2",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    ]
  },
  {
    name: "Spring",
    months: ["March", "April", "May"],
    images: [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    ]
  },
  {
    name: "Summer",
    months: ["June", "July", "August"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ]
  },
  {
    name: "Fall",
    months: ["September", "October", "November"],
    images: [
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
      "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
      "https://images.unsplash.com/photo-1508163223045-1880bc36e222"
    ]
  }
];



const grid = document.querySelector("#seasonGrid");


seasons.forEach(season => {

  let seasonHTML = `
    <div class="season">
      <h2>${season.name}</h2>
      <div class="months">${season.months.join(", ")}</div>
  `;

  
  for (let i = 0; i < season.images.length; i++) {
    seasonHTML += `<img src="${season.images[i]}" alt="${season.name} image">`;
  }

  seasonHTML += `</div>`;

  
  grid.insertAdjacentHTML("beforeend", seasonHTML);
});
