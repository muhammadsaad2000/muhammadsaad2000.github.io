const games = [
    {
      name: "Midterm Project",
      url: "https://msaad10.itch.io/saad-muhammad-midterm",
      embed: "https://itch.io/embed-upload/11461026?color=333333",
      description: "A creative midterm game showcasing interactive mechanics and design."
    },
    {
      name: "Jungle Runner",
      url: "https://msaad10.itch.io/jungle-runner",
      embed: "https://itch.io/embed-upload/11208744?color=333333",
      description: "Dash through the jungle, avoid obstacles, and collect rewards!"
    },
    {
      name: "COMP Game",
      url: "https://msaad10.itch.io/comp",
      embed: "https://itch.io/embed-upload/11706398?color=333333",
      description: "A class project exploring core gameplay programming concepts."
    },
    {
      name: "Assignment 2",
      url: "https://msaad10.itch.io/muhammadsaadassignment2",
      embed: "https://itch.io/embed-upload/11615231?color=333333",
      description: "Gameplay project focusing on platformer mechanics and level design."
    },
    {
      name: "Lab 07 Project",
      url: "https://msaad10.itch.io/lab07",
      embed: "https://itch.io/embed-upload/11644027?color=333333",
      description: "A lab experiment in Unity exploring AI and enemy behaviors."
    },
    {
      name: "Warscape Beta",
      url: "https://muhammads2000.itch.io/warscape-beta",
      embed: "https://itch.io/embed-upload/11335057?color=333333",
      description: "A multiplayer sci-fi shooter in development. Welcome to the battlefield!"
    },
    {
      name: "Immune Odyssey",
      url: "https://bastyle.github.io/ImmuneOdyssey-live/",
      embed: "https://bastyle.github.io/ImmuneOdyssey-live/",
      description: "Play as a white blood cell in this science-based action adventure."
    }
  ];
  
  const gallery = document.getElementById("game-gallery");
  
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
  
    const isItchEmbed = game.embed.includes("itch.io/embed-upload");
  
    card.innerHTML = `
      <div class="game-header">
        <span>${game.name}</span>
        <a class="play-link" href="${game.url}" target="_blank">Visit</a>
      </div>
      <div class="game-description">${game.description}</div>
      ${isItchEmbed 
        ? `<iframe src="${game.embed}" allowfullscreen></iframe>` 
        : `<iframe src="${game.embed}" sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-forms" allowfullscreen></iframe>`}
    `;
  
    gallery.appendChild(card);
  });
  