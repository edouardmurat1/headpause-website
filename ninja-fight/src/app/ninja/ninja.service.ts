import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  ninjas: Ninja[];

  constructor() {
    let iruka = new Ninja(1, 'Iruka', '../assets/iruka.png',
      new Health(100), new Chakra(100),
      new Action('shuriken', '../assets/iruka-shuriken.jpg', 'attack', 10, 0),
      new Action('human shield', '../assets/iruka-human-shield.jpg', 'defence', 0, 20),
      new Action('yell', '../assets/iruka-yell.jpg', 'special', 30, 30));

    let mizuki = new Ninja(2, 'Mizuki', '../assets/mizuki.png',
      new Health(100), new Chakra(100),
      new Action('shuriken', '../assets/mizuki-shuriken.jpg', 'attack', 30, 10),
      new Action('substitution', '../assets/substitution.jpg', 'defence', 0, 40),
      new Action('deception', '../assets/mizuki-deception.jpg', 'special', 30, 30));

    let sasuke = new Ninja(3, 'Sasuke', '../assets/sasuke.png',
      new Health(100), new Chakra(80),
      new Action('shuriken', '../assets/sasuke-shuriken.jpg', 'attack', 20, 10),
      new Action('sharingan', '../assets/sasuke-sharingan.jpg', 'defence', 0, 30),
      new Action('fireball', '../assets/sasuke-fireball.jpg', 'special', 40, 30));

    let naruto = new Ninja(4, 'Naruto', '../assets/naruto.png',
      new Health(100), new Chakra(120),
      new Action('punch', '../assets/naruto-punch.jpg', 'attack', 10, 0),
      new Action('transformation', '../assets/naruto-transformation.jpg', 'defence', 0, 30),
      new Action('shadow clone', '../assets/naruto-shadowclone.jpg', 'special', 30, 30));

    let sakura = new Ninja(5, 'Sakura', '../assets/sakura.png',
      new Health(120), new Chakra(100),
      new Action('kunai', '../assets/sakura-kunai.jpg', 'attack', 20, 10),
      new Action('substitution', '../assets/substitution.jpg', 'defence', 0, 30),
      new Action('inner strength', '../assets/sakura-innerstrength.jpg', 'special', 30, 40));

    let kakashi = new Ninja(6, 'Kakashi', '../assets/kakashi.png',
      new Health(80), new Chakra(80),
      new Action('kunai', '../assets/kakashi-kunai.jpg', 'attack', 30, 10),
      new Action('copy', '../assets/kakashi-copy.jpg', 'defence', 0, 30),
      new Action('chidori', '../assets/kakashi-chidori.jpg', 'special', 40, 30));

    let zabuza = new Ninja(7, 'Zabuza', '../assets/zabuza.png',
      new Health(100), new Chakra(100),
      new Action('sword', '../assets/zabuza-sword.jpg', 'attack', 10, 0),
      new Action('water clone', '../assets/zabuza-water-clone.jpg', 'defence', 0, 30),
      new Action('mist', '../assets/zabuza-mist.jpg', 'special', 40, 30));

    let haku = new Ninja(8, 'Haku', '../assets/haku.png',
      new Health(80), new Chakra(100),
      new Action('senbon', '../assets/haku-senbon.jpg', 'attack', 20, 10),
      new Action('disguise', '../assets/haku-disguise.jpg', 'defence', 0, 40),
      new Action('ice mirrors', '../assets/haku-ice-mirrors.jpg', 'special', 50, 30));

    this.ninjas = [
      iruka,
      mizuki,
      sasuke,
      naruto,
      sakura,
      kakashi,
      zabuza,
      haku
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

  getNinjaByName(name: string): Ninja {
    return this.copy(this.ninjas.find(ninja => ninja.name === name));
  }

  getNinja(id: number): Ninja {
    return this.copy(this.ninjas.find(ninja => ninja.id === id));
  }

  getNinjasByName(names: string[]): Ninja[] {
    let ninjas: Ninja[] = [];
    for (let name of names) {
      ninjas.push(this.getNinjaByName(name));
    }

    return ninjas;
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
  type: string;
  damage: number;
  chakra: number;
  health: number;

  constructor(name: string, image: string, type: string, damage = 0, chakra = 0, health = 0) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.damage = damage;
    this.chakra = chakra;
    this.health = health;
  }

  playSound() {
    let audio = new Audio();
    audio.src = "../assets/audio/jutsu-activation.mp3";
    audio.load();
    audio.volume = 0.2;
    audio.play();

    audio.addEventListener('ended', function() {
        //// TODO: do something after sound is played
    }, false);
  }
}
