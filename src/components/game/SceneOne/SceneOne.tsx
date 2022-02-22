import { Scene } from "angry-pixel";
import { InputController } from "../../../gameObjects/InputController";
import { MapOne } from "../../../gameObjects/map/MapOne";
import { Player } from "../../../gameObjects/player/Player";
import { Tavern } from "../../../gameObjects/map/buildings/Tavern";

export class SceneOne extends Scene {
  protected start(): void {
    this.gameCamera.layers = ["MapOne", "Tavern", "Player"];

    this.addGameObject(() => new InputController(), "InputController");
    this.addGameObject(() => new MapOne(), "MapOne");
    this.addGameObject(() => new Player(), "Player");
    this.addGameObject(() => new Tavern(), "Tavern");
  }
}
