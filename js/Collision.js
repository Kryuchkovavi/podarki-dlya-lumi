/* Общая проверка прямоугольных коллизий для объектов платформера. */
class Collision {
  static intersects(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x &&
           a.y < b.y + b.h && a.y + a.h > b.y;
  }
  static landedOn(previousBottom, player, platform) {
    return player.vy >= 0 && previousBottom <= platform.y &&
           player.x < platform.x + platform.w &&
           player.x + player.w > platform.x &&
           player.y + player.h >= platform.y;
  }
}
