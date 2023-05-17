import * as THREE from 'three'

import Experience from './Experience.js'

export default class houses
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setHouses()
    }

    setHouses()
    {
        this.houses = {}
        this.houses.model = this.resources.items.houses.scene

        this.houses.texture = this.resources.items.baked
        this.houses.texture.encoding = THREE.sRGBEncoding
        this.houses.texture.flipY = false

        this.houses.material = new THREE.MeshBasicMaterial({ map: this.houses.texture })

        this.houses.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.houses.material
            }

        })

        this.scene.add(this.houses.model)
    }

    

    update()
    {
       this.houses.model.rotation.y += 0.001
    }
}