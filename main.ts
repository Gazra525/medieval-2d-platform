namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    statusbar.value += -25
    mySprite.vy = -100
    mySprite.vx = -25
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100
    }
})
function generateCoins () {
    CoinNum = 10
    CoinList = []
    for (let index = 0; index < CoinNum; index++) {
        CoinList.push(sprites.create(assets.image`Coin`, SpriteKind.Player))
    }
    for (let Coin of sprites.allOfKind(SpriteKind.Coin)) {
        tiles.placeOnTile(Coin, tiles.getTileLocation(1, 2))
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let CoinList: Sprite[] = []
let CoinNum = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
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
let Coin = sprites.create(assets.image`Coin`, SpriteKind.Coin)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
controller.moveSprite(mySprite, 100, 0)
let Health = 100
info.setScore(0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setColor(2, 8)
