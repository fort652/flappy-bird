export class GameButton extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Button";
    const route = this.getAttribute("route") || "";
    const image = this.getAttribute("image") || "";
    const id = this.getAttribute("id") || "";

    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const assetsPath = isInPagesFolder ? "../" : "";

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
          <img src="${assetsPath}assets/images/characters/default.png" alt="${title}" class="w-full h-full object-contain" id="selectedCharacterImage">
        </div>
      </button>
    `;

    this.loadSelectedCharacter(assetsPath);
  }

  loadSelectedCharacter(assetsPath) {
    const characterImage = this.querySelector("#selectedCharacterImage");
    if (!characterImage) return;

    const selectedCharacter =
      localStorage.getItem("flappyBirdCharacter") || "default";

    const characterImages = {
      default: "assets/images/characters/default.png",
      blue: "assets/images/characters/blue-bird.png",
      purple: "assets/images/characters/purple-bird.png",
      golden: "assets/images/characters/tweety.png",
    };

    const imagePath =
      characterImages[selectedCharacter] || characterImages["default"];
    characterImage.src = `${assetsPath}${imagePath}`;
  }
}

customElements.define("game-button", GameButton);
