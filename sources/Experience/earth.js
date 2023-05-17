import * as THREE from 'three'

import Experience from './Experience.js'

export default class earth
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setEarth()
    }

    setEarth()
    {
        this.earth = {}
        this.earth.model = this.resources.items.earth.scene

        this.earth.texture = this.resources.items.baked
        this.earth.texture.encoding = THREE.sRGBEncoding
        this.earth.texture.flipY = false

        this.earth.material = new THREE.MeshBasicMaterial({ map: this.earth.texture })

        this.earth.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.earth.material
            }

        })

        this.scene.add(this.earth.model)
    }

    

    update()
    {
       
    }
}