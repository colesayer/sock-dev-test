window.addEventListener('DOMContentLoaded', () =>{
  console.log("hello dane")

  //RENDERER
  const renderer = new THREE.WebGLRenderer({antialias: true})
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMapSoft = true;
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

  //Create a PointLight and turn on shadows for the light
  var light = new THREE.PointLight( 0xffffff, 1 );
  light.position.set( 25, 50, 10 );
  light.castShadow = true;            // default false
  light.shadowDarkness = 0.5;
  scene.add( light );

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 2048;  // default
  light.shadow.mapSize.height = 2048; // default
  light.shadow.camera.near = 0.5;       // default
  light.shadow.camera.far = 500      // default


var displayGroup = new THREE.Group()


//SOCK BODY

    //texture
    var sockBodyImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513720856/floral_200n_copy_dhv1yy.bmp"
    const sockBodyTextureL = new THREE.TextureLoader()
    var sockBodyTexture = sockBodyTextureL.load(sockBodyImageURL)
    sockBodyTexture.offset.y -= 1;
    sockBodyTexture.wrapS = THREE.RepeatWrapping;
    sockBodyTexture.repeat.set(2, 2)

    //BODY MATERIAL
    var sockBodyMaterial = new THREE.MeshPhongMaterial({color: "white"})

    // var sockBodyBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647477/knit_texture_seamless_132n_ek1fsj.jpg"
    var sockBodyBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
    const sockBodyBumpTextureLoader = new THREE.TextureLoader()
    var sockBodyBumpMap = sockBodyBumpTextureLoader.load(sockBodyBumpMapURL)

    sockBodyBumpMap.wrapT = THREE.RepeatWrapping;
    sockBodyBumpMap.wrapS = THREE.RepeatWrapping;
    sockBodyBumpMap.repeat.set(4, 4)

    var mesh

    var sockBodyLoader = new THREE.OBJLoader();
    sockBodyLoader.load('./models/exploded/body.obj', function(object){
      console.log("in initMesh:", object)
      object.traverse(function(child){
        if(child instanceof THREE.Mesh){
          console.log("SOCK:", child)
          child.material = sockBodyMaterial;
          child.material.map = sockBodyTexture;
          child.material.bumpMap = sockBodyBumpMap;
          child.material.bumpScale = 0.12
            child.castShadow = true;
            child.receiveShadow = true;

        }
      })
      object.position.set(.5, 0, 0)
      displayGroup.add(object)
      })

  //SOCK TOE

    //TOE MATERIAL
    var sockToeMaterial = new THREE.MeshPhongMaterial({color: "green"})

    //TOE BUMP MAP
    var sockToeBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
    const sockToeBumpTextureLoader = new THREE.TextureLoader()
    var sockToeBumpMap = sockToeBumpTextureLoader.load(sockToeBumpMapURL)

    sockToeBumpMap.wrapT = THREE.RepeatWrapping;
    sockToeBumpMap.wrapS = THREE.RepeatWrapping;
    sockToeBumpMap.repeat.set(.25, .25)

      var sockToeLoader = new THREE.OBJLoader();
      sockToeLoader.load('./models/exploded/toe.obj', function(object){
        console.log("in initMesh:", object)
        object.traverse(function(child){
          if(child instanceof THREE.Mesh){
            console.log("SOCK:", child)
            child.material = sockToeMaterial;
            child.material.bumpMap = sockToeBumpMap;
            child.material.bumpScale = 0.12
            //   child.castShadow = true;
            //   child.receiveShadow = true;

          }
        })
        object.position.set(.5, 0, 0)
        displayGroup.add(object)
        })

//SOCK HEEL

      //TOE MATERIAL
      var sockHeelMaterial = new THREE.MeshPhongMaterial({color: "green"})

      //TOE BUMP MAP
      var sockHeelBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
      const sockHeelBumpMapTextureLoader = new THREE.TextureLoader()
      var sockHeelBumpMap = sockHeelBumpMapTextureLoader.load(sockHeelBumpMapURL)

      sockHeelBumpMap.wrapT = THREE.RepeatWrapping;
      sockHeelBumpMap.wrapS = THREE.RepeatWrapping;
      sockHeelBumpMap.repeat.set(.5, .5)

      var sockHeelLoader = new THREE.OBJLoader();
      sockHeelLoader.load('./models/exploded/heel.obj', function(object){
        console.log("in initMesh:", object)
        object.traverse(function(child){
          if(child instanceof THREE.Mesh){
            console.log("SOCK:", child)
            child.material = sockHeelMaterial;
            child.material.bumpMap = sockHeelBumpMap;
            child.material.bumpScale = 0.12
              child.castShadow = true;
              child.receiveShadow = true;

          }
        })
        object.position.set(.5, 0, 0)
        displayGroup.add(object)
        })


//SOCK WELT
          //TOE MATERIAL
          var sockWeltMaterial = new THREE.MeshPhongMaterial({color: "green"})

          //TOE BUMP MAP
          var sockWeltBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
          const sockWeltBumpMapTextureLoader = new THREE.TextureLoader()
          var sockWeltBumpMap = sockWeltBumpMapTextureLoader.load(sockWeltBumpMapURL)

          sockWeltBumpMap.wrapT = THREE.RepeatWrapping;
          sockWeltBumpMap.wrapS = THREE.RepeatWrapping;
          sockWeltBumpMap.repeat.set(.5, .5)


          var sockWeltLoader = new THREE.OBJLoader();
          sockWeltLoader.load('./models/exploded/welt.obj', function(object){
            console.log("in initMesh:", object)
            object.traverse(function(child){
              if(child instanceof THREE.Mesh){
                console.log("SOCK:", child)
                child.material = sockWeltMaterial;
                child.material.bumpMap = sockWeltBumpMap;
                child.material.bumpScale = 0.12
                  child.castShadow = true;
                  child.receiveShadow = true;

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


// var sockLoader1 = new THREE.OBJLoader();
// sockLoader1.load('./models/sockfolded1.obj', function(object){
//   console.log("in initMesh:", object)
//   object.traverse(function(child){
//     if(child instanceof THREE.Mesh){
//       child.material.map = texture;
//       child.material.bumpMap = clothBumpMap;
//       child.material.bumpScale = 0.12
//         child.castShadow = true;
//         child.receiveShadow = true;
//     }
//   })
//   displayGroup.add(object)
//   })
