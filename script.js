AOS.init({ duration: 850, once: true, offset: 70 });

const imageSources = {
  ajanta: "https://commons.wikimedia.org/wiki/Special:FilePath/Painting%20in%20Ajanta%20Cave%201-70.jpg?width=1000",
  sanchi: "https://commons.wikimedia.org/wiki/Special:FilePath/Stone%20relief%20depicting%20a%20stupa%20at%20Sanchi.jpg?width=1000",
  elephanta: "https://commons.wikimedia.org/wiki/Special:FilePath/Trimurti%20sculpture%20in%20Cave%201%20of%20Elephanta%20Caves.jpg?width=1000",
  chola: "https://commons.wikimedia.org/wiki/Special:FilePath/Nataraja%2C%20Chola%20period%20bronze%2C%2011th%20century%2C%20Government%20Museum%2C%20Chennai%20%287%29.jpg?width=1000",
  temple: "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshmana%20Temple%20Sculpture%2C%20Khajuraho%2C%20India%2002.jpg?width=1000",
  mughal: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20Ahmad-Shah%20Durrani.%20Mughal%20miniature.%20ca.%201757%2C%20Biblioth%C3%A8que%20nationale%20de%20France%20%28cropped%29.jpg?width=1000",
  rajput: "https://commons.wikimedia.org/wiki/Special:FilePath/Miniature%20painting%20of%20Raja%20Baj%20Bahadur%2C%20Kangra%2C%20Punjab%20Hills%2C%20circa%20early-19th%20century.jpg?width=1000",
  madhubani: "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani%20painting%20by%20Bhuvana%20Meenakshi.jpg?width=1000",
  warli: "https://commons.wikimedia.org/wiki/Special:FilePath/Warli%20painting.jpg?width=1000",
  gond: "https://commons.wikimedia.org/wiki/Special:FilePath/Gond%20art.jpg?width=1000",
  phad: "https://commons.wikimedia.org/wiki/Special:FilePath/Pabuji%20ka%20phad%2001.JPG?width=1000",
  pattachitra: "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra%20Painting%20%2817041543331%29.jpg?width=1000"
};

