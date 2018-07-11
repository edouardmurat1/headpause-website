import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  ninjas: Ninja[];
  unlocked_ninjas: Ninja[];
  locked_ninjas: Ninja[];
  actions: Action[];

  constructor() {
    //Actions: Attacks
    let punch = new Action('punch', '../assets/punch.png', 10);

    let shuriken = new Action('shuriken', '../assets/shuriken.png', 10, 10);

    let senbon = new Action('senbon', '../assets/senbon.png', 20);

    let kunai = new Action('kunai', '../assets/kunai.png', 20);

    let paperbomb = new Action('paperbomb', '../assets/paperbomb.png', 30, 0, 10);

    //Actions: Defence
    let transformation = new Action('transformation', '../assets/transformation.png', 0, 20, 10);

    let substitution = new Action('substitution', '../assets/substitution.png', 0, 30, 20);

    let sharingan = new Action('sharingan', '../assets/sharingan.png', 0, 40, 20);

    let clone = new Action('clone', '../assets/clone.png', 0, 50, 30);

    //Actions: special
    let iruka_special = new Action('yell', '../assets/iruka-yell.jpg', 40, 0, 30);

    let mizuki_special = new Action('deception', '../assets/mizuki-deception.jpg', 40, 0, 30);

    let sasuke_special = new Action('fireball', '../assets/sasuke-fireball.jpg', 40, 0, 20);

    let naruto_special = new Action('shadow clone', '../assets/naruto-shadowclone.jpg', 40, 0, 30);

    let sakura_special = new Action('inner strength', '../assets/sakura-innerstrength.jpg', 40, 0, 20);

    let kakashi_special = new Action('chidori', '../assets/kakashi-chidori.jpg', 50, 0, 30);

    let zabuza_special = new Action('mist', '../assets/zabuza-mist.jpg', 40, 0, 30);

    let haku_special = new Action('ice mirrors', '../assets/haku-ice-mirrors.jpg', 50, 0, 30)

    //Ninjas
    let iruka = new Ninja(1, 'Iruka', '../assets/iruka.png',
      new Health(100), new Chakra(100),
      [kunai,transformation,iruka_special]);

    let mizuki = new Ninja(2, 'Mizuki', '../assets/mizuki.png',
      new Health(100), new Chakra(100),
      [kunai,transformation,mizuki_special]);

    let sasuke = new Ninja(3, 'Sasuke', '../assets/sasuke.png',
      new Health(100), new Chakra(80),
      [paperbomb,sharingan,sasuke_special]);

    let naruto = new Ninja(4, 'Naruto', '../assets/naruto.png',
      new Health(100), new Chakra(120),
      [punch,transformation,naruto_special]);

    let sakura = new Ninja(5, 'Sakura', '../assets/sakura.png',
      new Health(120), new Chakra(100),
      [punch,substitution,sakura_special]);

    let kakashi = new Ninja(6, 'Kakashi', '../assets/kakashi.png',
      new Health(80), new Chakra(90),
      [paperbomb,sharingan,kakashi_special]);

    let zabuza = new Ninja(7, 'Zabuza', '../assets/zabuza.png',
      new Health(100), new Chakra(100),
      [shuriken,clone,zabuza_special]);

    let haku = new Ninja(8, 'Haku', '../assets/haku.png',
      new Health(80), new Chakra(100),
      [senbon,clone,haku_special]);

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

    this.unlocked_ninjas = [
      naruto
    ];

    this.locked_ninjas = [
      sasuke,
      sakura,
      iruka,
      mizuki,
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

  unlockNextNinja() {
    let ninja: Ninja = this.locked_ninjas.shift();
    this.unlocked_ninjas.push(ninja);
    console.log(this.unlocked_ninjas);
}

export class Ninja {
  id: number;
  name: string;
  image: string;
  health: Health;
  chakra: Chakra;
  actions: Action[];

  constructor(
    id: number, name: string, image: string,
    health: Health, chakra: Chakra, actions: Action[]) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.health = health;
      this.chakra = chakra;
      this.actions = actions;
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

  getActions(): Action[] {
    return this.copy(this.actions);
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
    if(n > 0) {
      this.now = this.now - n;
      this.now = (this.now < 0)? 0 : this.now;
      this.percent = this.now * 100 / this.max;
    }
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
    if(n > 0) {
      this.now = this.now - n;
      this.now = (this.now < 0)? 0 : this.now;
      this.percent = this.now * 100 / this.max;
    }
  };
}

export class Action {
  name: string;
  image: string;
  type: string;
  damage: number;
  defence: number;
  chakra: number;
  health: number;

  constructor(name: string, image: string, damage = 0, defence = 0, chakra = 0) {
    this.name = name;
    this.image = image;
    this.damage = damage;
    this.defence = defence;
    this.chakra = chakra;
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
