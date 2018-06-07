import { Injectable } from '@angular/core';

import { Ninja, Attack } from './ninja';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  constructor() { }

  ninjas: Ninja[] = [
    new Ninja(1, 'Sasuke', '../assets/sasuke.png', 75,
      new Attack('shuriken', 30), 'sharingan', 'fireball'),
    new Ninja(2, 'Naruto', '../assets/naruto.png', 115,
      new Attack('punch', 30), 'transformation', 'shadow clone'),
    new Ninja(3, 'Sakura', '../assets/sakura.png', 100,
      new Attack('kunai', 30), 'substitution', 'enhanced strength')
  ];

  getCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  getNinjas(): Ninja[] {
    return this.getCopy(this.ninjas);
  }

  getNinja(id: number): Ninja {
    return this.getCopy(this.ninjas.find(ninja => ninja.id === id));
  }

  getRandomNinja(): Ninja {
    return this.getCopy(this.ninjas[Math.floor(Math.random()*this.ninjas.length)]);
  }
}
