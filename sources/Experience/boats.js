import * as THREE from 'three'

import Experience from './Experience.js'

export default class boats
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setBoats()
    }

    setBoats()
    {
        this.boats = {}
        this.boats.model = this.resources.items.boats.scene

        this.boats.texture = this.resources.items.baked
        this.boats.texture.encoding = THREE.sRGBEncoding
        this.boats.texture.flipY = false

        this.boats.material = new THREE.MeshBasicMaterial({ map: this.boats.texture })

        this.boats.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.boats.material
            }

        })

        this.scene.add(this.boats.model)
    }

    

    update()
    {
       this.boats.model.rotation.y += 0.001
    }
}