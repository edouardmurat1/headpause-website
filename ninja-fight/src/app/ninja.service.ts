import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  ninjas: Ninja[];

  constructor() {
    let sasuke = new Ninja(1, 'Sasuke', '../assets/sasuke.png',
      new Health(75), new Chakra(130),
      new Action('shuriken', 15, 0, '../assets/sasuke-shuriken.jpg', 'attack'),
      new Action('sharingan', 0, 50, '../assets/sasuke-sharingan.jpg', 'defence'),
      new Action('fireball', 50, 70, '../assets/sasuke-fireball.jpg', 'special'));

    let naruto = new Ninja(2, 'Naruto', '../assets/naruto.png',
      new Health(115), new Chakra(100),
      new Action('punch', 30, 10, '../assets/naruto-punch.jpg', 'attack'),
      new Action('transformation', 0, 30, '../assets/naruto-transformation.jpg', 'defence'),
      new Action('shadow clone', 60, 60, '../assets/naruto-shadowclone.jpg', 'special'));

    let sakura = new Ninja(3, 'Sakura', '../assets/sakura.png',
      new Health(100), new Chakra(115),
      new Action('kunai', 15, 0, '../assets/sakura-kunai.jpg', 'attack'),
      new Action('substitution', 0, 20, '../assets/sakura-substitution.jpg', 'defence'),
      new Action('inner strength', 40, 70, '../assets/sakura-innerstrength.jpg', 'special'));

    this.ninjas = [
      sasuke,
      naruto,
      sakura
    ];
  }

  copy(o: any) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
      v = o[key];
      output[key] = (typeof v === "object") ? this.copy(v) : v;
    }
    return output;
  }

  getNinjas(): Ninja[] {
    return this.copy(this.ninjas);
  }

  getNinja(id: number): Ninja {
    return this.copy(this.ninjas.find(ninja => ninja.id === id));
  }

  getRandomNinja(): Ninja {
    return this.copy(this.ninjas[Math.floor(Math.random()*this.ninjas.length)]);
  }
}

export class Ninja {
  id: number;
  name: string;
  image: string;
  health: Health;
  chakra: Chakra;
  attack: Action;
  defence: Action;
  special: Action;

  constructor(
    id: number, name: string, image: string,
    health: Health, chakra: Chakra,
    attack: Action, defence: Action, special: Action) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.health = health;
      this.chakra = chakra;
      this.attack = attack;
      this.defence = defence;
      this.special = special;
  }

  getActions(): Action[] {
    let actions: Action[] = [];
    actions.push(this.attack);
    actions.push(this.defence);
    actions.push(this.special);
    return actions;
  }
}

export class Health {
  max: number;
  now: number;
  percent: number;

  constructor(max: number) {
    this.max = max;
    this.now = max;
    this.percent = 100;
  }

  add(n: number) {
    this.now = this.now + n;
    this.percent = this.now * 100 / this.max;
  };

  remove(n: number) {
    this.now = this.now - n;
    this.now = (this.now < 0)? 0 : this.now;
    this.percent = this.now * 100 / this.max;
  };
}

export class Chakra {
  max: number;
  now: number;
  percent: number;

  constructor(max: number) {
    this.max = max;
    this.now = max;
    this.percent = 100;
  }

  add(n: number) {
    this.now = this.now + n;
    this.percent = this.now * 100 / this.max;
  };

  remove(n: number) {
    this.now = this.now - n;
    this.now = (this.now < 0)? 0 : this.now;
    this.percent = this.now * 100 / this.max;
  };
}

export class Action {
  name: string;
  image: string;
  damage: number;
  chakra: number;
  type: string;

  constructor(name: string, damage: number, chakra: number, image: string, type: string) {
    this.name = name;
    this.damage = damage;
    this.chakra = chakra;
    this.image = image;
    this.type = type;
  }
}
