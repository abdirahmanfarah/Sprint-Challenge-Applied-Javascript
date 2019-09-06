// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const allArticles = document.querySelector('.cards-container');

const articleData = [

  // 'bootstrap',
  // 'javascript',
  // 'jquery',
  // 'node',
  // 'technology'
];




  axios 
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
      console.log(response.data);
          // const noCards = Cards(response.data);

          // articleData.push(noCards);
          // allArticles.appendChild(Cards(response.data));
          allArticles.appendChild(Cards(response.data.articles));
          

    })
    .catch(err => console.log('No Data: ', err));
// })


console.log(allArticles);


function Cards(item) {

  //Creating Element
  const 
    mainCard = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    img = document.createElement('img'),
    byAuthor = document.createElement('span');

    //Classlist

    mainCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //Append
    mainCard.appendChild(headline);
    mainCard.appendChild(author);
    mainCard.appendChild(byAuthor);
    author.appendChild(img-container);
    imgContainer.appendChild(img);

    // Text Content
    headline.textContent = `Headline: ${item.headline}`;
    author.textContent = `Author: ${authorName}`;
    img.setAttribute('src', item.authorPhoto);

    return mainCard
}