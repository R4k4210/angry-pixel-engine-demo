import {
  AssetManager,
  GameObject,
  Sprite,
  SpriteRenderer,
  Vector2,
} from "angry-pixel";
import mapOne from "../../assets/sceneOne/map_one.png";

export class MapOne extends GameObject {
  private readonly position: Vector2 = new Vector2();

  constructor() {
    super();

    this.layer = "MapOne";

    this.addComponent(
      () =>
        new SpriteRenderer({
          sprite: new Sprite({
            image: AssetManager.getImage(mapOne),
            smooth: false,
          }),
          tiled: new Vector2(1, 3),
        })
    );

    this.position.y = 0;
  }
}
