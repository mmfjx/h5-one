var container, camera, scene, renderer, particles = [], material, maps = [], textureLoader;
    var halfX = window.innerWidth / 2;
    var halfY = window.innerHeight / 2;
    var mouseX = 0, mouseY = 0;
    var fallSpeen = 2;
    var amount = 1000;

    // 返回一个范围内内的随机数
    function randomRange(min, max) {
        return ((Math.random() * (max - min)) + min);
    }

    function init() {
        container = document.createElement('div');
        document.body.appendChild(container);
        // 相机
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 10;
        camera.position.x = 2;
        camera.position.y = 2;
        // camera.lookAt({
        //     x: 2,
        //     y: 2,
        //     z: 5
        // })
        console.log(camera);
        // 场景
        scene = new THREE.Scene();
        // 纹理，应用于一个表面，或者作为一个反射或折射贴图。
        textureLoader = new THREE.TextureLoader();
        // console.log(textureLoader);

        maps[0] = textureLoader.load('./p6.jpg');
        console.log(maps[0]);
        maps[1] = textureLoader.load('./p7.jpg');


        for (i = 0; i< maps.length; i++) {
            // debugger;
             // 传入纹理，得到材料
            material = new THREE.MeshBasicMaterial({
                map: maps[i],
            });
            var particle = new THREE.Mesh( new THREE.CubeGeometry(4,4,10), material);
            // particle.position.x = i * 2;
            particle.position.y = i * 4;
            particles.push(particle);
            scene.add(particle);
        }

        renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(renderer.domElement);
        animate();
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        if (camera.fov <= 2000) {
            camera.fov += 0.1;
        } else if (camera.fov >= 1) {
            camera.fov -= 0.01;
        }
        camera.updateProjectionMatrix();

        // 重新渲染
        renderer.render( scene, camera );
    }
    init()
