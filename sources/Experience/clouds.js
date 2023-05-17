import * as THREE from 'three'

import Experience from './Experience.js'

export default class clouds
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setClouds()
    }

    setClouds()
    {
        this.clouds = {}
        this.clouds.model = this.resources.items.clouds.scene

        this.clouds.texture = this.resources.items.baked
        this.clouds.texture.encoding = THREE.sRGBEncoding
        this.clouds.texture.flipY = false

        this.clouds.material = new THREE.MeshBasicMaterial({ map: this.clouds.texture })

        this.clouds.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.clouds.material
            }

        })

        this.scene.add(this.clouds.model)
    }

    

    update()
    {
       this.clouds.model.rotation.y += 0.001
    }
}