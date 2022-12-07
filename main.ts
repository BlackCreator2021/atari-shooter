namespace SpriteKind {
    export const asteroid = SpriteKind.create()
    export const asteriod_splitter = SpriteKind.create()
    export const asteroid_splitter2 = SpriteKind.create()
    export const placeholder = SpriteKind.create()
    export const ship1 = SpriteKind.create()
    export const ship2 = SpriteKind.create()
    export const ship3 = SpriteKind.create()
    export const supplydrop = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (can_attack == 1) {
        if (canattack == 1) {
            canattack = 0
            B_u_l_L_E_t = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, spaceship_player, 0, -300)
            timer.after(100, function () {
                canattack = 1
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.asteroid_splitter2, function (sprite, otherSprite) {
    lives += -1
    otherSprite.setKind(SpriteKind.placeholder)
    otherSprite.setVelocity(0, 0)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(600, function () {
        otherSprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.asteroid, function (sprite, otherSprite) {
    lives += -1
    otherSprite.setKind(SpriteKind.placeholder)
    otherSprite.setVelocity(0, 0)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(600, function () {
        otherSprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.asteriod_splitter, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setKind(SpriteKind.placeholder)
    otherSprite.setVelocity(0, 0)
    sprite.destroy()
    mini_asteroid = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 . . 2 2 . . 2 . . . . 
        . . 2 2 2 2 2 2 2 2 . 2 . . . . 
        . . 2 2 . 2 2 . . 2 2 2 . . . . 
        . . 2 2 2 . 2 2 . . 2 2 . . . . 
        . . 2 . 2 . . 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 . 2 2 . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, 20, 20)
    mini_asteroid.setKind(SpriteKind.asteroid)
    mini_asteroid = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 . . 2 . 2 2 . . . 
        . . . 2 2 . 2 2 2 2 . . 2 2 . . 
        . . . 2 2 . . 2 2 2 2 2 . 2 . . 
        . . . . 2 2 . . 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 . . . 2 . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, -20, 20)
    mini_asteroid.setKind(SpriteKind.asteroid)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(600, function () {
        otherSprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.asteriod_splitter, function (sprite, otherSprite) {
    lives += -1
    otherSprite.setKind(SpriteKind.placeholder)
    otherSprite.setVelocity(0, 0)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(600, function () {
        otherSprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.asteroid_splitter2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setKind(SpriteKind.placeholder)
    otherSprite.setVelocity(0, 0)
    sprite.destroy()
    mini_asteroid = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . 7 . . . 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 . 7 . . . . 
        . . . . 7 . 7 7 7 7 . . 7 . . . 
        . . . . 7 . 7 . . 7 7 7 7 . . . 
        . . . . . 7 7 . . 7 . . 7 7 . . 
        . . . . . . 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . 7 7 . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, 0, 20)
    mini_asteroid.setKind(SpriteKind.asteroid)
    mini_asteroid = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . 7 7 . 7 . 7 7 . . . . . 
        . . . . 7 7 7 7 . . 7 . . . . . 
        . . . 7 7 . 7 7 7 7 7 . . . . . 
        . . . 7 7 7 . 7 7 7 . . . . . . 
        . . . . 7 7 7 7 . 7 . . . . . . 
        . . . . . 7 7 . . 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, 20, 20)
    mini_asteroid.setKind(SpriteKind.asteroid)
    mini_asteroid = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . 7 7 7 7 . 7 7 . . . . . . 
        . . . 7 . . 7 7 . . 7 . . . . . 
        . . . 7 7 7 7 7 . . 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 . . 7 7 . 7 7 . . . . 
        . . . . 7 7 . . 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, -20, 20)
    mini_asteroid.setKind(SpriteKind.asteroid)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(600, function () {
        otherSprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.asteroid, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setKind(SpriteKind.placeholder)
    otherSprite.setVelocity(0, 0)
    sprite.destroy()
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . 2 2 . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . 2 2 . . . . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . 2 2 . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(600, function () {
        otherSprite.destroy()
    })
})
let asteroid1: Sprite = null
let supply_drop: Sprite = null
let space_ship3: Sprite = null
let space_ship2: Sprite = null
let space_ship1: Sprite = null
let mini_asteroid: Sprite = null
let B_u_l_L_E_t: Sprite = null
let hp_bar: Sprite = null
let can_attack = 0
let canattack = 0
let spaceship_player: Sprite = null
spaceship_player = sprites.create(img`
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . 1 1 . . 1 1 . . 1 1 . . . 
    . . . 1 1 . . 1 1 . . 1 1 . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 . . 1 1 1 1 . . . 
    . . . 1 1 1 1 . . 1 1 1 1 . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 . . 1 1 . . 1 1 . . . 
    . . . 1 1 . . 1 1 . . 1 1 . . . 
    . 1 1 1 1 . . 1 1 . . 1 1 1 1 . 
    . 1 1 1 1 . . 1 1 . . 1 1 1 1 . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccbbbccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccbccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccbccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccc
    ccccccccccbccccccccccccccccccbccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccbbcccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccbccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccbccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccbcccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccbcccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccc
    cccccccccccccccccccccccbccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccbbbccccccccccccccccccccccc
    ccccccccccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccbbbbccccccccccccccccccc
    cccccccccccccccccccccbccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccbbbcccccccccccccccc
    ccccccccccccccccccccbcccccccccccccccccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccbbcccccccccccccc
    cccccccccccccccccccbcccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccbbcccccccccccc
    ccccccccccccccccccbcccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccccccbbcccccccccc
    ccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccbccccccccc
    cccccccccccccccccbccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccbbccccccc
    ccccccccccccccccbccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccbcccccc
    cccccccccccccccbccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccbbcccc
    ccccccccccccccbccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccbbcc
    ccccccccccccccbccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccbb
    cccccccccccccbccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
scene.centerCameraAt(0, 150)
spaceship_player.setVelocity(0, 50)
canattack = 0
spaceship_player.startEffect(effects.fire, 2100)
let lives = 4
timer.after(2100, function () {
    controller.moveSprite(spaceship_player, 100, 0)
    spaceship_player.setStayInScreen(true)
    can_attack = 1
    canattack = 1
    hp_bar = sprites.create(img`
        ....77.........77.........77.........77....
        ....77.........77.........77.........77....
        77..77..77.77..77..77.77..77..77.77..77..77
        77..77..77.77..77..77.77..77..77.77..77..77
        ..777777.....777777.....777777.....777777..
        ..777777.....777777.....777777.....777777..
        7777..7777.7777..7777.7777..7777.7777..7777
        7777..7777.7777..7777.7777..7777.7777..7777
        ..777777.....777777.....777777.....777777..
        ..777777.....777777.....777777.....777777..
        7777777777.7777777777.7777777777.7777777777
        7777777777.7777777777.7777777777.7777777777
        77..77..77.77..77..77.77..77..77.77..77..77
        77..77..77.77..77..77.77..77..77.77..77..77
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(hp_bar, assets.tile`myTile2`)
})
game.onUpdate(function () {
    if (lives == 0) {
        game.over(false)
    }
})
game.onUpdate(function () {
    if (lives == 3) {
        hp_bar.setImage(img`
            ....55.........55.........55...............
            ....55.........55.........55...............
            55..55..55.55..55..55.55..55..55...........
            55..55..55.55..55..55.55..55..55...........
            ..555555.....555555.....555555.............
            ..555555.....555555.....555555.............
            5555..5555.5555..5555.5555..5555...........
            5555..5555.5555..5555.5555..5555...........
            ..555555.....555555.....555555.............
            ..555555.....555555.....555555.............
            5555555555.5555555555.5555555555...........
            5555555555.5555555555.5555555555...........
            55..55..55.55..55..55.55..55..55...........
            55..55..55.55..55..55.55..55..55...........
            `)
    } else if (lives == 2) {
        hp_bar.setImage(img`
            ....44.........44..........................
            ....44.........44..........................
            44..44..44.44..44..44......................
            44..44..44.44..44..44......................
            ..444444.....444444........................
            ..444444.....444444........................
            4444..4444.4444..4444......................
            4444..4444.4444..4444......................
            ..444444.....444444........................
            ..444444.....444444........................
            4444444444.4444444444......................
            4444444444.4444444444......................
            44..44..44.44..44..44......................
            44..44..44.44..44..44......................
            `)
    } else if (lives == 1) {
        hp_bar.setImage(img`
            ....22.....................................
            ....22.....................................
            22..22..22.................................
            22..22..22.................................
            ..222222...................................
            ..222222...................................
            2222..2222.................................
            2222..2222.................................
            ..222222...................................
            ..222222...................................
            2222222222.................................
            2222222222.................................
            22..22..22.................................
            22..22..22.................................
            `)
    }
})
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(10)) {
        space_ship1 = sprites.create(img`
            . . . . . . 9 9 . . . . . . 
            . . . . . . 1 1 . . . . . . 
            . . . . . . 9 9 . . . . . . 
            . . . . . . 1 1 . . . . . . 
            . . 1 1 . . 9 9 . . 1 1 . . 
            . . 1 1 . . 1 1 . . 1 1 . . 
            . . . . 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 . . 1 1 1 1 . . 
            . . 1 1 1 1 . . 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 . . 1 1 . . 1 1 . . 
            . . 1 1 . . 1 1 . . 1 1 . . 
            1 1 1 1 . . 1 1 . . 1 1 1 1 
            1 1 1 1 . . 1 1 . . 1 1 1 1 
            `, SpriteKind.ship1)
        space_ship1.setPosition(randint(0, 160), -5)
        space_ship1.vy = 10
    } else if (Math.percentChance(10)) {
        space_ship2 = sprites.create(img`
            ......99..99......
            ......99..99......
            ....1199..9911....
            ....1999..9991....
            ..119999..999911..
            ..111199..991111..
            ....1111991111....
            ....1111111111....
            ..1111..11..1111..
            ..1111..11..1111..
            ....1111991111....
            ....1999999991....
            ..11199999999111..
            ..11111111111111..
            ..11..11..11..11..
            ..11..11..11..11..
            9911..99..99..1199
            9911..99..99..1199
            `, SpriteKind.ship2)
        space_ship2.setPosition(randint(0, 160), -5)
        space_ship2.vy = 10
    } else if (Math.percentChance(10)) {
        space_ship3 = sprites.create(img`
            . . . . . 9 9 9 9 . . . . . 
            . . . . . 9 1 1 9 . . . . . 
            . . . . . . 9 9 . . . . . . 
            . . . . . 9 1 1 9 . . . . . 
            . . 9 9 . 9 9 9 9 . 9 9 . . 
            . . 9 1 . 9 1 1 9 . 1 9 . . 
            . . . . 9 1 1 1 1 9 . . . . 
            . . . . 1 9 9 9 9 1 . . . . 
            . . 9 1 1 9 . . 9 1 1 9 . . 
            . . 9 1 1 9 . . 9 1 1 9 . . 
            . . . . 1 9 9 9 9 1 . . . . 
            . . . . 1 9 1 1 9 1 . . . . 
            . . 9 1 9 9 9 9 9 9 1 9 . . 
            . . 1 9 1 1 1 1 1 1 9 1 . . 
            . . 1 9 . . 1 1 . . 9 1 . . 
            . . 1 9 . . 1 1 . . 9 1 . . 
            9 1 1 9 . . 1 1 . . 9 1 1 9 
            9 9 9 1 . . 9 9 . . 1 9 9 9 
            `, SpriteKind.ship3)
        space_ship3.setPosition(randint(0, 160), -5)
        space_ship3.vy = 10
    } else {
        supply_drop = sprites.create(img`
            . . . . d d d d d d d d . . . . 
            . . . d d d d d d d d d d . . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . 1 d d . d . . d . d d 1 . . 
            . . . 1 . . 1 . . 1 . . 1 . . . 
            . . . . 1 . . 1 1 . . 1 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 7 7 7 7 5 5 . . . . 
            . . . . 5 7 5 7 7 5 7 5 . . . . 
            . . . . 5 7 7 5 5 7 7 5 . . . . 
            . . . . 5 7 7 5 5 7 7 5 . . . . 
            . . . . 5 7 5 7 7 5 7 5 . . . . 
            . . . . 5 5 7 7 7 7 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.supplydrop)
        supply_drop.setPosition(randint(0, 160), -5)
        supply_drop.vy = 10
    }
})
game.onUpdateInterval(500, function () {
    if (can_attack == 1) {
        if (Math.percentChance(25)) {
            asteroid1 = sprites.create(img`
                . . . 7 7 7 . 7 7 7 . . . . . . 
                . . . 7 . 7 7 7 7 7 7 . . . . . 
                . . 7 7 . . 7 7 7 . 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 . . 7 7 
                . 7 7 7 7 7 7 7 7 7 . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 . . 7 7 
                7 7 7 . 7 7 7 7 7 7 7 7 7 7 7 . 
                7 7 7 . 7 7 7 . 7 7 7 7 7 . . 7 
                7 7 . 7 7 7 . . 7 7 7 7 7 7 . 7 
                7 7 7 7 7 7 . 7 7 . . 7 7 7 . 7 
                7 . . 7 7 7 7 7 7 . . 7 7 7 7 . 
                . 7 . . 7 7 7 7 7 7 7 7 7 7 7 . 
                . . 7 7 7 7 7 7 7 7 . 7 7 7 . . 
                . . . 7 7 7 7 7 7 . . 7 7 . . . 
                . . . . 7 . . . 7 7 7 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `, SpriteKind.asteroid_splitter2)
            asteroid1.setPosition(randint(0, 160), -5)
            asteroid1.vy = 15
        } else if (Math.percentChance(25)) {
            asteroid1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 2 2 2 . . . 
                . . 2 2 2 2 2 2 2 . 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
                . 2 . 2 2 2 2 . 2 2 2 . . . 2 . 
                . 2 . 2 2 2 2 . . 2 2 2 . 2 2 . 
                . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                2 2 2 2 . 2 2 2 2 . 2 2 2 2 . . 
                . 2 2 2 . 2 2 2 2 . . 2 . . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                2 2 . . 2 2 2 2 . 2 2 2 2 2 . . 
                . 2 . . 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 . 2 2 . . . 
                . . . . 2 2 . . . . 2 2 . . . . 
                `, SpriteKind.asteriod_splitter)
            asteroid1.setPosition(randint(0, 160), -5)
            asteroid1.vy = 25
        } else if (Math.percentChance(25)) {
            asteroid1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 . . . . . . . . 
                . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                . . 8 8 8 8 8 8 8 8 . . 8 8 8 . 
                . 8 8 . . 8 8 8 8 8 . . 8 8 8 . 
                8 8 . . 8 8 8 8 8 8 8 8 8 8 . 8 
                8 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 . 8 8 . 8 8 8 8 8 
                8 8 . 8 8 8 8 8 8 8 . . 8 8 8 8 
                8 . . . 8 8 8 8 8 8 8 . 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 
                8 8 8 8 8 8 8 8 8 . 8 8 8 8 . 8 
                8 8 . . . . 8 8 8 . 8 8 8 . . 8 
                . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                . . . 8 8 8 8 8 8 8 . . . . . . 
                `, SpriteKind.asteroid)
            asteroid1.setPosition(randint(0, 160), -5)
            asteroid1.vy = 35
        } else {
            asteroid1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 3 3 3 . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . 3 3 3 . . 3 . . 3 3 3 3 3 3 
                . . 3 3 3 3 3 3 . 3 3 3 3 3 3 3 
                . . 3 3 3 3 3 3 3 3 . . 3 3 3 . 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                3 3 . 3 3 3 3 3 3 3 3 3 . 3 . . 
                3 3 . 3 3 3 3 3 3 3 3 . . 3 . . 
                3 3 3 3 3 3 3 3 . 3 3 3 3 3 . . 
                . 3 3 3 . . 3 . . 3 3 3 3 3 . . 
                . . . 3 3 3 3 3 3 3 3 3 3 . . . 
                . . . . 3 3 3 3 . 3 3 3 . . . . 
                . . . . . . 3 3 3 3 . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                `, SpriteKind.asteroid)
            asteroid1.setPosition(randint(0, 160), -5)
            asteroid1.vy = 25
        }
    }
})
