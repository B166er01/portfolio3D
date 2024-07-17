import * as THREE from "three";
import Time from "./utils/Time.js";
import Sizes from "./utils/Sizes.js";

// Singleton main class
class Experience {
  static instance;

  constructor(_options = {}) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = _options.webglElement;

    // Options
    this.webglElement = _options.webglElement;

    if (!this.webglElement) {
      console.warn("Missing 'webglElement' property");
      return;
    }

    this.time = new Time();
    this.raycaster = new THREE.Raycaster();
    this.sizes = new Sizes();
    this.mouse = new THREE.Vector2();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.update();
  }

  setConfig() {
    this.config = {};

    // Pixel ratio
    this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2);

    // Width and height
    const boundings = this.webglElement.getBoundingClientRect();
    this.config.width = boundings.width;
    this.config.height = boundings.height || window.innerHeight;
    this.config.smallestSide = Math.min(this.config.width, this.config.height);
    this.config.largestSide = Math.max(this.config.width, this.config.height);
  }
  setScene() {
    this.scene = new THREE.Scene();
  }
  setCamera() {}
  setRenderer() {}
  setResources() {}
  setWorld() {}
  setPreloader() {}
  update() {}
  resize() {}
}
