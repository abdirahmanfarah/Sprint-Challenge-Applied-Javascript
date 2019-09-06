// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());

function Header(item) {
  //Creating Elements
  const 
    mainHeader = document.createElement('div'),
    date = document.createElement('span'),
    headerTitle = document.createElement('h1'),
    temp = document.createElement('span');

    //Creating Classes 

    mainHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Append 
    mainHeader.appendChild(date);
    mainHeader.appendChild(headerTitle);
    mainHeader.appendChild(temp);

    return mainHeader
}

// console.log(headerContainer);