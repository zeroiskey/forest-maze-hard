namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 a . a . . . . . . . 
. . . . . 5 . . 5 . . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . 5 . . 5 . . 5 . . . . . . 
. . . . 5 5 5 5 5 . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . 5 . 5 . . . . . . . . 
. . . . 5 . . . 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000303050505050505050505050505050503030505050505050505050503030305030303030303030303030505030303050303030303030303030305050303030503030303030303030303050503030305030303030303030505050505050503050303030303030305050505050505030503030303030303050503030303030305050505030303030505030303030303050505050505050505050303030303030505050505050505050503030303030305050503030303030505030303030303050505050505050305050505050303030505050303050503030303030503030305050503030305030303030305030303050508030303030303030303030303030a`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.builtin.forestTiles0,sprites.castle.tilePath9,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tilePath7,sprites.dungeon.doorOpenWest,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
music.playMelody("G F A E B F C E ", 120)
