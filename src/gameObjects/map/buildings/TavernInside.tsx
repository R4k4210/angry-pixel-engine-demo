import {
  AssetManager,
  GameObject,
  Sprite,
  SpriteRenderer,
  Vector2,
  Animator,
  TYPE_ANIMATOR,
} from "mini-engine";
import tavernInside from "../../../assets/sceneOne/buildings/inside_tavern_spritesheet.png";
import { tavernAnimation } from "../../../animation/tavern/Tavern";

export class TavernInside extends GameObject {
  private readonly position: Vector2 = new Vector2();
  private spriteRenderer: SpriteRenderer;
  private animator: Animator;

  constructor() {
    super();

    this.layer = "TavernInside";

    this.spriteRenderer = this.addComponent(
      () =>
        new SpriteRenderer({
          sprite: new Sprite({
            image: AssetManager.getImage(tavernInside),
            smooth: false,
          }),
          //tiled: new Vector2(1, 3),
        })
    );

    this.addComponent<Animator>(
      () =>
        new Animator({
          spriteRenderer: this.spriteRenderer,
        })
    ).addAnimation("TavernAnimation", tavernAnimation());

    this.position.y = 0;
  }

  protected start(): void {
    this.animator = this.getComponentByType(TYPE_ANIMATOR) as Animator;
  }

  protected update(): void {
    this.animator.playAnimation("TavernAnimation");
  }
}
