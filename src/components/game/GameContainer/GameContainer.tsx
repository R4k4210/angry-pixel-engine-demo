import { useEffect, useRef } from "react";
import {
  GameConfig,
  Vector2,
  Rectangle,
  CollisionMethodConfig,
  Game,
} from "angry-pixel";
import styles from "./GameContainer.module.css";
import { LoadingScene } from "../LoadingScene/LoadingScene";
import { SceneOne } from "../SceneOne/SceneOne";
import { InsideTavernScene } from "../InsideTavernScene/InsideTavernScene";

const GameContainer = (): JSX.Element => {
  let gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: Game;
    const containerElement = gameRef.current;

    if (containerElement) {
      const config: GameConfig = {
        containerNode: containerElement,
        gameWidth: window.innerWidth / 2,
        gameHeight: window.innerHeight / 2,
        debugEnabled: false,
        spriteDefaultScale: new Vector2(1, 1),
        collisions: {
          quadTreeBounds: new Rectangle(-400, -300, 800, 600),
          method: CollisionMethodConfig.AABB,
        },
      };

      game = new Game(config);
      game.addScene("LoadingScene", () => new LoadingScene(), true);
      game.addScene("SceneOne", () => new SceneOne());
      game.addScene("InsideTavernScene", () => new InsideTavernScene());
      game.run();
    }

    return () => game.stop();
  }, []);

  return <div className={styles.container} ref={gameRef} />;
};

export default GameContainer;
