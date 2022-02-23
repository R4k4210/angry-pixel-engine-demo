import { Component, TimeManager, Vector2 } from "angry-pixel";
import { InputController } from "../../../gameObjects/InputController";

export class PlayerMovements extends Component {
  private inputController: InputController;
  private speed: number = 200;

  private velocity: Vector2 = new Vector2();
  private position: Vector2 = new Vector2();

  protected start(): void {
    this.inputController =
      this.findGameObjectByName<InputController>("InputController");
  }

  protected update(): void {
    Vector2.scale(
      this.velocity,
      this.inputController.axes,
      this.speed * TimeManager.deltaTime
    );

    this.gameObject.transform.position = Vector2.add(
      this.position,
      this.gameObject.transform.position,
      this.velocity
    );
  }
}
