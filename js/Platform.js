/* Модель платформы; координаты задаются в мировом пространстве Canvas. */
class Platform {
  constructor(x, y, w, h = 18, style = 0) {
    Object.assign(this, { x, y, w, h, style });
  }
  getBounds() { return { x: this.x, y: this.y, w: this.w, h: this.h }; }
}
