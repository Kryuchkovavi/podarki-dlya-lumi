/* Минимальная обёртка над Canvas 2D-контекстом. */
class Renderer {
  constructor(canvas) {
    if (!canvas) throw new Error('Не найден игровой canvas');
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
  }
  clear(color = '#76b6c2') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
