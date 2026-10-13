/* Базовая модель персонажа для движения и гравитации. */
class Player {
  constructor({ x = 0, y = 0, w = 24, h = 34, speed = 220, jumpSpeed = 440, gravity = 1200 } = {}) {
    Object.assign(this, { x, y, w, h, speed, jumpSpeed, gravity, vx: 0, vy: 0, grounded: false });
  }
  move(direction) { this.vx = Math.max(-1, Math.min(1, direction)) * this.speed; }
  jump() { if (this.grounded) { this.vy = -this.jumpSpeed; this.grounded = false; return true; } return false; }
  applyGravity(dt) { this.vy += this.gravity * Math.min(dt, 0.05); }
}
