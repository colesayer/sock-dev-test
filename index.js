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
var sockImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513562483/7frj09nru4zu_lorrln.png"
const textureLoader = new THREE.TextureLoader()
var texture = textureLoader.load(sockImageURL)

var mesh

function initMesh(){
  console.log("in loader")
  var loader = new THREE.OBJLoader();
  loader.load('./models/sock3.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        child.material.map = texture;
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
