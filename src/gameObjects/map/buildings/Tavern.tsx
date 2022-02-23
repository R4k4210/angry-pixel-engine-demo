import {
  AssetManager,
  GameObject,
  Sprite,
  SpriteRenderer,
  Vector2,
  BoxCollider,
  RigidBody,
  RigidBodyType,
  SceneManager,
} from "angry-pixel";
import tavern from "../../../assets/sceneOne/buildings/tavern.png";

export class Tavern extends GameObject {
  private readonly position: Vector2 = new Vector2();
  private doorCollider: BoxCollider;

  constructor() {
    super();

    this.layer = "Tavern";

    this.addComponent(
      () =>
        new SpriteRenderer({
          sprite: new Sprite({
            image: AssetManager.getImage(tavern),
            smooth: false,
          }),
        })
    );

    this.addComponent(
      () =>
        new BoxCollider({
          width: 146,
          height: 119,
          offsetY: 20,
          debug: true,
        })
    );

    this.doorCollider = this.addComponent(
      () =>
        new BoxCollider({
          width: 24,
          height: 10,
          offsetY: -35,
          debug: true,
        }),
      "TavernDoor"
    );

    this.addComponent(
      () =>
        new RigidBody({
          rigidBodyType: RigidBodyType.Static,
        })
    );

    this.position.set(100, 100);
  }

  protected start(): void {
    this.transform.position = this.position;
  }

  protected update(): void {
    if (this.doorCollider.collidesWithLayer("Player")) {
      if (AssetManager.getAssetsLoaded()) {
        SceneManager.loadScene("InsideTavernScene");
      }
    }
  }
}
