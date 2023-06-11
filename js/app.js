// Menu data structure 
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  
  const titleEl = document.getElementById('title');
  
//fun lab once I got my css file connected. Was very annoyed at myself thursday night but it was a good error to learn from
  
  // Task 1.0
  const mainEl = document.querySelector('main');
 
 
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
 
 
 // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

 
  // Task 1.3
  mainEl.classList.add('flex-ctr');
  
  // Task 2.0
  
  var topMenuEl = document.getElementById('top-menu');
  
  // Task 2.1
      
  topMenuEl.style.height = '100%';
  
 //lol all of this troubled me because my css file wasn't connecting to browser
 //thought i was lost and doing something wrong but makes total sense
 
 
  // Task 2.2
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

  // Task 2.3
  
  topMenuEl.classList.add('flex-around');
  
  // Task 3.0
  //copied at the top of page
  
  // Task 3.1
  menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });
 
//felt like i was doing it wrong because my style sheet wasn't connecting to the browser

// task 4.0

const subMenuEl = document.querySelector('#sub-menu');
// creating variable named "subMenuEl" = retrieve from documents(html page).select the id sub menu.

// task 4.1
subMenuEl.style.height = '100%';
// take the subMenuEl element and style the height to 100%
//same as task 2.1 above

// task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//takes subMenuEl element and styles the background color. similar to problem 2.2
// this is making a lot more sense now. Haven't had to use google or an answer sheet yet for first time this week!!!

// task 4.3
subMenuEl.classList.add('flex-around');
//had to ask for peer help on this one
// makes sense when reading it. 

//task 4.4
subMenuEl.style.position = 'absolute';
//giving the subMenuEl element a value of absolute

//task 4.5
subMenuEl.style.top = '0';
//similar problem to 4.4 but instead of calling the position property we use the top property

//task 5.0
//links added to top of page


//task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;
//for shay. How could i check to make sure "showingSubMenu" is returning the value false?
//used answer sheet for this one. 

// task 5.2 // was good with top line because we wrote previous code today with zach and i have the notes open.
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;  
  if (link.tagName !== 'A') return; //this part stumped me and i had to look up the rest of answer
  console.log(link.textContent);
  
  
  
  
  // Task 5.3 This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.
//Next in the event listener, if the clicked <a> link has a class of active:
//Remove the active class from the clicked <a> element.
//Set the showingSubMenu to false.
//Set the CSS top property of subMenuEl to 0.
//return; from the event listener function.
 
if (link.classList.contains('active')) { //peers got me started with the first two lines of code
    link.classList.remove('active');  
    showingSubMenu = false;  //set to false
    subMenuEl.style.top = '0'; //set the top property of submenuel to 0.
    return;
  }     //im feeling a lot more comfortable with this stuff
        //i don't have it all down but it's becoming more and more readable and i understand what the code is doing
  
  // Task 5.4
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
 //used answer sheet for this one.
 // hardest problem so far along with 5.2 
  // Task 5.5
  link.classList.add('active');
  //only problem in section 5 that didn't trouble me too much but still happy with progress
  //was my first week working with js and dom
  
  // Task 5.6
  const linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = 'subLinks' in linkData;
  
//note to self. Ask instructor about task 5.6 - 6.3 in review on monday. 
  
  // Task 5.7
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
});



// Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

//had to use answer sheet for 5.7- 6.2. Will take some practice to get the syntax right on these.

// Task 6.0
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
 
 
  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';


  // Task 6.2
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });



  // Task 6.3
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});


//overall a good lab once i got through my first error. part one was informative.
//I felt good on part two up until 5.4+. I understand what the code is doing but it was def the hardest lab yet.
//enjoyed both sections and feel like I learned a lot.