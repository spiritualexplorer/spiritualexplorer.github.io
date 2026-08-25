/**
 * Wemake cards ko YouTube video carousel se populate karta hai.
 * Design/markup wemake-card__link aur wemake-card classes ke saath
 * bilkul same rehta hai — sirf content JS se inject hota hai.
 *
 * Usage: HTML me sirf empty <ul> chahiye:
 *   <ul class="wemake__cards" role="list" aria-label="Realizacje"></ul>
 *
 * Fir data array update karke renderWemakeCards() call karo.
 */

// YouTube thumbnails hamesha 16:9 ratio me aate hain (maxresdefault = 1280x720),
// isliye har video ke liye same width/height rakhte hain — asli image size ka
// koi lena-dena nahi hota ab, kyunki content ab uploaded image nahi, video hai.
const THUMB_WIDTH = 1280;
const THUMB_HEIGHT = 720;

const wemakeVideos = [
  {
    id: "lYTDEIVQljQ",
    label: "Loreve",
    alt: "Loreve — branding i e-commerce marki modowej (realizacja goats.)"
  },
  {
    id: "lYTDEIVQljQ",
    label: "Laura Coco Reiss",
    alt: ""
  },
  {
    id: "lYTDEIVQljQ",
    label: "Sockio",
    alt: "Sockio — branding marki skarpetek (realizacja goats.)"
  },
  {
    id: "lYTDEIVQljQ",
    label: "Rising Sons",
    alt: "Rising Sons — branding i opakowania marki piwnej (realizacja goats.)"
  },
  {
    id: "lYTDEIVQljQ",
    label: "Flight Mentor",
    alt: ""
  },
  {
    id: "lYTDEIVQljQ",
    label: "Skandom",
    alt: "Skandom — branding i strona internetowa marki domów szkieletowych (realizacja goats.)"
  }
];

function renderWemakeCards(videos = wemakeVideos, containerSelector = ".wemake__cards") {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.warn(`renderWemakeCards: "${containerSelector}" nahi mila.`);
    return;
  }

  container.innerHTML = videos
    .map((video) => {
      const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
      const href = `https://www.youtube.com/watch?v=${video.id}`;

      return `
        <li class="wemake-card">
          <a class="wemake-card__link" href="${href}" target="_blank" rel="noopener" aria-label="${video.label}">
            <img decoding="async" src="${thumb}" alt="${video.alt}" loading="lazy" width="${THUMB_WIDTH}" height="${THUMB_HEIGHT}">
          </a>
        </li>
      `;
    })
    .join("");
}

// Page load hote hi cards render ho jayenge
document.addEventListener("DOMContentLoaded", () => {
  renderWemakeCards();
});