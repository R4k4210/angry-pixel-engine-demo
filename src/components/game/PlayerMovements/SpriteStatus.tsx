import {
  Animator,
  Component,
  Vector2,
  SpriteRenderer,
  AssetManager,
} from "angry-pixel";
import { InputController } from "../../../gameObjects/InputController";

export class SpriteStatus extends Component {
  private animator: Animator;
  private inputController: InputController;
  //Direcciones en orden de horario 1,2,3,4.
  private direction: number | null;

  protected start(): void {
    this.animator = this.getComponentByType(TYPE_ANIMATOR) as Animator;
    this.direction = null;

    this.inputController = this.findGameObjectByName(
      "InputController"
    ) as InputController;
  }

  protected update(): void {
    this.updateSpritePosition();
  }

  updateSpritePosition = () => {
    let pos = {
      x: this.inputController.axes.x,
      y: this.inputController.axes.y,
    };

    if (pos.x === 0 && pos.y === 1) {
      this.animator.playAnimation("BackWalk");
      this.direction = 1;
    } else if (pos.x === 0 && pos.y === -1) {
      this.animator.playAnimation("FrontWalk");
      this.direction = 3;
    } else if (pos.x === 1 && pos.y === 0) {
      this.animator.playAnimation("RightWalk");
      this.direction = 2;
    } else if (pos.x === -1 && pos.y === 0) {
      this.animator.playAnimation("LeftWalk");
      this.direction = 4;
    } else if (pos.x === 0 && pos.y === 0) {
      switch (this.direction) {
        case 1:
          this.animator.playAnimation("IdleBack");
          break;
        case 2:
          this.animator.playAnimation("IdleRight");
          break;
        case 3:
          this.animator.playAnimation("IdleFront");
          break;
        case 4:
          this.animator.playAnimation("IdleLeft");
          break;
        default:
          this.animator.playAnimation("IdleBack");
          break;
      }
    }
  };
}
