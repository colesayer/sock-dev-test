window.addEventListener('DOMContentLoaded', () =>{
  console.log("hello dane")

  //RENDERER
  const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setClearColor(0xffffff, 1)
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.zIndex = 5;
    document.body.appendChild(renderer.domElement);

  //CAMERA
  const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(0, 0, 300)
    // camera.up = new THREE.Vector3(0,0,0)
    // camera.lookAt(new THREE.Vector3(0, 0, 0))

  controls = new THREE.OrbitControls( camera, renderer.domElement )

  //SCENE
  const scene = new THREE.Scene();

  //LIGHT1
  const keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(keyLight);

    //LIGHT2
const pointLight = new THREE.PointLight(0xffffff, 0.5)
  pointLight.position.set(0, 0, 500)
  scene.add(pointLight);

    //CUBE OBJECT
// const cubeGeometry = new THREE.BoxGeometry(100, 100, 100) //maybe CubeGeometry
// const cubeMaterial = new THREE.MeshLambertMaterial({color: "#9eb8e2"});
// const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
//     cubeMesh.position.set(0, 250, 0)
//     scene.add(cubeMesh)

// const loader = new THREE.JSONLoader();
// //   loader.load( "./models/sock2.json", addModelToScene );
// //
// //   // After loading JSON from our file, we add it to the scene
// // function addModelToScene( geometry, materials ) {
// //   var material = new THREE.MeshFaceMaterial(materials);
// //   model = new THREE.Mesh( geometry, material );
// //   model.scale.set(0.5,0.5,0.5);
// //   scene.add( model );
// // }

// var mesh = null;
// function initMesh() {
//     var loader = new THREE.JSONLoader();
//     loader.load('./marmelab-logo.json', function(geometry) {
//         mesh = new THREE.Mesh(geometry);
//         scene.add(mesh);
//     });
// }

var sockMesh = null;
function initMesh(){
  console.log("in loader")
  var loader = new THREE.JSONLoader();
  loader.load('./models/cube2.json', function(geometry){
    console.log("in initMesh:", geometry)
    const material = new THREE.MeshLambertMaterial({color: 0x00ff00})
    sockMesh = new THREE.Mesh(geometry, material);
    scene.add(sockMesh)
  })
}

initMesh()

// const sockImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513562483/7frj09nru4zu_lorrln.png"
//
// const sockLoader = new THREE.TextureLoader()
// sockLoader.load(sockImageURL, (texture) => {
//   const sockGeometry = new THREE.JSONLoader();
//   sockGeometry.load('./models/cube.json', function(geometry){
//     const sockMaterial = new THREE.MeshBasicMaterial({map: texture})
//     const sockMesh = new THREE.Mesh(sockGeometry, sockMaterial)
//     scene.add(sockMesh)
//   })
// })

// const sockImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513562483/7frj09nru4zu_lorrln.png"
//
//
//   const sockGeometry = new THREE.JSONLoader();
//   sockGeometry.load('./models/cube2.json', function(geometry){
//     console.log("sockgeometry:", geometry)
//     const sockMaterial = new THREE.MeshPhongMaterial({transparent: false, map: THREE.ImageUtils.loadTexture(sockImageURL)})
//     const sockMesh = new THREE.Mesh(sockGeometry, sockMaterial)
//     scene.add(sockMesh)
//   })
// //
// const floorImageUrl = gallery.floor_texture
//   const floorLoader = new THREE.TextureLoader();
//     floorLoader.load(floorImageUrl, (texture) => {
//       const floorGeometry = new THREE.PlaneGeometry( dimX, dimY)
//       const floorMaterial = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5})
//       const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
//       floorMesh.position.y = 0;
//       floorMesh.rotation.x = - Math.PI / 2;
//       floorMesh.name="floor"
//       // let floorBox = new THREE.BoxHelper( floorMesh );
//       // scene.add(floorBox);
//       galleryGroup.add(floorMesh)
//       // addToGalleryBoxArray(floorBox)
//       // boxGroup.add(floorBox)
//     })



  //RENDER LOOP
  requestAnimationFrame(render);

  function render(){
    // if(sockMesh === null)return
    // sockMesh.rotation.y += 0.01;
    // sockMesh.rotation.x += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);

    }
})
