namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level2 Flag`, function (sprite, location) {
    sprites.destroy(mySprite)
    info.stopCountdown()
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(1500)
    }
    game.setGameOverEffect(true, effects.hearts)
    game.splash("Level 2 Complete")
    game.splash("Level 3")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    statusbar.value += -25
    mySprite.vy = -150
    mySprite.vx = -25
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(50)
    }
    tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level1 Flag`, function (sprite, location) {
    info.stopCountdown()
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(1000)
    }
    game.setGameOverEffect(true, effects.hearts)
    game.splash("Level 1 Complete")
    game.splash("Level 2")
    info.startCountdown(14)
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 6))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
game.splash("Cube Runner")
game.splash("Level 1 Start")
info.startCountdown(12)
scene.setBackgroundColor(10)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.Player)
mySprite.ay = 185
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
controller.moveSprite(mySprite, 100, 0)
let Health = 100
info.setScore(0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.attachToSprite(mySprite)
statusbar.setColor(15, 8)
