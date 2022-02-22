import { GameCamera, PhysicsComponent } from "mini-engine";
import { Player } from "../../../gameObjects/player/Player";

export class FollowPlayerCamera extends PhysicsComponent {
  private player: Player;
  private camera: GameCamera;

  protected start(): void {
    this.player = this.findGameObjectByTag<Player>("Player") as Player;
    this.camera = this.gameObject as GameCamera;
  }

  protected update(): void {
    this.followPlayer();
  }

  private followPlayer(): void {
    let x = this.camera.viewportRect.width / 2;
    let y = this.camera.viewportRect.height / 2;

    if (x <= 0 || y <= 0) {
      return;
    }

    this.gameObject.transform.position.x = this.clamp(
      this.player.transform.position.x,
      -x,
      x
    );
    this.gameObject.transform.position.y = this.clamp(
      this.player.transform.position.y,
      -y,
      y
    );
  }

  private clamp(number: number, min: number, max: number): number {
    return Math.max(min, Math.min(number, max));
  }
}
