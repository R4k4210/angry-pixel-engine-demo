import { Animation, AssetManager, Sprite } from "angry-pixel";
import playerSpritesheet from "../../assets/player/player_spritesheet.png";

const SPRITE_SPEED = 10;

export const frontWalk = (): Animation =>
  new Animation({
    loop: true,
    framerate: SPRITE_SPEED,
    sprites: [48, 96, 144, 192].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 0, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const backWalk = (): Animation =>
  new Animation({
    loop: true,
    framerate: SPRITE_SPEED,
    sprites: [48, 96, 144, 192].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 48, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const rigthWalk = (): Animation =>
  new Animation({
    loop: true,
    framerate: SPRITE_SPEED,
    sprites: [48, 96, 144, 192].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 96, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const leftWalk = (): Animation =>
  new Animation({
    loop: true,
    framerate: SPRITE_SPEED,
    sprites: [48, 96, 144, 192].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 144, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const idleFront = (): Animation =>
  new Animation({
    loop: false,
    framerate: 0,
    sprites: [0].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 0, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const idleBack = (): Animation =>
  new Animation({
    loop: false,
    framerate: 0,
    sprites: [0].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 48, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const idleRight = (): Animation =>
  new Animation({
    loop: false,
    framerate: 0,
    sprites: [0].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 96, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });

export const idleLeft = (): Animation =>
  new Animation({
    loop: false,
    framerate: 0,
    sprites: [0].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(playerSpritesheet),
          slice: { y: 144, x: x, width: 48, height: 48 },
          smooth: false,
        })
    ),
  });
