let news = [
    { id: 1, title: "Election Results", content: "Newly elected minister..." },
    { id: 2, title: "Sporting Success", content: "World Cup winners..." },
    { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
  ];
  
  function getNews() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(news);
      }, 5000);
    });
  }
  
  function addCard(theNews) {
    const template = document .getElementById("news-template").content.cloneNode(true);
  
    template.querySelector(".card-title").innerText = theNews.title;
    template.querySelector(".card-text").innerText = theNews.content;
  
    document.querySelector("#news-list").appendChild(template);
  }
  
  function submitNews() {
      const newsTitle = document.getElementById("newsTitle").value;
      const newsContent = document.getElementById("newsContent").value;
      const newId = news.length + 1;
      news.push(newNewsItem);
      document.getElementById("newsTitle").value = "";
      document.getElementById("newsContent").value = "";
    
        addCard(newNewsItem);
      }  
      
        getNews().then((moreNews) => moreNews.forEach((theNews) => addCard(theNews)));
  
  
 