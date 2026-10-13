/* Отслеживание клавиш без зависимости от конкретного игрового экрана. */
class InputHandler {
  constructor(target = window) {
    this.keys = new Set();
    this.onDown = e => this.keys.add(e.key.toLowerCase());
    this.onUp = e => this.keys.delete(e.key.toLowerCase());
    target.addEventListener('keydown', this.onDown);
    target.addEventListener('keyup', this.onUp);
    this.target = target;
  }
  pressed(...keys) { return keys.some(key => this.keys.has(key.toLowerCase())); }
  clear() { this.keys.clear(); }
  destroy() {
    this.target.removeEventListener('keydown', this.onDown);
    this.target.removeEventListener('keyup', this.onUp);
    this.clear();
  }
}
