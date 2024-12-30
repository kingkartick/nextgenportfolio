// import sketch from "./threed.js";

// gsap.registerPlugin(ScrollTrigger);
// let mysketch2 = new sketch();

// const pecockmeshpos =  mysketch2.pecockmesh.position;
// const pecockmeshrotz =  mysketch2.pecockmesh.position.x;
// const pecockmeshtxt  = mysketch2.mymaterial.uniforms.uTexture.value;
// const pecockmeshprog  =  mysketch2.mymaterial.uniforms.uProgress.value;


// function setupScrollanimation(){
//   const tl = gsap.timeline()
//   // FIRST SECTION

//   tl.to(pecockmeshpos, {
//     x: 1,
//     y: 0,
//     z: 12,
//     scrollTrigger: {
//       trigger: ".animapoint1",
//       start: "top bottom",
//       end: "top top",
//       scrub: true,
//       immediateRender: false,
//       // Start uProgress animation when this animation ends
//       onLeave: () => {tl.fromTo(mysketch.mymaterial.uniforms.uProgress, {
//         value: 0
//       }, {
//         value: 1,
//         duration: 2.5
//       }), console.log(" i am in  .animapoint1")}
//     ,
//     onEnterBack: () => {tl.fromTo(mysketch.mymaterial.uniforms.uProgress, {
//       value: 0
//     }, {
//       value: 1,
//       duration: 2.5
//     }), console.log(" i am in  .animapoint1")}

//   }
    
//   });
//   // mysketch.pecockmesh.position.x = -22;
//   // mysketch.pecockmesh.position.y = 0;
//   // mysketch.pecockmesh.position.z = 1;
//   tl
//   .to(pecockmeshpos, {x:  -22, y:  0, z: 1,
//       scrollTrigger: {
//           trigger: ".animapoint2",
//           start:"top ",
//           end: "top top", scrub: true,
//           immediateRender: false,
//           onEnter: () => {tl.fromTo(mysketch.mymaterial.uniforms.uProgress, {
//             value: 0
//           }, {
//             value: 1,
//             duration: 2.5
//           }), console.log(" i am in  .animapoint2")},
//           onEnterBack: () => tl.to(mysketch.mymaterial.uniforms.uProgress, {
//             value: 0
//           }, {
//             value: 1,
//             duration: 2.5
//           }),
          
//           // onToggle:() => tl.fromTo(pecockmeshpos, {
//           //  x:-68,y:0,z:0.19
//           // }),
          
      
          
//   }});
//   // mysketch.pecockmesh.position.x = -68;
//   // mysketch.pecockmesh.position.y = 0;
//   // mysketch.pecockmesh.position.z = 0.19;

//   tl
//   .to(pecockmeshpos, {x:  -18, y:  0, z: 0.19 ,
//       scrollTrigger: {
//           trigger: ".animapoint3",
//           start:"top bottom",
//           end: "top top", scrub: true,
//           immediateRender: false,
//           onLeave: () => {tl.fromTo(mysketch.mymaterial.uniforms.uProgress, {
//             value: 0
//           }, {
//             value: 1,
//             duration: 2.5
//           }), console.log(" i am in  .animapoint3")},
//           onEnterBack: () => tl.fromTo(mysketch.mymaterial.uniforms.uProgress, {
//             value: 0
//           }, {
//             value: 1,
//             duration: 2.5
//           })
//   }});


//   tl
//   .to(pecockmeshpos, {x:  -68, y:  0, z: 0.19 ,
//       scrollTrigger: {
//           trigger: ".animapoint4",
//           start:"top bottom",
//           end: "top top", scrub: true,
//           immediateRender: false,
//           onLeave: () => tl.fromTo(mysketch.mymaterial.uniforms.uProgress, {
//             value: 0
//           }, {
//             value: 1,
//             duration: 2.5
//           })
          
//   }});




 

// }


// setupScrollanimation()

