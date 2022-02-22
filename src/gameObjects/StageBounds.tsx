import { BoxCollider, GameObject, RigidBody, RigidBodyType } from "mini-engine";

export class StageBounds extends GameObject {
  constructor() {
    super();

    this.layer = "StageBounds";

    [-428, 428].forEach((offset: number) =>
      this.addComponent(
        () =>
          new BoxCollider({
            width: 512,
            height: 10,
            offsetY: offset,
            debug: true,
          })
      )
    );

    [-264, 264].forEach((offset: number) =>
      this.addComponent(
        () =>
          new BoxCollider({
            width: 10,
            height: 840,
            offsetX: offset,
            debug: true,
          })
      )
    );

    this.addComponent(
      () =>
        new RigidBody({
          rigidBodyType: RigidBodyType.Static,
        })
    );
  }
}