const artifacts = [
  { id: 1, title: "Ajanta Cave Paintings", category: "Ancient", date: "2nd century BCE – 6th century CE", period: "Ancient India", region: "Maharashtra", material: "Mineral pigments on plaster", image: imageSources.ajanta, description: "Narrative murals showing Buddhist stories, human figures, animals and decorative motifs.", history: "Ajanta developed in two major phases and became an important centre of Buddhist painting and sculpture.", features: "Expressive faces, flowing lines, narrative scenes and earthy pigments.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Painting_in_Ajanta_Cave_1-70.jpg" },
  { id: 2, title: "Sanchi Stupa Reliefs", category: "Ancient", date: "3rd century BCE – 1st century CE", period: "Mauryan / Early Buddhist", region: "Madhya Pradesh", material: "Sandstone", image: imageSources.sanchi, description: "Relief sculpture and gateways communicate Buddhist teachings through symbols and stories.", history: "Sanchi grew as a Buddhist religious complex with stupas, railings and richly carved gateways.", features: "Narrative reliefs, symbolic representation and stone carving.", credit: "UNESCO reference; image representative", source: "https://commons.wikimedia.org/wiki/File:Stone_relief_depicting_a_stupa_at_Sanchi.jpg" },
  { id: 3, title: "Elephanta Cave Sculpture", category: "Ancient", date: "5th – 6th century CE", period: "Early Medieval", region: "Maharashtra", material: "Rock-cut basalt", image: imageSources.elephanta, description: "Monumental rock-cut sculpture connected with Shaiva traditions, including large reliefs of Shiva.", history: "The caves on Elephanta Island contain major examples of rock-cut architecture and religious sculpture.", features: "High relief, monumental scale, symbolic gestures and rock-cut technique.", credit: "Wikimedia Commons / UNESCO reference", source: "https://commons.wikimedia.org/wiki/File:Trimurti_sculpture_in_Cave_1_of_Elephanta_Caves.jpg" },
  { id: 4, title: "Chola Bronze Nataraja", category: "Medieval", date: "10th – 12th century CE", period: "Chola Period", region: "Tamil Nadu", material: "Bronze; lost-wax casting", image: imageSources.chola, description: "A dynamic image of Shiva as the cosmic dancer, balancing movement, symbolism and refined metalwork.", history: "Chola workshops developed highly sophisticated bronze casting traditions for temple worship and processions.", features: "Graceful posture, symbolic attributes, ornamentation and lost-wax casting.", credit: "Richard Mortel / Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Nataraja,_Chola_period_bronze,_11th_century,_Government_Museum,_Chennai_(7).jpg" },
  { id: 5, title: "Temple Sculpture", category: "Medieval", date: "7th – 13th century CE", period: "Temple Art", region: "South India", material: "Stone", image: imageSources.temple, description: "Architectural sculpture integrates figures, mythology and ornament into temple spaces.", history: "Indian temple traditions used sculpture to communicate religious narratives and decorate architectural surfaces.", features: "Carved figures, decorative borders, mythological scenes and architectural integration.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Lakshmana_Temple_Sculpture,_Khajuraho,_India_02.jpg" },
  { id: 6, title: "Mughal Miniature Painting", category: "Medieval", date: "16th – 18th century", period: "Mughal Period", region: "North India", material: "Pigment on paper", image: imageSources.mughal, description: "Detailed miniature painting combines fine brushwork, portraiture, courtly scenes and decorative borders.", history: "Mughal painting developed through interactions between Persian, Indian and Central Asian artistic traditions.", features: "Fine outlines, layered pigments, royal portraits, textiles and botanical detail.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Portrait_of_Ahmad-Shah_Durrani._Mughal_miniature._ca._1757,_Bibliothèque_nationale_de_France_(cropped).jpg" },
  { id: 7, title: "Rajput Miniature Painting", category: "Medieval", date: "16th – 19th century", period: "Rajput Courts", region: "Rajasthan", material: "Natural pigments on paper", image: imageSources.rajput, description: "Courtly and devotional scenes use strong colours, stylised landscapes and carefully arranged figures.", history: "Rajput painting developed in regional courts with themes from epics, devotion, nature and royal life.", features: "Flat colour fields, decorative landscapes, expressive gestures and narrative composition.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Miniature_painting_of_Raja_Baj_Bahadur,_Kangra,_Punjab_Hills,_circa_early-19th_century.jpg" },
  { id: 8, title: "Madhubani Painting", category: "Folk", date: "Traditional; associated with Mithila", period: "Folk Tradition", region: "Bihar", material: "Natural colours on paper, cloth or walls", image: imageSources.madhubani, description: "Mithila painting uses strong outlines, repeated patterns and symbolic images from nature and mythology.", history: "Madhubani painting has been maintained by communities in the Mithila region and adapted to contemporary materials.", features: "Double lines, filled patterns, fish, birds, flowers and symbolic figures.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Madhubani_painting.jpg" },
  { id: 9, title: "Warli Painting", category: "Folk", date: "Traditional; Maharashtra", period: "Tribal Tradition", region: "Maharashtra", material: "White rice paste on mud-coloured background", image: imageSources.warli, description: "Geometric figures portray farming, dancing, rituals, animals and community life.", history: "Warli painting is associated with Warli communities and is traditionally connected with walls and ceremonial spaces.", features: "Circles, triangles, stick-like figures, rhythmic movement and community scenes.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Warli_painting.jpg" },
  { id: 10, title: "Gond Painting", category: "Folk", date: "Traditional; central India", period: "Tribal Tradition", region: "Madhya Pradesh", material: "Natural pigments, paper or canvas", image: imageSources.gond, description: "Gond art transforms animals, trees and stories into patterned compositions inspired by nature.", history: "Gond artists use line, dot and pattern to express relationships between people, animals and the natural world.", features: "Dotted textures, rhythmic patterns, animals, plants and symbolic storytelling.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Gond_art.jpg" },
  { id: 11, title: "Phad Painting", category: "Folk", date: "Traditional; Rajasthan", period: "Folk Narrative Art", region: "Rajasthan", material: "Painted cloth scroll", image: imageSources.phad, description: "Large narrative scrolls present stories of local heroes and deities through sequential visual scenes.", history: "Phad painting is connected with travelling storytelling traditions in Rajasthan.", features: "Horizontal narrative layout, bold colours, multiple figures and storytelling composition.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/Category:Phad_painting" },
  { id: 12, title: "Pattachitra Painting", category: "Folk", date: "Traditional; Odisha", period: "Folk and Temple Art", region: "Odisha", material: "Cloth prepared with chalk and natural pigments", image: imageSources.pattachitra, description: "Pattachitra is known for precise lines, decorative borders and stories connected with Jagannath traditions.", history: "The painting tradition developed around temple culture and continues through hereditary artist communities.", features: "Decorative borders, mythological narratives, stylised faces and natural colours.", credit: "Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Pattachitra_Painting_(17041543331).jpg" }
];

