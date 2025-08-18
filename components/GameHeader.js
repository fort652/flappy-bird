export class GameHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Game";
    const route = this.getAttribute("route") || "";

    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const assetsPath = isInPagesFolder
      ? "../assets/images/back.png"
      : "assets/images/back.png";

    this.innerHTML = `
      <header style="position: relative; width: 100%; height: 150px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
        ${
          route
            ? `
        <button onclick="window.location.href='${route}'" style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); background-color: transparent; border: none;">
          <img src="${assetsPath}" alt="Back" style="width: 100px; height: 100px;">
        </button>
        `
            : ""
        }
        <h1 style="color: #333; font-size: 60px;">${title}</h1>
      </header>
    `;
  }
}

customElements.define("game-header", GameHeader);
