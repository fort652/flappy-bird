export class PlayButton extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Button";
    const route = this.getAttribute("route") || "";
    const image = this.getAttribute("image") || "";

    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const assetsPath = isInPagesFolder ? "../" : "";

    this.innerHTML = `
      <button 
        onclick="window.location.href='${route}'" 
        class=" w-[300px] h-[150px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 bg-yellow-400 border-3 border-orange-500 rounded-3xl p-0"
        title="${title}"
      >
        ${
          image
            ? `<img src="${assetsPath}${image}" alt="${title}" class="w-[100px] h-[100px] object-contain m-auto">`
            : ""
        }
      </button>
    `;
  }
}

customElements.define("play-button", PlayButton);