const galleryContainer = document.getElementById("galleryContainer");
const searchInput = document.getElementById("searchInput");
let selectedCategory = "All";

function safeImage() {
  return `onerror="this.onerror=null;this.classList.add('image-unavailable')"`;
}

function displayArtifacts(list) {
  galleryContainer.innerHTML = list.length ? "" : `<div class="col-12 text-center py-5"><h4>No artwork found</h4><p>Try a different search word or category.</p></div>`;
  list.forEach((artifact, index) => {
    const column = document.createElement("div");
    column.className = "col-lg-4 col-md-6";
    column.setAttribute("data-aos", "fade-up");
    column.setAttribute("data-aos-delay", String((index % 3) * 80));
    column.innerHTML = `
      <article class="art-card">
        <div class="art-image-wrap">
          <img src="${artifact.image}" ${safeImage(artifact.image)} alt="${artifact.title}" loading="lazy">
          <span class="image-label">Virtual Collection</span>
        </div>
        <div class="art-card-content">
          <span class="art-category">${artifact.category}</span>
          <h3>${artifact.title}</h3>
          <p>${artifact.description}</p>
          <div class="artifact-meta"><span>📍 ${artifact.region}</span><span>⌛ ${artifact.period}</span></div>
          <button class="btn primary-btn" onclick="showArtifactDetails(${artifact.id})">Explore Artifact →</button>
        </div>
      </article>`;
    galleryContainer.appendChild(column);
  });
  AOS.refresh();
}

function applyFilters() {
  const searchText = searchInput.value.toLowerCase().trim();
  const filtered = artifacts.filter((artifact) => {
    const matchesCategory = selectedCategory === "All" || artifact.category === selectedCategory;
    const searchable = `${artifact.title} ${artifact.category} ${artifact.region} ${artifact.period} ${artifact.material}`.toLowerCase();
    return matchesCategory && searchable.includes(searchText);
  });
  displayArtifacts(filtered);
  const count = document.getElementById("resultCount");
  if (count) count.textContent = `${filtered.length} artifacts displayed`;
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedCategory = button.dataset.filter;
    applyFilters();
  });
});
searchInput.addEventListener("input", applyFilters);

function showArtifactDetails(id) {
  const artifact = artifacts.find((item) => item.id === id);
  if (!artifact) return;
  document.getElementById("modalTitle").textContent = artifact.title;
  document.getElementById("modalBody").innerHTML = `
    <img src="${artifact.image}" ${safeImage(artifact.image)} alt="${artifact.title}">
    <div class="detail-badges"><span>${artifact.category}</span><span>${artifact.date}</span></div>
    <h3>${artifact.title}</h3>
    <p><strong>Region:</strong> ${artifact.region}</p>
    <p><strong>Material / Technique:</strong> ${artifact.material}</p>
    <h5>About the Artwork</h5><p>${artifact.description}</p>
    <h5>Historical Context</h5><p>${artifact.history}</p>
    <h5>Key Features</h5><p>${artifact.features}</p>
    <p class="credit">Image credit: ${artifact.credit} | <a href="${artifact.source}" target="_blank" rel="noopener noreferrer">View source / reference</a></p>`;
  new bootstrap.Modal(document.getElementById("artifactModal")).show();
}

