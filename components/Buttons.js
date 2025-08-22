export class GameButton extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Button";
    const route = this.getAttribute("route") || "";
    const image = this.getAttribute("image") || "";
    const id = this.getAttribute("id") || "";

    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const assetsPath = isInPagesFolder ? "../" : "";

    // Special handling for character button
    if (id === "characterButton") {
      this.renderCharacterButton(assetsPath, title, route);
    } else {
      this.renderNormalButton(assetsPath, title, route, image);
    }
  }

  renderNormalButton(assetsPath, title, route, image) {
    this.innerHTML = `
      <button 
        onclick="window.location.href='${route}'" 
        class="w-32 h-32 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 bg-transparent border-none p-0"
        title="${title}"
      >
        ${
          image
            ? `<img src="${assetsPath}${image}" alt="${title}" class="w-full h-full object-contain">`
            : ""
        }
      </button>
    `;
  }

  renderCharacterButton(assetsPath, title, route) {
    this.innerHTML = `
      <button 
        onclick="window.location.href='${route}'" 
        class="w-32 h-32 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 bg-transparent border-none p-0"
        title="${title}"
      >
        <div id="characterImage" class="w-full h-full flex items-center justify-center">
          <img src="${assetsPath}assets/images/tweety.png" alt="${title}" class="w-full h-full object-contain" id="selectedCharacterImage">
        </div>
      </button>
    `;
    
    // Load and display the selected character
    this.loadSelectedCharacter(assetsPath);
  }

  loadSelectedCharacter(assetsPath) {
    const characterImage = this.querySelector("#selectedCharacterImage");
    if (!characterImage) return;

    // Get the selected character from localStorage
    const selectedCharacter = localStorage.getItem("flappyBirdCharacter") || "default";
    
    // Map character IDs to image paths
    const characterImages = {
      "default": "assets/images/tweety.png",
      "blue": "assets/images/blue-bird.png",
      "purple": "assets/images/purple-bird.png",
      "golden": "assets/images/tweety.png", // Using tweety as placeholder for now
      "rainbow": "assets/images/tweety.png", // Using tweety as placeholder for now
      "ninja": "assets/images/tweety.png", // Using tweety as placeholder for now
      "giant": "assets/images/tweety.png", // Using tweety as placeholder for now
      "mini": "assets/images/tweety.png" // Using tweety as placeholder for now
    };

    const imagePath = characterImages[selectedCharacter] || characterImages["default"];
    characterImage.src = `${assetsPath}${imagePath}`;
  }
}

customElements.define("game-button", GameButton);
