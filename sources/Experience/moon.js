import * as THREE from 'three'

import Experience from './Experience.js'

export default class moon
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setMoon()
    }

    setMoon()
    {
        this.moon = {}
        this.moon.model = this.resources.items.moon.scene

        this.moon.texture = this.resources.items.baked
        this.moon.texture.encoding = THREE.sRGBEncoding
        this.moon.texture.flipY = false

        this.moon.material = new THREE.MeshBasicMaterial({ map: this.moon.texture })

        this.moon.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.moon.material
            }

        })

        this.scene.add(this.moon.model)
    }

    

    update()
    {
       
    }
}