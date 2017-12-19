window.addEventListener('DOMContentLoaded', () =>{
  console.log("hello dane")

  //RENDERER
  const renderer = new THREE.WebGLRenderer({antialias: true})
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0xffffff, 1)
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.zIndex = 5;
  document.body.appendChild(renderer.domElement);

  //CAMERA
  const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(0, 0, 300)

  controls = new THREE.OrbitControls( camera, renderer.domElement )

  //SCENE
  const scene = new THREE.Scene();

  //LIGHT1
  const keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(keyLight);

    //LIGHT2
// const pointLight = new THREE.PointLight(0xffffff, 0.5)
//   pointLight.position.set(0, 0, 100)
//   scene.add(pointLight);

//Create a SpotLight and turn on shadows for the light
// var light = new THREE.SpotLight( 0xffffff, 0.5 );
// light.position.set(0,400,100)          // default false
// scene.add( light );


//texture
var sockImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513642197/trex_kids_l0rknl.bmp"
const textureLoader = new THREE.TextureLoader()
var texture = textureLoader.load(sockImageURL)
texture.offset.y -= 1;
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.set(2, 2)

// var bumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647477/knit_texture_seamless_132n_ek1fsj.jpg"
var bumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
const bumpTextureLoader = new THREE.TextureLoader()
var clothBumpMap = bumpTextureLoader.load(bumpMapURL)

clothBumpMap.wrapT = THREE.RepeatWrapping;
clothBumpMap.wrapS = THREE.RepeatWrapping;
clothBumpMap.repeat.set(4, 4)

var mesh

var displayGroup = new THREE.Group()


  var sockLoader1 = new THREE.OBJLoader();
  sockLoader1.load('./models/sockfolded1.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        child.material.map = texture;
        child.material.bumpMap = clothBumpMap;
        child.material.bumpScale = 0.12
          child.castShadow = true;
      }
    })
    displayGroup.add(object)
    })


    var sockLoader2 = new THREE.OBJLoader();
    sockLoader2.load('./models/sock3.obj', function(object){
      console.log("in initMesh:", object)
      object.traverse(function(child){
        if(child instanceof THREE.Mesh){
          child.material.map = texture;
          child.material.bumpMap = clothBumpMap;
          child.material.bumpScale = 0.12
            child.castShadow = true;

        }
      })
      object.position.set(.5, 0, 0)
      displayGroup.add(object)
      })

  // const pedestalGeometry = new THREE.BoxGeometry(10, 5, 10)
  // const pedestalMaterial = new THREE.MeshStandardMaterial({color: "blue"})
  // const pedestal = new THREE.Mesh(pedestalGeometry, pedestalMaterial)
  // pedestal.position.set(-3, .5, -.5)
  // displayGroup.add(pedestal)







  scene.add(displayGroup)

//Create a PointLight and turn on shadows for the light
var light = new THREE.PointLight( 0xffffff, 1 );
light.position.set( 25, 50, 10 );
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;       // default
light.shadow.camera.far = 500      // default

// //Create a sphere that cast shadows (but does not receive them)
// var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
// var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
// var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.castShadow = true; //default is false
// sphere.receiveShadow = false; //default
// scene.add( sphere );
//
//Create a plane that receives shadows (but does not cast them)
var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: "white" } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
plane.position.y = 3;
plane.position.x = -3;
plane.rotation.x = - Math.PI / 2;
scene.add( plane );

  var helper = new THREE.CameraHelper( light.shadow.camera );
  scene.add( helper );


  //RENDER LOOP
  requestAnimationFrame(render);

  function render(){
    // if(sockMesh === null)return
    // displayGroup.rotation.y += 0.01;
    // sockMesh.rotation.x += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);

    }
})
