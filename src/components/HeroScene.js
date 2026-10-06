import * as THREE from 'three';

export function initHeroScene(canvasElement) {
  if (!canvasElement) return null;

  try {
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      canvasElement.clientWidth / canvasElement.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // WebGL Renderer with antialias and alpha
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ambient and Point Lights for glass refractions
    const ambientLight = new THREE.AmbientLight(0x061829, 2.5);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00D4FF, 3.5, 50);
    cyanPointLight.position.set(4, 5, 4);
    scene.add(cyanPointLight);

    const blueRimLight = new THREE.PointLight(0x0A2540, 4.0, 50);
    blueRimLight.position.set(-5, -4, -2);
    scene.add(blueRimLight);

    const whiteHighlight = new THREE.PointLight(0xFFFFFF, 1.8, 20);
    whiteHighlight.position.set(0, 4, 3);
    scene.add(whiteHighlight);

    // Root Group for interactive mouse parallax
    const visualGroup = new THREE.Group();
    scene.add(visualGroup);

    // 1. Central Glass Identity Core (Icosahedron / Crystal)
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0A2540,
      emissive: 0x003A5F,
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.85, // Glass transmission
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });
    const glassCore = new THREE.Mesh(coreGeo, glassMat);
    visualGroup.add(glassCore);

    // 2. Inner Glowing Cryptographic Wireframe Lattice
    const innerWireGeo = new THREE.IcosahedronGeometry(1.05, 1);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0x00D4FF,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerWire = new THREE.Mesh(innerWireGeo, innerWireMat);
    visualGroup.add(innerWire);

    // 3. Central Cryptographic Seed Node (Golden-Cyan Core)
    const seedGeo = new THREE.OctahedronGeometry(0.4, 0);
    const seedMat = new THREE.MeshStandardMaterial({
      color: 0x33DDFF,
      emissive: 0x00D4FF,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8
    });
    const seed = new THREE.Mesh(seedGeo, seedMat);
    visualGroup.add(seed);

    // 4. Orbital Cybernetic Rings (Representing KYC verification orbits)
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00D4FF,
      transparent: true,
      opacity: 0.55
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    visualGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x33DDFF,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    visualGroup.add(ring2);

    // 5. Floating Data Nodes on the rings
    const nodeCount = 5;
    const nodeGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00D4FF });
    const orbitNodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      visualGroup.add(node);
      orbitNodes.push({
        mesh: node,
        radius: 2.1,
        angle: (i / nodeCount) * Math.PI * 2,
        speed: 0.008 + (i % 2) * 0.004
      });
    }

    // 6. Ambient Particle Nebula (700 particles)
    const particleCount = 650;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00D4FF);
    const colorWhite = new THREE.Color(0xF8FAFC);
    const colorBlue = new THREE.Color(0x0D3A5F);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? colorCyan : (Math.random() > 0.5 ? colorWhite : colorBlue);
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    visualGroup.add(particleSystem);

    // Mouse Tracking for Smooth Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      const rect = canvasElement.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 1.5;
      targetMouseY = y * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!canvasElement) return;
      const width = canvasElement.clientWidth;
      const height = canvasElement.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse movement for smooth cinematic feel
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      visualGroup.rotation.y = elapsedTime * 0.15 + mouseX * 0.6;
      visualGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + mouseY * 0.4;

      // Rotate internal elements
      glassCore.rotation.y = elapsedTime * 0.2;
      glassCore.rotation.z = Math.sin(elapsedTime * 0.15) * 0.2;

      innerWire.rotation.y = -elapsedTime * 0.25;
      innerWire.rotation.x = Math.cos(elapsedTime * 0.2) * 0.2;

      seed.rotation.y = elapsedTime * 0.8;
      seed.rotation.x = elapsedTime * 0.4;

      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.y = -elapsedTime * 0.08;

      // Animate orbit nodes
      orbitNodes.forEach((item) => {
        item.angle += item.speed;
        const x = Math.cos(item.angle) * item.radius;
        const z = Math.sin(item.angle) * item.radius;
        // Position on inclined plane
        item.mesh.position.set(
          x * Math.cos(Math.PI / 6) - z * Math.sin(Math.PI / 6),
          x * Math.sin(Math.PI / 6),
          z
        );
      });

      // Subtle particle swirl
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return {
      destroy: () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
      }
    };
  } catch (err) {
    console.warn('WebGL initialization fallback gracefully applied:', err);
    return null;
  }
}
