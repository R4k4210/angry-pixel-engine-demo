import {
  GameObject,
  GamepadData,
  InputManager,
  KeyboardController,
  Vector2,
} from "mini-engine";

export class InputController extends GameObject {
  public axes: Vector2 = new Vector2();
  public fire: boolean = false;
  public pause: boolean = false;
  public mute: boolean = false;
  public enter: boolean = false;
  public quit: boolean = false;

  private readonly keyboard: KeyboardController = InputManager.keyboard;
  private readonly gamepad = InputManager.gamepad.getGamepad(0) as GamepadData;

  protected update(): void {
    this.axes.x = this.keyboard.isPressed("ArrowLeft")
      ? -1
      : this.keyboard.isPressed("ArrowRight")
      ? 1
      : 0;
    this.axes.y = this.keyboard.isPressed("ArrowDown")
      ? -1
      : this.keyboard.isPressed("ArrowUp")
      ? 1
      : 0;
    this.fire = this.keyboard.isPressed("KeyF");
    this.pause = this.keyboard.isPressed("KeyP");
    this.mute = this.keyboard.isPressed("KeyM");
    this.enter = this.keyboard.isPressed("Enter");
    this.quit = this.keyboard.isPressed("KeyQ");

    if (this.gamepad) {
      this.updateGamepad();
    }
  }

  private updateGamepad(): void {
    this.axes.set(
      this.gamepad.dpadRight ? 1 : this.gamepad.dpadLeft ? -1 : this.axes.x,
      this.gamepad.dpadUp ? 1 : this.gamepad.dpadDown ? -1 : this.axes.y
    );

    this.axes.set(
      this.gamepad.leftStickHorizontal > 0.1 ||
        this.gamepad.leftStickHorizontal < -0.1
        ? Math.sign(this.gamepad.leftStickHorizontal)
        : this.axes.x,
      this.gamepad.leftStickVertical > 0.1 ||
        this.gamepad.leftStickVertical < -0.1
        ? Math.sign(this.gamepad.leftStickVertical)
        : this.axes.y
    );

    this.fire = this.gamepad.leftFace || this.fire;
    this.pause = this.gamepad.start || this.pause;
    this.enter = this.gamepad.start || this.enter;
    this.mute = this.gamepad.back || this.mute;
  }
}
