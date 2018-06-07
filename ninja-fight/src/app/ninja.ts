export class Ninja {
  id: number;
  name: string;
  image: string;
  health: number;
  attack: Attack;
  defence: string;
  special: string;

  constructor(
    id: nunber, name: string, image: string, health: number,
    attack: Attack, defence: string, special: string) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.health = health;
      this.attack = attack;
      this.defence = defence;
      this.special = special;
    }
}

export class Attack {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}
