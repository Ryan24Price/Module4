function addCard(title = "Untitled", text = "Missing text") {
    const template = document.getElementById("card-template").content.cloneNode(true);

    template.querySelector('.card-title').innerText =title;
    template.querySelector('.card-text').innerText =text;

    document.querySelector('#card-list').appendChild(template);
  }

  addCard("First title", "Cool beans");
  addCard("Second title", "Cooler beans");
  addCard("Third title", "Coolest beans");