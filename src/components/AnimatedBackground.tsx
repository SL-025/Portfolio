import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Neural Mesh / Particles (Tunnel Effect)
    const particlesCount = 20000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      // 85% tunnel particles for that "best" effect, 15% floaters for coverage
      const isFloater = Math.random() > 0.85;
      
      if (isFloater) {
        positions[i * 3] = (Math.random() - 0.5) * 800;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 800;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1500;
      } else {
        const radius = 2 + Math.random() * 50;
        const theta = Math.random() * Math.PI * 2;
        const z = (Math.random() - 0.5) * 1500;

        positions[i * 3] = Math.cos(theta) * radius;
        positions[i * 3 + 1] = Math.sin(theta) * radius;
        positions[i * 3 + 2] = z;
      }

      // AI Theme Colors (Cyan, Blue, Purple)
      const mix = Math.random();
      if (mix < 0.33) {
        colors[i * 3] = 0.0; // R
        colors[i * 3 + 1] = 0.8; // G
        colors[i * 3 + 2] = 1.0; // B (Cyan)
      } else if (mix < 0.66) {
        colors[i * 3] = 0.2; // R
        colors[i * 3 + 1] = 0.4; // G
        colors[i * 3 + 2] = 1.0; // B (Blue)
      } else {
        colors[i * 3] = 0.6; // R
        colors[i * 3 + 1] = 0.0; // G
        colors[i * 3 + 2] = 1.0; // B (Purple)
      }
      
      sizes[i] = Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Add a second layer of larger, blurrier particles for "glow"
    const glowMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const glowPoints = new THREE.Points(geometry, glowMaterial);
    scene.add(glowPoints);

    // Glowing Rings for Tunnel Depth
    const rings: THREE.Group[] = [];
    for (let i = 0; i < 15; i++) {
      const ringGroup = new THREE.Group();
      const ringGeo = new THREE.TorusGeometry(35, 0.05, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: 0x00f2ff, 
        transparent: true, 
        opacity: 0.2 
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ringGroup.add(ring);
      
      // Add "data bits" (cubes) that rotate around the ring
      const bitGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const bitMat = new THREE.MeshBasicMaterial({ color: 0x00f2ff });
      for (let j = 0; j < 12; j++) {
        const bit = new THREE.Mesh(bitGeo, bitMat);
        const angle = (j / 12) * Math.PI * 2;
        bit.position.set(Math.cos(angle) * 35, Math.sin(angle) * 35, 0);
        ringGroup.add(bit);
      }

      ringGroup.position.z = -i * 50;
      scene.add(ringGroup);
      rings.push(ringGroup);
    }

    // Fog for depth
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    // Cyber Grid Floor
    const gridHelper = new THREE.GridHelper(2000, 80, 0x00f2ff, 0x000000);
    gridHelper.position.y = -50;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);

    camera.position.z = 100;

    // Mouse Interaction
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = -(event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      
      // Direct scroll value
      const scrollValue = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const normalizedScroll = maxScroll > 0 ? (scrollValue / maxScroll) * 100 : 0;

      // Smooth mouse movement
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Rotate points
      points.rotation.z += deltaTime * 0.05;
      glowPoints.rotation.z += deltaTime * 0.05;
      
      // Camera movement based on mouse and scroll
      camera.position.x += (mouse.x * 30 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 30 - camera.position.y) * 0.05;
      camera.position.z = 200 - normalizedScroll * 8;
      
      // Look slightly towards mouse but keep center focus
      camera.lookAt(mouse.x * 20, mouse.y * 20, -1200);

      // Animate rings (moving towards camera)
      rings.forEach((ring, i) => {
        // Rings move faster when scrolling
        const scrollSpeedBonus = normalizedScroll * 0.1;
        ring.position.z += (deltaTime * 40) + scrollSpeedBonus;
        ring.rotation.z += deltaTime * 0.15 * (i % 2 === 0 ? 1 : -1);
        
        // Fade in/out based on distance
        const dist = Math.abs(ring.position.z - camera.position.z);
        const opacity = Math.max(0, Math.min(0.3, 1 - dist / 400));
        const mesh = ring.children[0] as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;
        if (mat) mat.opacity = opacity;
        
        if (ring.position.z > 150) {
          ring.position.z = -600;
        }
      });

      // Animate grid
      gridHelper.position.z = (normalizedScroll * 15) % 25;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      glowMaterial.dispose();
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-[#050505]"
      style={{ 
        background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)'
      }}
    />
  );
};
