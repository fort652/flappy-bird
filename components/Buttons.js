export class GameButton extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Button";
    const route = this.getAttribute("route") || "";
    const image = this.getAttribute("image") || "";

    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const assetsPath = isInPagesFolder ? "../" : "";

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
}

customElements.define("game-button", GameButton);
