

// FULL SCREEN NAV BAR 
var menubtn = document.querySelector("#menu");
// var cross = document.querySelector("#cross")
var line = document.querySelector("#line02");
var line2 = document.querySelector("#line03");
var line3 = document.querySelector("#line04");


var flag = 0;
menubtn.addEventListener("click",function(){
    // menubtn.style.transform = "rotate(-90deg)"
    if(flag === 0){

        line.style.marginLeft = -.6 +"em";
        line.style.opacity= "0";
        line2.style.transform = "rotate(45deg)";
        line3.style.transform =  "rotate(-45deg) translate(3px , -3px)" ;
        document.querySelector(".navbar2").style.left = 0;

        flag = 1;
    }

    else{
        line.style.marginLeft = 0 +"em";
        line.style.opacity= "1";
        line.style.display = "initial";
        line2.style.transform = "rotate(0deg)";
        line3.style.transform = "rotate(0deg) translate(0px)";
        document.querySelector(".navbar2").style.left = -100 +"%";
        flag = 0;
    }


})

// cross.addEventListener("click",function(dets){
//     // console.log(dets.target);
//     document.querySelector(".navbar2").style.left = "-100%";

// })











// LOCOMOTIVE JS AND SCROLL TRIGGER 

gsap.registerPlugin(ScrollTrigger);

// LOCOMOTIVE JS SETUP 
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp: 0.02, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
});


locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".brandchange",
        // markers :"true",
        scroller: ".main",
        start: "20% 80%",
        end : "+=20%",
        // toogleActions: " restart none none none ",
        // scrub: true,
        // pin: true,
        
    }
});


tl
.to(".effect" , {
    opacity:1,
    // stagger:2,
    duration: 1 , 
    ease:Expo.easeInOut,
    onStart:function(){
        
     // TEXTILLATE JS SETUP 
      $('.effect').textillate({ in: { effect: 'fadeInUp' } });
    }
} ,"-=1" )


.to(".effect1" , {
    opacity: 1,
    duration: 1,
    ease:Expo.easeInOut,
    onStart: function(){
        $('.effect1').textillate({ in: { effect: 'fadeInUp' } });
    }
} , "-=.4")


var tlOfMagth = gsap.timeline({
    scrollTrigger:{
        trigger: ".magth",
        scroller :".main",
        start: "80% 100%",
        // end: "+=40%",
        // markers: "true"

    }
})

tlOfMagth
.to(".effect3" , {
    opacity: 1,
    duration: 1,
    ease:Expo.easeInOut,
    onStart: function(){
        $('.effect3').textillate({ in: { effect: 'rotateIn' } });
    }

})

var tlOfLast = gsap.timeline({
    scrollTrigger: {
        trigger: ".last",
        scroller: ".main",
        start: "50% 100%",
        // markers: "true"
    }
})


tlOfLast
.from(".effect4" , {
    opacity:0,
    duration:2,
    y:20,
    ease:Expo.easeInOut,

},"-=2")


var tlOfText = gsap.timeline({
    scrollTrigger: {
        trigger:".linebox",
        scroller: ".main",
        start: "50% 100%",
   

    }
 })

tlOfText
.from(".effect6" , {
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    onStart: function(){
        $('.effect6').textillate({ in: { effect: 'rollIn' } });
    }


} , "-=2")


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();





// Product Showcase Slider

var slide = document.querySelector(".slide");
var slide2 = document.querySelectorAll(".slide")

console.log(slide2[0].getBoundingClientRect().width*slide2.length + 60*slide2.length+1) ;
var count =slide2[0].getBoundingClientRect().width*slide2.length + 60*(slide2.length +1);
document.querySelector(".slider").style.width =  `${count}px`


var currentpos = document.querySelector(".slider").getBoundingClientRect().left;
document.querySelector(".sliderparent").addEventListener("scroll" , function(){
    var newpos = document.querySelector(".slider").getBoundingClientRect().left;
    var diff = newpos - currentpos;
    var speed = diff*.3;
    currentpos = newpos;

    slide2.forEach(function(elem){
        elem.style.transform = `skewX(${speed}deg)`
    })

    if(document.querySelector(".slider").getBoundingClientRect().left === 0){
        slide2.forEach(function(elem){
            elem.style.transform = `skew(${0}deg)`
            
        })
    }


})



// Navbar 


var arr2 = ["https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1521120314651-9536f2ab5f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1603252711728-c430e4cf5b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1529079091004-2b0ed179f9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"]

var elem = document.querySelectorAll(".link");
elem.forEach(function(elms , index){
    console.log(elms.children)
    elms.addEventListener("mousemove" , function(dets){
        document.querySelector(".imgchange img").setAttribute("src" , arr2[index]);
        // document.querySelector(".imgchange img").style.transform  = "scale()"
       elms.children[1].style.opacity = 1;
    //    console.log(dets.clientY/3);
       elms.children[1].style.transform = `translate(${dets.clientX - 200}px , -${dets.clientY/20}px) rotate(${dets.clientX/60}deg)  scale(1 , 1)`
    //    elms.children[1].style.transform = `translateY(-${dets.clientX-200}px)`

    document.querySelector(".imgchange").style.display = "flex";
        elms.children[0].style.zIndex = 9;
    //   console.log(index)
       
  })
    
    elms.addEventListener("mouseleave" , function(){
       elms.children[1].style.opacity = 0;
       elms.children[0].style.zIndex = 0;
       elms.children[1].style.transform = "translate(0px) rotate(0deg) scale(0.8 , 0.8)"
    })
})


// new hoverEffect({
//     parent:document.querySelector(".imgchange img"),
//     intensity: 0.2,
//     image1: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
//     image2: "https://images.unsplash.com/photo-1521120314651-9536f2ab5f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     displacementImage: "diss.png"

// });
