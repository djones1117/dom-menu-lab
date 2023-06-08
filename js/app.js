// Menu data structure 
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  const titleEl = document.getElementById('title');
  console.log(titleEl);


  // Task 1.0
  var mainEl = document.querySelector('main');
 // console.log(mainEl)
 
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
 // for shay - I set my background color to this on console but its coming up with white still? I'm getting a error when i refresh the live server and it resets my background color to default?
  // ive tried to rewatch the video and do the steps but perhaps i need a walkthrough in a breakout room tomorrow?
 //im feeling dumb on this subject cause the video was simple to follow through
 // I'm using this code in console on the webpage like the video showed  $0.style.backgroundColor = 'var(--main-bg)'
  //took a screenshot incase you need to see it in the console
 
 // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  // even when centering this it just resets after i upload page or save vs code?
 
  // Task 1.3
  mainEl.classList.add('flex-ctr');
  
  // Task 2.0
  
  var topMenuEl = document.getElementById('top-menu');
  
  // Task 2.1
      
  topMenuEl.style.height = '100%';
  
 // for problems 1.3, 2.0, and 2.1 all the same issue.. It's very frustrating because i can see the initial change until i refresh/save. 
 
 
  // Task 2.2
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  //facing same problems with task 1.1 it just resets after i refresh or save vs code.
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
 


//lab 1 was great but i've had big problems on this one. 
//i've watched the video 2 more times since start of class and used the notes but i cant crack this at all. 
// I believe i just need to see a walkthrough of this entire lab tomorrow during the standout and just follow along.