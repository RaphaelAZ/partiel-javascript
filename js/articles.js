class Articles {
    constructor() {
        this.retrieveArticlesNumber();
        this.loadArticles();
    }

    retrieveArticlesNumber() {
        const articles = document.querySelectorAll("#content > article");
        let informationContainer = document.querySelector('#information > #chapters > span');
        informationContainer.innerHTML = `[${articles.length}] chapitres`;
    }

    loadArticles() {
        const articlesContent = document.querySelectorAll("#content > article > p");
    
        articlesContent.forEach(article => {
            article.style.display = "none";
        });
    
        const articlesTitles = document.querySelectorAll("#content > article > h2");
        articlesTitles.forEach((title, index) => {
            title.addEventListener("click", function() {
                articlesContent[index].style.display === 'block' ? articlesContent[index].style.display = 'none' : articlesContent[index].style.display = 'block';
            });
        })
    }
}

export default Articles;