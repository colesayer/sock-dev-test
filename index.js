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


//texture
var sockImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513642197/trex_kids_l0rknl.bmp"
const textureLoader = new THREE.TextureLoader()
var texture = textureLoader.load(sockImageURL)
texture.offset.y -= 1;
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.set(2, 2)
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.x = 500
// texture.repeat.y = 100
// texture.offset.x = ( 300 / 100 ) * texture.repeat.x;
// texture.offset.y = ( 400 / 100 ) * texture.repeat.y;

var bumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513645812/TexturesCom_FabricWool0033_3_seamless_S_qs5bfs.jpg"
const bumpTextureLoader = new THREE.TextureLoader()
var clothBumpMap = bumpTextureLoader.load(bumpMapURL)

clothBumpMap.wrapT = THREE.RepeatWrapping;
clothBumpMap.wrapS = THREE.RepeatWrapping;
clothBumpMap.repeat.set(4, 4)

var mesh

function initMesh(){
  console.log("in loader")
  var loader = new THREE.OBJLoader();
  loader.load('./models/sock3.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        child.material.map = texture;
        child.material.bumpMap = clothBumpMap;
      }
    })
    scene.add(object)
    })
  }

initMesh()




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
