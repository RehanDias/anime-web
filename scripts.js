document.addEventListener("DOMContentLoaded", function () {
   fetch("animeList.json")
      .then((response) => response.json())
      .then((data) => {
         const animeListContainer = document.getElementById("animeList");

         data.forEach((anime) => {
            const card = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${anime.poster}" class="card-img-top" alt="${anime.title}">
                        <div class="card-body">
                            <h5 class="card-title">${anime.title}</h5>
                            <p class="card-text">Episode: ${anime.episode}</p>
                         <a href="${anime.link}" class="btn btn-primary stretched-link button">Watch</a>
                        </div>
                    </div>
                </div>
            `;
            animeListContainer.innerHTML += card;
         });
      })
      .catch((error) => console.log("Error fetching anime data:", error));
});
