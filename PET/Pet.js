console.log("Si tu vois ce message, c'est que tout va bien :)")
$("document").ready(() => {
    console.log("jQuery est prêt.");
});

// Call api for pet 
$.ajax({
    url: 'https://randomapi.com/api/4f0c33b9f6ad0d08db6182cd7984157c?results=6',
    dataType: 'json',
    success: function(data) {
        console.log(data.results); 
        data.results.map(result => {
            const name = result.name;
            const price = result.price;
            const sex = result.genre;
            const age = result.age;
            const picture = result.picture
            $ (`
        <div class="ui items">
            <div class="item">
              <div class="image picture">
                <img src="${picture}">
              </div>
              <div class="content">
                <div class="header">${name}</div>
                <div class="meta">
                  <span class="age">${age} ans </span>
                  <div class="price">${price} € </div>
                  <div class="sex">${sex}</div>
                </div>
                <div class="description">
                  <p></p>
                </div>
              </div>
            </div>
          </div>`).appendTo("div#animalCards")
        })
    }
});
// Carousel 


const body = document.getElementsByTagName("body")[0];
const refuge = document.getElementsByClassName("refuge")[0];
const button = document.getElementById("reset");
const buttonBefore = document.getElementById("beforePicture");
const petImage = refuge.children.length;
let index = 0;
console.log(petImage);



refuge.addEventListener("click", event => {
  console.log(event.clientX);
  if (index + 1 >= petImage) return;
  refuge.style.transform = `translateX(${-800 * (index + 1)}px)`;
  index++;
});

button.addEventListener("click", () => {
  refuge.style.transform = "translateX(0px)";
  index = 0;
});

// add button last picture

buttonBefore.addEventListener("click", () => {
  if (index + 1 >= petImage) return;
  refuge.style.transform = `translateX(${-800 * (index - 1)}px)`;
  index--;
});





