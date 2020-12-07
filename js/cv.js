let content = document.querySelector(".content");
let slider = document.querySelector(".slider");
let lines = document.querySelectorAll(".line");
let minu = document.querySelector(".minu");
let humberger = document.querySelector(".humberger");
let back = document.querySelector(".back");
let move = document.querySelector(".move");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");
let li = document.querySelectorAll("li");
let cursor = document.querySelector(".cursor");
let logo = document.querySelector(".logo");
let h = document.querySelectorAll("h3");
let linecont = document.querySelector(".linecont");
let goup = document.querySelector(".goup");
let show = document.querySelector(".show");

let ani = gsap.timeline();

ani
  .fromTo(content, 1, { height: "0%" }, { height: "75%", ease: "power2.inOut" })
  .fromTo(
    content,
    1.2,
    { width: "100%" },
    { width: "83%", ease: "power2.inOut" }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: "power2.inOut" },
    "-=1.2"
  ).fromTo(humberger,1,{x:'-30px'} ,{x:'0'},"-=.5")
   .fromTo(logo,1,{x:'-30px'} ,{x:'0'},"-=1");

humberger.addEventListener("click", () => {
  ani
    .to(minu, 1, { x: "0%", ease: "power2.inOut" })
    .to(move, 1, { width: "70%" }, "-=1")
    .to(navbar, 1, { width: "58%" }, "-=1");

});
back.addEventListener("click", () => {
  ani
    .to(minu, 1, { x: "-100%", ease: "power2.inOut" })
    .to(move, 1, { width: "100%" }, "-=1")
    .to(navbar, 1, { width: "83%" }, "-=1");
});

li.forEach((link) => {
  link.addEventListener("click", () => {
    ani
      .to(minu, 1, { x: "-100%", ease: "power2.inOut" })
      .to(move, 1, { width: "100%" }, "-=1")
      .to(navbar, 1, { width: "83%" }, "-=1");
  });

  link.addEventListener('mousemove',()=>{
    cursor.classList.add('cursorGrow');
  });
  link.addEventListener('mouseleave',()=>{
    cursor.classList.remove('cursorGrow');
  });
});
window.addEventListener('mousemove',(e)=>{
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});
humberger.addEventListener('mousemove',()=>{
   cursor.classList.add('cursorGrow');
  
});
humberger.addEventListener('mouseleave',()=>{
  cursor.classList.remove('cursorGrow');
});

logo.addEventListener('mousemove',()=>{
  cursor.classList.add('cursorGrow');
 
});
logo.addEventListener('mouseleave',()=>{
 cursor.classList.remove('cursorGrow');
});
back.addEventListener('mousemove',()=>{
  cursor.classList.add('cursorGrow');
 
});
back.addEventListener('mouseleave',()=>{
 cursor.classList.remove('cursorGrow');
});

h.forEach((head) => {
  head.addEventListener("mousemove", () => {
    head.classList.add('cursorcolor');
    console.log('am in h3');
  });
  head.addEventListener('mouseleave',()=>{
    head.classList.remove('cursorcolor');
    console.log('am not in h3');
  });
}); 

window.addEventListener('scroll',()=>{
  let scrolltop = window.scrollY;
  if(scrolltop >= 50){
    goup.classList.add('show');
  }
  else{
    goup.classList.remove('show');
  }
});

