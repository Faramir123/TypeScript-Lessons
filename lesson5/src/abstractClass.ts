abstract class MyGraphicsPrimitive2D {
  constructor(public pointX: number, public pointY: number) {}

  abstract aremap(x: number, y: number): void;
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  constructor(public pointX: number, public pointY: number) {
    super(pointX, pointY);
  }
  aremap(x: number, y: number): void {
    this.pointX = x;
    this.pointY = y;
  }
  abstract getArea(): void;
}

class MyCircle extends MyAreaPrimitive2D {
  constructor(public pointX: number, public pointY: number) {
    super(pointX, pointY);
  }
  aremap(x: number, y: number): void {
    this.pointX = x;
    this.pointY = y;
  }
  getArea(): void {
    console.log("Площадь равна");
  }
  centerOkrujnosty(): void {
    console.log("центр окружности находится");
  }
  radius(): void {
    Console.log(
      "Радиус равен расстоянию от центра окружности до контура окружности"
    );
  }
}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    public pointX: number,
    public pointY: number,
    public width: number,
    public height: number
  ) {
    super(width, height);
  }
  getParametrs(): void {
    console.log(`щирина=${this.width} высота=${this.height}`);
  }
}
