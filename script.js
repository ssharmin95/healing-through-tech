const encouragements = [
  "You're stronger than you know! 🌟",
  "One small step is still progress. 💪",
  "Breathe, you are doing amazing. 🌈",
  "Your story matters. 💖",
  "Keep going, better days are coming. ☀️"
];

function showSection(sectionId) {
  // Hide all content sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

function generateMessage() {
  const message = encouragements[Math.floor(Math.random() * encouragements.length)];
  const messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.innerText = message;
  }
}

function findResources() {
  const zip = document.getElementById('zip').value;
  const results = {
    '10001': ['🥫 Food Pantry: 123 Main St', '🧾 Social Security Office: 456 Broadway', '🏛 HRA Office: 89 W 14th St', '👵 Senior Center: 200 10th Ave'],
    '11201': ['🏛 HRA Office: 789 Court St', '👵 Senior Center: 321 Atlantic Ave', '🥫 Food Pantry: 55 Jay St', '🧾 Social Security Office: 88 Livingston St']
  };
  const output = results[zip] ? results[zip].join('<br>') : 'No results found for this ZIP. Try 211.org or call 311 for NYC resources.';
  const resultsElement = document.getElementById('resourceResults');
  if (resultsElement) {
    resultsElement.innerHTML = `<p>${output}</p>`;
  }
}

function openKindBot() {
  window.open('https://chat.openai.com/g/g-zDtz5y0rm-listening-companion', '_blank');
}

function toggleDropdown() {
  const dropdown = document.getElementById("resourceDropdown");
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
}

function showResourceType(type) {
  // Show the resources section
  showSection('resources');
  
  // Update the resource results with the selected type
  const resultsElement = document.getElementById("resourceResults");
  if (resultsElement) {
    resultsElement.innerHTML = `<h3>Showing: ${type.replace('-', ' ')}</h3><p>Enter a ZIP code above to find ${type.replace('-', ' ')} resources in your area.</p>`;
  }
  
  // Close the dropdown
  const dropdown = document.getElementById("resourceDropdown");
  if (dropdown) {
    dropdown.style.display = "none";
  }
}

function randomStretch() {
  const stretches = [
    { name: "Neck Rolls", description: "Roll slowly clockwise, then counter-clockwise.", emoji: "🪑" },
    { name: "Shoulder Shrugs", description: "Raise and drop shoulders.", emoji: "👐" },
    { name: "Side Bends", description: "Reach and lean to the side.", emoji: "🙆" },
    { name: "Hamstring Stretch", description: "Reach toward your toes.", emoji: "🦵" },
    { name: "Child's Pose", description: "Kneel and stretch forward.", emoji: "🧘" }
  ];
  
  const randomStretch = stretches[Math.floor(Math.random() * stretches.length)];
  const stretchText = document.getElementById('randomStretchText');
  if (stretchText) {
    stretchText.innerHTML = `<strong>${randomStretch.emoji} ${randomStretch.name}</strong><br>${randomStretch.description}`;
  }
  
  // Highlight the corresponding stretch card
  highlightStretchCard(randomStretch.name);
}

function highlightStretchCard(stretchName) {
  // Remove any existing highlights
  document.querySelectorAll('.stretch-card').forEach(card => {
    card.style.border = '1px solid #e0e0e0';
    card.style.backgroundColor = 'white';
  });
  
  // Find and highlight the matching card
  const cards = document.querySelectorAll('.stretch-card h4');
  cards.forEach((title, index) => {
    if (title.textContent.includes(stretchName)) {
      const card = title.closest('.stretch-card');
      if (card) {
        card.style.border = '2px solid #f67280';
        card.style.backgroundColor = '#fff5f5';
      }
    }
  });
}

// Initialize the page with encouragement section
document.addEventListener('DOMContentLoaded', function() {
  showSection('encouragement');
});
