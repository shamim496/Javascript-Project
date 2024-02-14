const generateFrom = document.querySelector(".generator-from");
const imageGallery = document.querySelector(".image-gallery");

const handleFrom = (e) => {
    e.preventDefault();

    const userPrompt = e.srcElement[0].value;
    const userQuantity = e.srcElement[1].value;

    const imgCard = Array.from({length: userQuantity}, () =>
    `<div class="img-card loading">
        <img src="image/loader.svg" alt="image">
        <a href="#" class="download-btn">
            <img src="image/download.svg" alt="download-icon">
        </a>
    </div>`
    ).join("");
    imageGallery.innerHTML = imgCard;
}

generateFrom.addEventListener("submit", handleFrom);