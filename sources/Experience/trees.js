import * as THREE from 'three'

import Experience from './Experience.js'

export default class trees
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world
        
        this.setTrees()
    }

    setTrees()
    {
        this.trees = {}
        this.trees.model = this.resources.items.trees.scene

        this.trees.texture = this.resources.items.baked
        this.trees.texture.encoding = THREE.sRGBEncoding
        this.trees.texture.flipY = false

        this.trees.material = new THREE.MeshBasicMaterial({ map: this.trees.texture })

        this.trees.model.traverse((_child) =>
        { if(_child instanceof THREE.Mesh)
            { 
                _child.material = this.trees.material
            }

        })

        this.scene.add(this.trees.model)
    }

    

    update()
    {
       
    }
}