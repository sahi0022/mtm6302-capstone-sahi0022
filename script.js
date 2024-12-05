document.addEventListener("DOMContentLoaded", function() {
  // Get the image path and name from the query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const imagePath = urlParams.get('img');
  const pokemonName = urlParams.get('name');
  const pokemonImage = document.getElementById('pokemon-image');
  pokemonImage.src = imagePath;
  const pokemonNameElement = document.getElementById('pokemon-name');
  pokemonNameElement.textContent = pokemonName;
});
document.addEventListener('DOMContentLoaded', function() {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
      @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
          }
          40% {
              transform: translateY(-10px);
          }
          60% {
              transform: translateY(-5px);
          }
      }
      .evolution-arrow {
          position: absolute;
          right: 15px; /* Adjust position as needed */
          top: 45%;
          transform: translateY(-50%);
          font-size: 24px;
          color: #333; /* Adjust color as needed */
          font-weight: bold; /* Make the arrow bold */
          animation: bounce 0.5s ease infinite; /* Apply bounce animation */
          transition: font-size 0.3s ease-in-out; /* Add transition for font-size */
      }
      .evolution-arrow:hover {
          font-size: 28px; /* Increase size on hover */
      }
  `;
  document.head.appendChild(styleSheet);

  const arrows = document.querySelectorAll('.evolution-arrow');
  arrows.forEach(arrow => {
      arrow.classList.add('evolution-arrow');
  });
});

  function reorderElements() {
      var pokemonType = document.getElementById("pokemon-type");
      var pokemonCard = document.getElementById("pokemon-card");

      if (window.innerWidth <= 768) {
          
          if (pokemonType.nextElementSibling !== pokemonCard) {
              pokemonType.parentNode.insertBefore(pokemonType, pokemonCard);
          }
      } else {
          
          if (pokemonCard.previousElementSibling !== pokemonType) {
              pokemonCard.parentNode.insertBefore(pokemonType, pokemonCard.nextElementSibling);
          }
      }
  }
  window.addEventListener('load', reorderElements);
  window.addEventListener('resize', reorderElements);

