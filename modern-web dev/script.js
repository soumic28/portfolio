const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout ;

function circleSkew(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX-xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY-yprev);
        console.log(xscale,yscale)

        xprev = dets.clientX;
        yprev = dets.clientY;

        circlefollower(xscale, yscale);
        timeout= this.setTimeout("mousemove",function(dets){
            document.querySelector("#min").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1,1)`;
        },100);
    });
}
circleSkew();

function circlefollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#min").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale})`;
    })
}

circlefollower();




function animation(){
    var tl =gsap.timeline();


    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        duration:1.5,
        ease:Expo.easeInOut

    })
    tl.from("#headings",{
        y:'100',
        opacity: 0,
        duration:2,
        ease:Expo.easeInOut
    })
    tl.from("#work",{
        y:'100',
        opacity:0,
        duration:1,
      
        ease:Expo.easeInOut
    })
    tl.from("#icons",{
        y:'100',
        opacity:0,
        delay:-1,
        duration:2,
        ease:Expo.easeInOut
    })
    
}
animation();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });