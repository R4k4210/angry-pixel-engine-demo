import { AssetManager, Scene, SceneManager } from "angry-pixel";
import { Loading } from "../../../gameObjects/startScene/Loading";
import backgroundAsset from "../../../assets/sceneOne/map_one.png";
import playerSpriteSheet from "../../../assets/player/player_spritesheet.png";
import tavern from "../../../assets/sceneOne/buildings/tavern.png";
import insideTavern from "../../../assets/sceneOne/buildings/inside_tavern_spritesheet.png";

export class LoadingScene extends Scene {
  constructor() {
    super();

    AssetManager.createImage(backgroundAsset);
    AssetManager.createImage(tavern);
    AssetManager.createImage(playerSpriteSheet);
    AssetManager.createImage(insideTavern);
  }

  protected start(): void {
    this.addGameObject(() => new Loading(), "LoadingUI");
  }

  protected update(): void {
    if (AssetManager.getAssetsLoaded()) {
      SceneManager.loadScene("SceneOne");
    }
  }
}
