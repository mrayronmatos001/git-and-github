const banners = ["the best in Brazil", "Quality and low price!"]
let currentBanners = 0

function changeBanner() {
    currentBanners = (currentBanners + 1) % 2;
    document.querySelector('h2#mensagem').textContent = banners[currentBanners];
}

setInterval(changeBanner, 2000);