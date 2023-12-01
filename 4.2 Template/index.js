function addCard(title, content) {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    template.querySelector(".card-title").innerText = title;
  
    const cardBody = template.querySelector(".card-body");
  
    if (typeof content === "string") {
      // Template
      if (content.startsWith("http://") || content.startsWith("https://")) {
        // add the image
        const img = document.createElement("img");
        img.src = content;
        img.alt = title;
        img.style.width = "100%";
        cardBody.appendChild(img);
      } else {
        // If content is text, add a paragraph
        const textElement = document.createElement("p");
        textElement.innerText = content;
        cardBody.appendChild(textElement);
      }
    } else if (content instanceof Element) {
      // If content is a DOM element, append it directly
      cardBody.appendChild(content);
    }
  
    document.querySelector("#card-list").appendChild(template);
  }
  
  const data = [
    { name: "Bob", age: 23 },
    { name: "Alice", age: 39 },
    { name: "Jacob", age 42 },
    { name: " Crystal", age 27 },
  ];
  
//   data.forEach((person) => {
//     addCard(title, text)}`);
//   });
  
  const artist = [
    {
      name: "Van Gogh",
      portfolio: [
        {
          title: "portrait",
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        },
        {
          title: "sky",
          url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        },
      ],
    },
    {
      name: "Michelangelo",
      portfolio: [
        {
          title: "Pieta",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pieta_de_Michelangelo_-_Vaticano.jpg/220px-Pieta_de_Michelangelo_-_Vaticano.jpg",
        },
        {
          title: "David",
          url: "https://en.wikipedia.org/wiki/File:Michelangelo%27s_David_-_right_view_2.jpg",
        },
      ],
    },
    {
      name: "Titian",
      portfolio: [
        {
          title: "A Man with a Quitted Sleeve",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Titian_-_Portrait_of_a_man_with_a_quilted_sleeve.jpg/220px-Titian_-_Portrait_of_a_man_with_a_quilted_sleeve.jpg",
        },
        {
          title: "Sacred and Profane Love",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tizian_029.jpg/220px-Tizian_029.jpg",
        },
      ],
    },
  ];
  
  artist.forEach((person) => {
    person.portfolio.forEach((item) => {
      const title = person.name;
      const text = item.title;
      const url = item.url;
      addCard(title, text, url);
    });
  });