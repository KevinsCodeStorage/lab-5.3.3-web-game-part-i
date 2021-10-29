function newImage(name,source,left,bottom){
    name = document.createElement('img')
    name.src = source
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
}

let greenCharacter
newImage(greenCharacter, 'assets/green-character.gif','100px','100px')

let pineTree
newImage(pineTree,'assets/pine-tree.png','450px','200px')

let tree
newImage(tree,'assets/tree.png','200px','300px')

let pillar
newImage(pillar,'assets/pillar.png','350px','100px')

let crate
newImage(crate,'assets/crate.png','150px','200px')

let well
newImage(well,'assets/well.png','500px','425px')


function newItem(item, source,left,bottom){
    item = document.createElement('img')
    item.src = source
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

let sword
newItem(sword,'assets/sword.png','500px','405px')

let shield
newItem(shield,'assets/sheild.png','165px','185px')

let staff
newItem(staff,'assets/staff.png','600px','100px')
