import { Scene } from "angry-pixel";
import { InputController } from "../../../gameObjects/InputController";
import { TavernInside } from "../../../gameObjects/map/buildings/TavernInside";
import { Player } from "../../../gameObjects/player/Player";

export class InsideTavernScene extends Scene {
  protected start(): void {
    this.gameCamera.layers = ["TavernInside", "Player"];

    this.addGameObject(() => new InputController(), "InputController");
    this.addGameObject(() => new TavernInside(), "TavernInside");
    this.addGameObject(() => new Player(), "Player");
  }
}
