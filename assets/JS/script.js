let root = document.querySelector(".article-list");

articles['list'].forEach(item => {
    // let author = document.createElement("")

    // let heading = document.createElement("h2");
    // heading.classList.add("heading");
    // heading.innerText = article['heading'];

    // let text = document.createElement("p");
    // text.classList.adc("text");
    // text.innerText = article["description"];

    let article = document.createElement("article");
    article.classList.add("article");
    article.innerHTML = `
                        <div>
                            <span class="author">${item["author"]}</span>
                            <span class="date">${item["datePublished"]}</span>
                        </div>
                        <h2 class="heading">${item["heading"]}</h2>
                        <p class="text">${item["description"]}</p>`

    root.append(article);
});