import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { item } from './models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private APIUrl = "https://localhost:7125/api";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json',
    }),
  };
  constructor(private http: HttpClient) { }

  public PC: any;
  public encounters: string[] = [];
  public hurting = false;
  public pcList : any[] = [
  {
    "pcid": 1,
    "name": "Pollen",
    "species": "Skellington",
    "gender": "Ambiguous",
    "age": "???",
    "class": "Witch",
    "languages": "Common, Raccoon, Those weird glyphs found on the ruins in the forest",
    "abilities": "Healing, Illusion Magic, Animal Handling, Climbing, Perception, Insight, Being Spooky",
    "weaknesses": "People skills, Physical combat, Stealth (bones too rattley)",
    "charisma": 4,
    "intelligence": 12,
    "wisdom": 18,
    "strength": 6,
    "dexterity": 16,
    "constitution": 10,
    "armorClass": 13,
    "hp": 14,
    "characterDescription": "Resembling the magically reanimated bones of a humanoid creature, no one knows how or why Skellingtons come to be, not even the Skellingtons themselves. A rare creature most often seen in remote regions, such as forests, swamps, or deserts, they are widely considered to be ill omens and not warmly welcomed by other sentient creatures. This particular Skellington has made their home in the deep forests of the Fae Wildes for many years, enjoying only the company of raccoons and the occasional crow. All the while studying the ancient rites of witchcraft.",
    "image_URL": "../../assets/Final Picks/Characters/pollen.png",
    "spells": [
      {
        "spellId": 1,
        "spellName": "Healing Mist",
        "spellType": "Automatic",
        "rollModifier": "Wisdom",
        "spellDescription": "Heals one creature of mild to moderate wounds.",
        "spellEffect": "Heal",
        "effectQuantity": 7,
        "pcid": 1,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/healing-mist.png"
      },
      {
        "spellId": 2,
        "spellName": "Illusion",
        "spellType": "Saving Throw",
        "rollModifier": "Wisdom",
        "spellDescription": "Creates a visual and auditory illusion that can distract, fascinate, or terrify a creature. Can be resisted by a successful wisdom saving throw.",
        "spellEffect": "CC",
        "effectQuantity": 0,
        "pcid": 1,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/illusion.png"
      },
      {
        "spellId": 3,
        "spellName": "Hex",
        "spellType": "Attack Roll",
        "rollModifier": "Wisdom",
        "spellDescription": "Ranged spell attack. Causes 1 target to either A.) Be transformed into a frog B.) Horribly liquify into a gross puddle or C.) Become slightly more purple",
        "spellEffect": "CC",
        "effectQuantity": 0,
        "pcid": 1,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/hex.png"
      }
    ],
    "items": [
      {
        "itemID": 1,
        "itemName": "Adult Female Raccoon",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/priscilla.png",
        "itemDescription": "Her name’s Priscilla",
        "itemQuantity": 1,
        "pcid": 1
      },
      {
        "itemID": 2,
        "itemName": "Bag of Pretty Rocks",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/rock_bag.jpeg",
        "itemDescription": "You gotta pick up a pretty looking rock",
        "itemQuantity": 1,
        "pcid": 1
      },
      {
        "itemID": 3,
        "itemName": "Wild Mushrooms",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/mushrooms.png",
        "itemDescription": "Are they edible? poisonous? psychedelic? You don’t know",
        "itemQuantity": 3,
        "pcid": 1
      },
      {
        "itemID": 4,
        "itemName": "Wildberries",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/berries.png",
        "itemDescription": "In case Priscilla needs a little treat",
        "itemQuantity": 10,
        "pcid": 1
      }
    ]
  },
  {
    "pcid": 2,
    "name": "Dizbert",
    "species": "Elf",
    "gender": "Female",
    "age": "304",
    "class": "Wizard",
    "languages": "Common, Elven, Old Imperial",
    "abilities": "Elemental Evocation, Nature Magic, Endurance, Investigation, Arcana, History, Botany",
    "weaknesses": "Physical Strength, Fear of Bugs, Childhood Trauma",
    "charisma": 12,
    "intelligence": 18,
    "wisdom": 10,
    "strength": 6,
    "dexterity": 12,
    "constitution": 12,
    "armorClass": 12,
    "hp": 16,
    "characterDescription": "A wizard and scholar in equal measure. Starting from humble beginnings as a wood elf in the rural MiddleWest region of the kingdom, Dizbert received an advanced degree in the Mystic Farts from the prestigious Coastal Academy School of Farts and Sciences. An analytical mind, a member of 3 book clubs and an amateur botanist, any problem she can’t solve with critical thinking she can probably solve with a blast of elemental magic. ",
    "image_URL": "../../assets/Final Picks/Characters/dizbert.png",
    "spells": [
      {
        "spellId": 4,
        "spellName": "Ice Blast",
        "spellType": "Attack Roll",
        "rollModifier": "Intelligence",
        "spellDescription": "Ranged spell attack. Fires shards of ice at a single target.",
        "spellEffect": "Damage",
        "effectQuantity": 7,
        "pcid": 2,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/ice-blast.png"
      },
      {
        "spellId": 5,
        "spellName": "Green Thumb",
        "spellType": "Automatic",
        "rollModifier": "Intelligence",
        "spellDescription": "Causes one plant to magically grow or whither.",
        "spellEffect": "CC",
        "effectQuantity": 0,
        "pcid": 2,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/green-thumb.png"
      },
      {
        "spellId": 6,
        "spellName": "Stinking Cloud",
        "spellType": "Saving Throw",
        "rollModifier": "Intelligence",
        "spellDescription": "Produces a cloud of foul smelling air around the caster. Can incapacitate or even damage nearby creatures. (Look dawg, she swears it’s a spell, I don’t know what to tell you.) ",
        "spellEffect": "CC",
        "effectQuantity": 0,
        "pcid": 2,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/stinking-cloud.png"
      }
    ],
    "items": [
      {
        "itemID": 5,
        "itemName": "Encyclopedia Arcanica",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/encyclopedia-arcanica.png",
        "itemDescription": "The ultimate mystical reference",
        "itemQuantity": 1,
        "pcid": 2
      },
      {
        "itemID": 6,
        "itemName": "Golden Delicious Apple",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/apple.png",
        "itemDescription": "It's golden, it's delicious, it's an apple",
        "itemQuantity": 1,
        "pcid": 2
      },
      {
        "itemID": 7,
        "itemName": "Potion of Enhanced Stinking Cloud",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/potion-of-enhanced-stinking-cloud.png",
        "itemDescription": "Greatly enhances the power of the Stinking Cloud spell. May cause it to be cast involuntarily.",
        "itemQuantity": 1,
        "pcid": 2
      },
      {
        "itemID": 8,
        "itemName": "45 Carat Diamond Ring",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/ring.png",
        "itemDescription": "Ooh, shiny",
        "itemQuantity": 1,
        "pcid": 2
      }
    ]
  },
  {
    "pcid": 3,
    "name": "Tomja",
    "species": "Dwarf",
    "gender": "Male",
    "age": "45",
    "class": "Artificer",
    "languages": "Common, Dwarven, A few words of Goblin (they’re all swears)",
    "abilities": "Dwarven Engineering, Crafting, Melee Combat, Statistics, Persuasion, Athletics, Drinking",
    "weaknesses": "Gambling addiction, weak ankles, confused by poetry",
    "charisma": 16,
    "intelligence": 16,
    "wisdom": 6,
    "strength": 14,
    "dexterity": 6,
    "constitution": 14,
    "armorClass": 14,
    "hp": 18,
    "characterDescription": "Tomja proudly hails from the Dwarven Kingdom of Ohio. He studied classic Dwarven Engineering at a local state funded university, and still talks about it a lot, considering he graduated, like, 20 years ago. Probably would’ve gone pro in Dwarf Ball (a sport no other species has yet figured out) if it hadn’t been for an ill timed ankle injury (ankles are very important to Dwarves, they’re like, 25% of their legs). Has taken to a life of adventuring in an attempt to pay off his massive gambling debts.",
    "image_URL": "../../assets/Final Picks/Characters/tomja.png",
    "spells": [
      {
        "spellId": 7,
        "spellName": "Dwarven Fire Bomb",
        "spellType": "Saving Throw",
        "rollModifier": "Intelligence",
        "spellDescription": "Ranged attack. Explodes and fills the surrounding area with fire. Can be dodged by a dexterity saving throw.",
        "spellEffect": "Damage",
        "effectQuantity": 10,
        "pcid": 3,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/bomb.png"
      },
      {
        "spellId": 8,
        "spellName": "Mending",
        "spellType": "Automatic",
        "rollModifier": "Intelligence",
        "spellDescription": "Can return one damaged object to working order.",
        "spellEffect": "CC",
        "effectQuantity": 0,
        "pcid": 3,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/mend.png"
      },
      {
        "spellId": 9,
        "spellName": "Big Ol’ Hammer",
        "spellType": "Attack Roll",
        "rollModifier": "Strength",
        "spellDescription": "Melee Attack. Sometimes the best way to solve a problem is with a big ol’ hammer.",
        "spellEffect": "Damage",
        "effectQuantity": 7,
        "pcid": 3,
        "icon_URL": "../../assets/Final Picks/Item and Spell Icons/big-ol-hammer.png"
      }
    ],
    "items": [
      {
        "itemID": 9,
        "itemName": "Big Ol’ Hammer",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/big-ol-hammer.png",
        "itemDescription": "Great for fixing, or breaking things",
        "itemQuantity": 1,
        "pcid": 3
      },
      {
        "itemID": 10,
        "itemName": "Dwarven Fire Bomb",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/bomb.png",
        "itemDescription": "Blows up. Sets things on fire.",
        "itemQuantity": 3,
        "pcid": 3
      },
      {
        "itemID": 11,
        "itemName": "Cask of Dwarven Ale",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/dwarven-ale.jpg",
        "itemDescription": "Adventuring is thirsty work",
        "itemQuantity": 1,
        "pcid": 3
      },
      {
        "itemID": 12,
        "itemName": "Pouch of Screws and Lugnuts",
        "imageID": "../../assets/Final Picks/Item and Spell Icons/nuts_and_bolts.jpeg",
        "itemDescription": "Never know when you're gonna need 'em",
        "itemQuantity": 1,
        "pcid": 3
      }
    ]
  }
]
  public itemsForSale: item[] = [{
    itemID: 14,
    itemDescription: 'A proper, frosty pint.',
    itemName: 'Pint of Beer',
    itemQuantity: 1,
    imageID: ''
  },
  {
    itemID: 15,
    itemDescription: 'Golden fried spuds.',
    itemName: 'Fried Potatoes',
    itemQuantity: 1,
    imageID: ''
  },
  {
    itemID: 16,
    itemDescription: 'Restores 5 HP.',
    itemName: 'Health Potion',
    itemQuantity: 1,
    imageID: ''
  }];

  public successfullyCharmed = false;
  public failedToCharm = false;
  public smiledDisarmingly = false;
  public wasConfrontatitional = false;
  public identifiedEmblem = false;
  public hasKilledFae = false;

  public ending = 0;

  getPCList(): any[] {
    return this.pcList;
  }

  skillCheck(modifier: string, dc: number, special: string) {
    let diceRoll = new Audio();
    diceRoll.src = "../assets/Sound Effects/rpg-dice-rolling-95182.mp3";
    diceRoll.load();
    diceRoll.play();

    let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    if (special === 'advantage') {
      let secondRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      if (secondRoll > roll) {
        roll = secondRoll;
      }
    } else if (special === 'disadvantage') {
      let secondRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      if (secondRoll < roll) {
        roll = secondRoll;
      }
    }
    let modValue = Math.floor((this.PC[modifier] - 10) / 2);
    console.log('Roll(' + roll + ') + Modifier(' + modValue + ') = ' + (roll + modValue) + (roll + modValue >= dc ? ' > ' : ' < ') + dc);
    return roll + modValue >= dc;

  }

  buyItem(cost: number, itemID: number) {
    let gold = this.PC.items.find((item: { itemID: number; }) => item.itemID === 13);
    if (gold.itemQuantity >= cost) {
      if (cost !== 0) {
        let moneyClink = new Audio();
        moneyClink.src = "../assets/Sound Effects/coins-falling-013-36967.mp3";
        moneyClink.load();
        moneyClink.play();
      }
      gold.itemQuantity = gold.itemQuantity - cost;
      if (this.PC.items.find((item: { itemID: number; }) => item.itemID === itemID)) {
        this.PC.items.find((item: { itemID: number; }) => item.itemID === itemID).itemQuantity++;
      } else {
        this.PC.items.push(this.itemsForSale.find((itemForSale) => itemForSale.itemID === itemID))
      }
      return true;
    } else {
      return false;
    }
  }

  useItem(itemID: number) {
    if (this.PC.currentHealth > 0) {
      switch (itemID) {
        case 1:
        case 4:
          let raccon = new Audio();
          raccon.src = "../assets/Sound Effects/raccoon.mp4";
          raccon.load();
          raccon.play();
          if (itemID === 4) {
            let eat = new Audio();
            eat.src = "../assets/Sound Effects/eating.mp3";
            eat.load();
            eat.play();
            this.removeItem(itemID);
          }
          break;
        case 7:
        case 14:
        case 16:
          let drink = new Audio();
          drink.src = "../assets/Sound Effects/glug-glug-glug-39140.mp3";
          drink.load();
          drink.play();
          this.removeItem(itemID);
          if (itemID === 7) {
            this.PC.enhancedStink = true;
          }
          if (itemID === 14) {
            this.PC.charisma+=2;
            if (this.PC.charismaBoosted) {
              this.PC.charismaBoosted+=2;
            } else {
              this.PC.charismaBoosted = 2;
            }
          }
          if (itemID === 16) {
            if ((this.PC.currentHealth + 5) < this.PC.hp) {
              this.PC.currentHealth = this.PC.currentHealth + 5;
            } else {
              this.PC.currentHealth = this.PC.hp;
            }
          }
          break;
        case 15:
        case 17:
          let eat = new Audio();
          eat.src = "../assets/Sound Effects/eating.mp3";
          eat.load();
          eat.play();
          if (itemID === 15) {
            this.PC.constitution+=2;
            if (this.PC.constitutionBoosted) {
              this.PC.constitutionBoosted+=2;
            } else {
              this.PC.constitutionBoosted = 2;
            }
          }
          else if (itemID === 17) {
            this.takeDamage(10);
          }
          this.removeItem(itemID);
          break;
      }
    }
  }

  removeItem(itemID: any) {
    let item = this.PC.items.find((i: { itemID: any; }) => i.itemID === itemID);
    if (item.itemQuantity > 1) {
      item.itemQuantity--;
    } else {
      let index = this.PC.items.findIndex((i: { itemID: any; }) => i.itemID === itemID);
      this.PC.items.splice(index, 1);
    }
  }

  takeDamage(amount: number) {
    let damage = new Audio();
    damage.src = "../assets/Sound Effects/retro-hurt-2-236675.mp3";
    damage.load();
    damage.play();
    this.PC.currentHealth = this.PC.currentHealth - amount;
    this.hurting = true;
    setTimeout(() => {
      this.hurting = false;
    }, 250);
    setTimeout(() => {
      this.hurting = true;
    }, 500);
    setTimeout(() => {
      this.hurting = false;
    }, 750);
  }

  deboostStats() {
    if (this.PC.charismaBoosted) {
      this.PC.charisma = this.PC.charisma - this.PC.charismaBoosted;
      this.PC.charismaBoosted = null;
    }

    if (this.PC.constitutionBoosted) {
      this.PC.constitution = this.PC.constitution - this.PC.constitutionBoosted;
      this.PC.constitutionBoosted = null;
    }
  }

  castAttackSpell(id: number, dc: number, special: string): boolean | number | string | undefined {
    switch (id) {
      case 1:
        let heal = new Audio();
        heal.src = '../assets/Sound Effects/heal.mp3';
        heal.load();
        heal.play();
        return 7;

      case 3:
        let hex = new Audio();
        hex.src = '../assets/Sound Effects/hex.mp3';
        hex.load();
        hex.play();
        if (this.skillCheck('wisdom', dc, special)) {
          let roll2 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          let outcome;
          roll2 === 1 ? outcome = 'frog' : roll2 === 2 ? outcome = 'puddle' : outcome = 'purple';
          return outcome;
        } else {
          return false;
        }
      case 4:
        let ice = new Audio();
        ice.src = '../assets/Sound Effects/ice-blast.mp3';
        ice.load();
        ice.play();
        return this.skillCheck('intelligence', dc, special);
      case 5:
        let green = new Audio();
        green.src = '../assets/Sound Effects/green-thumb.mp3';
        green.load();
        green.play();
        return true;

      case 9:
        let swing = new Audio();
        swing.src = '../assets/Sound Effects/hammer-swing.mp3';
        swing.load();
        swing.play();

        if (this.skillCheck('strength', dc, special)) {
          let hit = new Audio();
          hit.src = '../assets/Sound Effects/hammer-hit.mp3';
          hit.load();
          hit.play();
          return true;
        } else {
          return false;
        }

      case 8:
        let mend = new Audio();
        mend.src = '../assets/Sound Effects/mend.mp3';
        mend.load();
        mend.play();
        return true;
      default:
        return false;
    }
  }

  castSaveSpell(id: number, modifier: number, special: string) {
    let diceRoll = new Audio();
    diceRoll.src = "../assets/Sound Effects/rpg-dice-rolling-95182.mp3";
    diceRoll.load();
    diceRoll.play();

    let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    if (special === 'advantage') {
      let secondRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      if (secondRoll > roll) {
        roll = secondRoll;
      }
    } else if (special === 'disadvantage') {
      let secondRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      if (secondRoll < roll) {
        roll = secondRoll;
      }
    }
    switch (id) {
      case 2:
        let illusion = new Audio();
        illusion.src = '../assets/Sound Effects/illusion.mp3';
        illusion.load();
        illusion.play();
        return (roll + modifier) < Math.floor((this.PC.wisdom - 10) / 2) + 10;

      case 6:
        let cloud = new Audio();
        cloud.src = !this.PC.enhancedStink ? '../assets/Sound Effects/fart.mp3' : '../assets/Sound Effects/enhanced-fart.mp3';
        cloud.load();
        cloud.play();
        if (this.PC.enhancedStink) {
          return true;
        } else {
          let total = roll + modifier;
          return total < Math.floor((this.PC.constitution - 10) / 2) + 10;
        }

      case 7:
        let bomb = new Audio();
        bomb.src = '../assets/Sound Effects/bomb.mp3';
        bomb.load();
        bomb.play();
        this.removeItem(10);
        let total = roll + modifier;
        return total < Math.floor((this.PC.strength - 10) / 2) + 10;
      default:
        return false;
    }
  }
}
