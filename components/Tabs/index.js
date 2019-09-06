// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const theTabs = document.querySelector('.topics');

axios 
      .get(`https://lambda-times-backend.herokuapp.com/topics`)
        .then(response => {
          console.log(response.data);
          response.data.topics.forEach(item => {
            // theTabs.appendChild(Tabs(response.data));
            const allTabs = Tabs(item);
            theTabs.appendChild(allTabs);
            
           });
        })
        .catch(err => {
          console.log('No Data: ', err)
        });



function Tabs(item){
  const 
      mainTabs = document.createElement('div');

      //ClassList

      mainTabs.classList.add('tab');

      //Text Content 

      mainTabs.textContent = `Topics: ${item}`


      return mainTabs
}