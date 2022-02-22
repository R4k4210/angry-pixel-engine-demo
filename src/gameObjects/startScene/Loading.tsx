import { GameObject, TextRenderer, Vector2 } from "mini-engine";

export class Loading extends GameObject {
  constructor() {
    super();

    this.ui = true;

    this.addComponent(
      () =>
        new TextRenderer({
          color: "#FFFFFF",
          text: "LOADING",
          fontUrl: "font/PrStart.ttf",
          fontFamily: "PrStart",
          size: 16,
          lineSeparation: 4,
          pivot: "center",
        })
    );
  }

  protected start(): void {
    this.transform.position = new Vector2(0, 0);
  }
}
