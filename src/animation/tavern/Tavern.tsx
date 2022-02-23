import { Animation, Sprite, AssetManager } from "angry-pixel";
import taverInside from "../../assets/sceneOne/buildings/inside_tavern_spritesheet.png";

export const tavernAnimation = (): Animation =>
  new Animation({
    loop: true,
    framerate: 0.3,
    sprites: [0, 274, 548, 822].map<Sprite>(
      (x: number) =>
        new Sprite({
          image: AssetManager.getImage(taverInside),
          slice: { y: 0, x: x, width: 274, height: 209 },
          smooth: false,
        })
    ),
  });