window.showArtifactDetails = showArtifactDetails;

document.querySelectorAll(".timeline-period").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".timeline-period").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.period;
    const target = category === "All" ? artifacts : artifacts.filter((item) => item.category === category);
    displayTimelineArtifacts(target);
  });
});

function displayTimelineArtifacts(list) {
  const timelineDetails = document.getElementById("timelineDetails");
  if (!timelineDetails) return;
  timelineDetails.innerHTML = list.map((artifact) => `
    <button class="timeline-detail" onclick="showArtifactDetails(${artifact.id})">
      <span class="timeline-year">${artifact.date}</span><strong>${artifact.title}</strong><small>${artifact.region} · View details ↗</small>
    </button>`).join("");
}

displayTimelineArtifacts(artifacts);
displayArtifacts(artifacts);

const quizQuestions = [
  { question: "Where are the Ajanta Caves located?", answers: ["Maharashtra", "Kerala", "Punjab", "Assam"], correct: 0 },
  { question: "Madhubani painting is associated with which region?", answers: ["Rajasthan", "Mithila", "Kashmir", "Goa"], correct: 1 },
  { question: "Warli painting is traditionally associated with which state?", answers: ["Maharashtra", "Tamil Nadu", "Odisha", "Punjab"], correct: 0 },
  { question: "Which technique is associated with Chola bronze sculpture?", answers: ["Wood printing", "Lost-wax casting", "Digital painting", "Glass blowing"], correct: 1 },
  { question: "Phad painting is traditionally associated with which state?", answers: ["Rajasthan", "Bihar", "Assam", "Goa"], correct: 0 }
];
let currentQuestion = 0, score = 0, answered = false;
const questionNumber = document.getElementById("questionNumber"), questionText = document.getElementById("questionText"), answerButtons = document.getElementById("answerButtons"), quizResult = document.getElementById("quizResult"), nextButton = document.getElementById("nextButton"), restartButton = document.getElementById("restartButton");
function loadQuestion() { answered = false; quizResult.textContent = ""; const current = quizQuestions[currentQuestion]; questionNumber.textContent = `QUESTION ${currentQuestion + 1} / ${quizQuestions.length}`; questionText.textContent = current.question; answerButtons.innerHTML = ""; current.answers.forEach((answer, index) => { const button = document.createElement("button"); button.className = "answer-btn"; button.textContent = answer; button.addEventListener("click", () => checkAnswer(index, button)); answerButtons.appendChild(button); }); }
function checkAnswer(selected, selectedButton) { if (answered) return; answered = true; const current = quizQuestions[currentQuestion]; const buttons = document.querySelectorAll(".answer-btn"); buttons.forEach((button) => button.disabled = true); if (selected === current.correct) { selectedButton.classList.add("correct"); quizResult.textContent = "Correct answer! 🎉"; score++; } else { selectedButton.classList.add("wrong"); buttons[current.correct].classList.add("correct"); quizResult.textContent = "Not quite! The correct answer is highlighted."; } }
nextButton.addEventListener("click", () => { if (!answered) { quizResult.textContent = "Please select an answer first."; return; } currentQuestion++; if (currentQuestion < quizQuestions.length) loadQuestion(); else { questionNumber.textContent = "QUIZ COMPLETED"; questionText.textContent = `Your Score: ${score} / ${quizQuestions.length}`; answerButtons.innerHTML = ""; quizResult.textContent = "Thank you for exploring Indian art!"; nextButton.style.display = "none"; restartButton.style.display = "inline-block"; } });
restartButton.addEventListener("click", () => { currentQuestion = 0; score = 0; nextButton.style.display = "inline-block"; restartButton.style.display = "none"; loadQuestion(); });
loadQuestion();
