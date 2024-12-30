import * as  THREE from 'three'
// shaders for the certificates 
import vertexShaderCode from './shaders/vertexShader.js'
import fragmentShaderCode from './shaders/fragmentShader.js'

// shaders for the pecock
import vertexShaderCode2 from './shaders/vertex2.js';
import fragmentShaderCode2 from './shaders/fragment2.js';


//GSAP
import gsap from 'gsap';



export default  class sketch{

    constructor(){
        this.renderer = new THREE.WebGLRenderer( {canvas: document.querySelector('#bg') } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor(0xffffff, 0);
        
        // this.renderer.setAnimationLoop( animation );
      
       

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.001, 100 );
        this.camera.position.z = 30;
        this.camera.position.x = -3;

        this.scene = new THREE.Scene();
        this.time = 0; 
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShaderCode,
           fragmentShader :fragmentShaderCode,
           uniforms: { /* Define any custom uniforms here */ 
              textureimg:{type:'t',value:null} ,
              timeanim:{type:'f',value:this.time},
              distancefromcent:{type:'f',value:0}

       },
           transparent:true,
       });
       
   

        this.materials = [];
        this.meshes =[];


        



    
        

        this.handleImages();
      
       
        
       

        this.addback();

        this.addPointlit();
        
        this.addmoon();
        this.addkartick();
       
        this.myStar();
        
        this.render();
        
        this.groups = [];


        // this.addPecock();
        
       
        
       


    }
   
    handleImages(){
        let images  =  ['./assets/C1.png','./assets/C2.png','./assets/C3.png']
        images.forEach((img,i)=>{
            let image = new Image();
            image.src = img;
            image.onload=()=>{
                let mat  = this.material.clone();
                mat.uniforms.textureimg.value= new THREE.Texture(image);
                mat.uniforms.textureimg.value.needsUpdate = true;
                let geo = new THREE.PlaneGeometry(1,1.77);
                let mesh = new THREE.Mesh(geo,mat);

                let group =  new THREE.Group();
                group.add(mesh);

                this.groups.push(group)
                 

                this.scene.add(group);

                this.materials.push(mat);
                this.meshes.push(mesh);

                mesh.position.y = i*2;
                group.position.z = 53;
                group.position.x = 0.95;

                group.rotation.y = -0.5;
                group.rotation.x = -0.3;
                group.rotation.z = -0.05;

                console.log('this is images ',image);
            }
           
        })
    }
   







    addback(){
       
        // this.spaceTexture = new THREE.TextureLoader().load('space.jpg');
        // this.spaceTexture.colorSpace = THREE.SRGBColorSpace;
        // this.spaceTexture.magFilter =  THREE.NearestFilter;
        // this.scene.background= this.spaceTexture;
        this.scene.background = new THREE.Color('#0a192f');

    }


    addPointlit(){
        const ponitLight = new THREE.PointLight(0xffffff);
        ponitLight.position.set(25,25,25);
        this.ambientLight = new THREE.AmbientLight(0xffffff);
        this.ambientLight.intensity = 3.0; // Increase the intensity (adjust the value as needed)
        this.scene.add(this.ambientLight);
        // this.scene.add(ponitLight);

    }

    // addPecock(){
    //         let featherimage = new Image();
    //         featherimage.onload=()=>{
    //             let featherText = new THREE.Texture('./assets/pecock.jpg')
           
           
    
    //         const geometry = new BufferGeometry();
    //         let multiplier = 10;
        
    //         let noofcol = 9  * multiplier;
    //         let noofrow = 16* multiplier;
    //         const verteciescord = [];
    //         const initalPosition  = [];
    //         for (let x = 0 ;x<noofcol;x++){
    //           for (let y = 0 ;y<noofrow;y++){
    //             const point =[x,y,0]
    //             const intialponta = [x-noofcol/2,y-noofrow/2,randFloat(0,500)]
    //             verteciescord.push(...point)
    //             initalPosition.push(...intialponta)
                
                
        
    //           }
    //         }
        
    //     // create a simple square shape. We duplicate the top left and bottom right
    //     // vertices because each vertex needs to appear once per triangle.
    //     const vertices = new Float32Array( verteciescord );
    //     const intvertices = new Float32Array(  initalPosition );
        
    //     // itemSize = 3 because there are 3 values (components) per vertex
    //     geometry.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );
    //     geometry.setAttribute( 'initalPosition', new BufferAttribute( intvertices, 3 ) );

        
        
    //     geometry.center()
    //     const material1 = new  ShaderMaterial( { 
    //       fragmentShader:fragmentShaderCode2,
    //        vertexShader:vertexShaderCode2 ,
    //        uniforms: {
    //         uPointSize:{
    //           value:8
    //         },
    //         uTexture:{
    //           value : featherText
    //         },
    //         uNbLines:{value: noofrow },
    //         uNbColumns:{value: noofcol},
    //         uProgress:{value:0},
    //         uTime:{value:0}
        
    //        },
          
    //        transparent : true,
    //        depthTest: false,
    //        depthWrite: false
        
        
        
    //     } );
    
        
    //     const pecock = new  Points( geometry , material1 );
    //     this.scene.add(pecock);
    //     this.mymaterial= material1;
    //     gsap.fromTo(
    //       this.mymaterial.uniforms.uProgress,
    //       {
    //         value:0,
    //       },
    //       {
    //         value:1,
    //         duration:2.5,
           
    //       }
    //     )
        
        
    //       }
        
        
    //     }
        
       



    addmoon(){
      
       
        this.mTexture = new THREE.TextureLoader().load('moon.jpg');
        this.mTexture.colorSpace = THREE.SRGBColorSpace;
        
        this.Moon = new THREE.Mesh(
            new THREE.SphereGeometry(3,32,32),
            new THREE.MeshStandardMaterial({map : this.mTexture
    })
          );
          this.Moon.position.z = 35;
          this.Moon.position.setX(6);
          this.scene.add(this.Moon);
          

    }
    addkartick(){
        this.KTexture = new THREE.TextureLoader().load('meStage.jpg');
        this.KTexture.colorSpace = THREE.SRGBColorSpace;
        this.Kartick = new THREE.Mesh(
        new THREE.BoxGeometry(1.5,3,1.5),
        new THREE.MeshStandardMaterial({map : this.KTexture})
        );
        this.Kartick.position.z = 5;
        this.Kartick.position.x = 2;
        this.scene.add(this.Kartick);

    }
    myStar() {
        for (let i = 0; i < 200; i++) {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
          
            const [x, y, z] = Array(3)
              .fill()
              .map(() => THREE.MathUtils.randFloatSpread(100));
          
            star.position.set(x, y, z);
            this.scene.add(star);

        }
       
        
     }
    
     

   
    render(){
        this.time++;
        if (this.materials){
            this.materials.forEach(m=>{
                m.uniforms.timeanim.value = this.time;
                
            })
        }
        this.renderer.render( this.scene, this.camera );
        window.requestAnimationFrame(this.render.bind(this));
    }



}


