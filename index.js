// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff32} );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// var render = function () {
//     requestAnimationFrame( render );

//     cube.rotation.x += 0.1;
//     cube.rotation.y += 0.1;

//     renderer.render(scene, camera);
// };

// render();

var renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );
renderer.setClearColor(0x000000); // black

var scene = new THREE.Scene();

// var camera = new THREE.OrthographicCamera(-2, 4, 3, -3, 1, 10);
// camera.position.set(3, 3, 5);
// camera.lookAt(new THREE.Vector3(0, 0, 0));

var camera = new THREE.PerspectiveCamera(60, 400 / 300, 5, 10);
camera.position.set(0, 0, 5);
scene.add(camera);

// var material = new THREE.MeshBasicMaterial({
//         color: 0xffffff, // white
//         wireframe: true
// });

var cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
    new THREE.MeshLambertMaterial({
        color: 0xffff00
    })
);
scene.add(cube);
// plane
// var planeGeo = new THREE.PlaneGeometry(1.5, 1.5);
// var plane = new THREE.Mesh(planeGeo, material);
// plane.position.x = 1;
// scene.add(plane);

// triangle
// var triGeo = new THREE.Geometry();
// triGeo.vertices = [new THREE.Vector3(0, -0.8, 0),
//     new THREE.Vector3(-2, -0.8, 0), new THREE.Vector3(-1, 0.8, 0)];
// triGeo.faces.push(new THREE.Face3(0, 2, 1));
// var triangle = new THREE.Mesh(triGeo, material);
// scene.add(triangle);

renderer.render(scene, camera);