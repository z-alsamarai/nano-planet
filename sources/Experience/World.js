import * as THREE from "three";
import Experience from "./Experience.js";
import earth from "./earth.js";
import airplane from "./airplane.js";
import houses from "./houses.js";
import trees from "./trees.js";
import boats from "./boats.js";
import moon from "./moon.js";
import clouds from "./clouds.js";
import water from "./water.js";

export default class World {
  constructor(_options) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("groupEnd", (_group) => {
      if (_group.name === "base") {
        this.setEarth();
        this.setAirplane();
        this.setHouses();
        this.setTrees();
        this.setBoats();
        this.setMoon();
        this.setClouds();
        this.setWater();
      }
    });
  }

  setEarth() {
    this.earth = new earth();
  }

  setAirplane() {
    this.airplane = new airplane();
  }

  setHouses() {
    this.houses = new houses();
  }

  setTrees() {
    this.trees = new trees();
  }

  setBoats() {
    this.boats = new boats();
  }

  setMoon() {
    this.moon = new moon();
  }

  setClouds() {
    this.clouds = new clouds();
  }

  setWater() {
    this.water = new water();
  }

  resize() {}

  update() {
    if (this.earth) {
      this.earth.update();
    }
    if (this.airplane) {
      this.airplane.update();
    }
    if (this.houses) {
      this.houses.update();
    }
    if (this.trees) {
      this.trees.update();
    }
    if (this.boats) {
      this.boats.update();
    }
    if (this.moon) {
      this.moon.update();
    }
    if (this.clouds) {
      this.clouds.update();
    }
    if (this.water) {
      this.water.update();
    }
  }

  destroy() {}
}
