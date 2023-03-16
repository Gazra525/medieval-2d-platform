namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level2 Flag`, function (sprite, location) {
    info.stopCountdown()
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(2000)
    }
    game.setGameOverEffect(true, effects.hearts)
    game.splash("Level 2 Complete")
    game.splash("Level 3")
    info.startCountdown(22)
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Coin`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(50)
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    statusbar.value += -25
    mySprite.vy = -50
    mySprite.vx = -25
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(50)
        statusbar.value += 25
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level3 Flag`, function (sprite, location) {
    info.stopCountdown()
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(2000)
    }
    game.gameOver(true)
    game.splash("Level 3 Complete")
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
game.setDialogTextColor(10)
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
