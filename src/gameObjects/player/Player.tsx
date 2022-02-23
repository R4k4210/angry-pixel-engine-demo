import {
  Animator,
  GameObject,
  SpriteRenderer,
  RigidBody,
  BoxCollider,
  RigidBodyType,
  AssetManager,
  Rectangle,
  Sprite,
  Vector2,
} from "angry-pixel";
import {
  frontWalk,
  leftWalk,
  backWalk,
  rigthWalk,
  idleFront,
  idleLeft,
  idleRight,
  idleBack,
} from "../../animation/player/Walk";
import { PlayerMovements } from "../../components/game/PlayerMovements/PlayerMovements";
import { SpriteStatus } from "../../components/game/PlayerMovements/SpriteStatus";
import playerSpritesheet from "../../assets/player/player_spritesheet.png";

export class Player extends GameObject {
  private spriteRenderer: SpriteRenderer;
  private position: Vector2 = new Vector2();

  constructor() {
    super();

    this.layer = "Player";
    this.position.set(0, -150);

    this.spriteRenderer = this.addComponent(
      () =>
        new SpriteRenderer({
          sprite: new Sprite({
            image: AssetManager.getImage(playerSpritesheet),
            slice: new Rectangle(0, 48, 48, 48),
            smooth: false,
          }),
        })
    );

    this.addComponent<Animator>(
      () =>
        new Animator({
          spriteRenderer: this.spriteRenderer,
        })
    )
      .addAnimation("FrontWalk", frontWalk())
      .addAnimation("BackWalk", backWalk())
      .addAnimation("RightWalk", rigthWalk())
      .addAnimation("LeftWalk", leftWalk())
      .addAnimation("IdleBack", idleBack())
      .addAnimation("IdleFront", idleFront())
      .addAnimation("IdleLeft", idleLeft())
      .addAnimation("IdleRight", idleRight());

    this.addComponent(
      () =>
        new BoxCollider({
          width: 24,
          height: 46,
          debug: true,
        })
    );

    this.addComponent(
      () =>
        new RigidBody({
          rigidBodyType: RigidBodyType.Dynamic,
          layersToCollide: ["Tavern"],
          gravity: 0,
        })
    );

    this.addComponent(() => new PlayerMovements(), "PlayerMovements");
    this.addComponent(() => new SpriteStatus(), "SpriteStatus");
  }

  protected start(): void {
    this.transform.position = this.position;
  }
}
