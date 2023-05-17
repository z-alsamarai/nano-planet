import * as THREE from 'three'

import Experience from './Experience.js'

export default class airplane
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setAirplane()
    }

    setAirplane()
    {
        this.airplane = {}
        this.airplane.model = this.resources.items.airplane.scene

        this.airplane.texture = this.resources.items.baked
        this.airplane.texture.encoding = THREE.sRGBEncoding
        this.airplane.texture.flipY = false

        this.airplane.material = new THREE.MeshBasicMaterial({ map: this.airplane.texture })

        this.airplane.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.airplane.material
            }

        })

        this.scene.add(this.airplane.model)
    }

    

    update()
    {
       
    }
}