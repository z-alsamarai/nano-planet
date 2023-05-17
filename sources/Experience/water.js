import * as THREE from "three";
import Experience from "./Experience.js";

export default class water {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;
    this.scene = this.experience.scene;
    this.world = this.experience.world;
    this.clock = new THREE.Clock();

    this.setWater();
  }

  setWater() {
    this.water = {};
    this.water.model = this.resources.items.water.scene;

    this.water.texture = this.resources.items.baked;
    this.water.texture.encoding = THREE.sRGBEncoding;
    this.water.texture.flipY = false;

    this.water.material = new THREE.MeshBasicMaterial({
      map: this.water.texture,
    });

    this.water.model.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = this.water.material;
      }
    });

    this.scene.add(this.water.model);
  }

  update() {
    /*
    const time = this.clock.getElapsedTime();
    const positions = this.water.model.children[0].geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const y = this.calculateY(positions.getY(i), time);
      positions.setY(i, y);
    }

    positions.needsUpdate = true;
    this.water.model.children[0].geometry.computeVertexNormals();
  }

  calculateY(initialHeight, time) {
    const amplitude = THREE.MathUtils.randFloatSpread(0.002);
    const phase = THREE.MathUtils.randFloat(0, Math.PI / 4);

    return initialHeight + Math.sin(time + phase) * amplitude;
    */
   this.water.model.rotation.y += 0.001;
  }
}
