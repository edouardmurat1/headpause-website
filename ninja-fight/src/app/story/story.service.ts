import { Injectable } from '@angular/core';
import { NinjaService, Ninja } from '../ninja/ninja.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private ninjaService: NinjaService) { }

  // Iruka, Mizuki, Naruto, Sasuke, Sakura, Kakashi, Zabuza, Haku
  battles = [
    new Battle(
      1,
      this.getNinjaByName('Mizuki')
    ),
    new Battle(
      2,
      this.getNinjaByName('Kakashi')
    ),
    new Battle(
      3,
      this.getNinjaByName('Zabuza')
    ),
    new Battle(
      4,
      this.getNinjaByName('Haku')
    )
  ];
/*
  battles = [
    new Battle(
      1,
      this.getNinjasByName(['Iruka']),
      this.getNinjaByName('Mizuki')
    ),
    new Battle(
      2,
      this.getNinjasByName(['Naruto','Sasuke','Sakura']),
      this.getNinjaByName('Kakashi')
    ),
    new Battle(
      3,
      this.getNinjasByName(['Naruto','Sasuke']),
      this.getNinjaByName('Zabuza')
    ),
    new Battle(
      4,
      this.getNinjasByName(['Kakashi']),
      this.getNinjaByName('Zabuza')
    ),
    new Battle(
      5,
      this.getNinjasByName(['Naruto','Sasuke']),
      this.getNinjaByName('Haku'))
  ];*/

  getBattle(id: number): Battle {
    return this.battles[id-1];
  }

  getNinjasByName(names: string[]): Ninja[] {
    return this.ninjaService.getNinjasByName(names);
  }

  getNinjaByName(name: string): Ninja {
    return this.ninjaService.getNinjaByName(name);
  }

  isLastBattle(id: number): boolean {
    return id == this.battles.length;
  }
}

export class Battle {
  id: number;
  enemy: Ninja;

  constructor(id: number, enemy?: Ninja) {
    this.id = id;
    this.enemy = enemy;
  }
}

/*
Naruto & Iruka vs Mizuki
Naruto, Sasuke & Sakura vs Kakashi (the bell test)

Wave Country Arc:
Team 7 vs Oni Brothers
Kakashi vs Zabuza
Naruto & Sasuke vs Haku

Chuunin Arc (Death Forest):
Gaara vs Rain Ninjas
A short Sasuke vs Lee (before Death Forest)
Team 7 vs Grass Ninjas (later Team 7 vs Orochimaru)
Sakura, Team Gai & Team 10 vs Sound Ninjas
Sasuke vs Sound Ninjas
Team 7 & Kabuto vs some fodder ninjas I forgot, lol

Chuunin Arc (Elimination Fight):
Naruto vs Kiba
Sakura vs Ino
Hinata vs Neji
Gaara vs Lee
Shino vs Zaku
Shikamaru vs Kin
Chouji vs Dosu
Temari vs Tenten
Sasuke vs .... I forgot whom he fought with XD
Kankurou vs.... I also forgot this one XD

Before the Finals:
Gaara vs Dosu
Hayate vs Baki

Chuunin Exam (Finals):
Naruto vs Neji
Shikamaru vs Temari
Gaara vs Sasuke

Konoha Invasion:
Sarutobi (3rd Hokage) & Enma vs Orochimaru, Shodaime (1st) & Nidaime (2nd Hokage)
Sasuke vs Gaara
Naruto vs Gaara

Itachi's Return:
Sasuke vs Itachi
Kisame vs Gai
A short Jiraiya vs Itachi & Kisame
Kakashi vs Itachi

Retrieving Tsunade:
Tsunade & Shizune vs Orochimaru & Kabuto
Naruto vs Kabuto
A short Naruto vs Tsunade
Jiraiya & Tsunade vs Orochimaru

Tsunade's Return:
Naruto vs Sasuke, at the hospital's roof

Rescue Sasuke Arc:
Shikamaru vs Tayuya
Neji vs Kidomaru
Kiba vs Sakon & Ukon
Chouji vs Jiroubou (is it? I forgot his name, lol)
Naruto vs Kimimaro (later Lee vs Kimimaro, and Lee & Gaara vs Kimimaro)
Naruto vs Sasuke, the second

I haven't watched fillers yet, so filler fights do not count here.

Shippuuden, Naruto's Return:
Naruto & Sakura vs Kakashi, the second bell test
Gaara vs Deidara
Kankurou vs Sasori

Rescue Gaara Arc:
Naruto, Kakashi, Sakura & Chiyo vs Fake Itachi
Team Gai vs Fake Kisame
Naruto & Kakashi vs Deidara
Sakura & Chiyo vs Sasori
Team Gai vs their clones, lol

From here, these are spoiler fights from the manga.

Retrieving Sasuke Arc, Part 2:
Sai vs Naruto, Shikamaru & Chouji
New Team 7 (Naruto, Yamato, Sakura, Sai) vs Orochimaru & Kabuto (later Kyuubified Naruto with 4-tails vs Orochimaru)
Sasuke vs New Team 7

The Immortals Arc:
Asuma & Shikamaru vs Hidan
Hidan & Kakuzu vs Nii Yugito
Shikamaru vs Hidan
Team 10 & Kakashi vs Kakuzu
Naruto vs Kakuzu

Hebi and current arc:
Sasuke vs Orochimaru
Sasuke vs Juugo
A brief Suigetsu vs Juugo before stopped by Sasuke
Sasuke vs Deidara & Tobi
A brief Naruto & Yamato vs Kabuto
Naruto Bunshin vs Itachi Bunshin
Sasuke vs Itachi Bunshin
Pein & Konan vs Jiraiya
*/
