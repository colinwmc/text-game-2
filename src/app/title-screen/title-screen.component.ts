import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { item } from '../models';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  @ViewChild('titleMusic') private titleMusic?: ElementRef<HTMLAudioElement>;

  public index = 0;
  public PCs: any;
  public selectedPC: any;
  public image ="assets/Final Picks/Characters/bartender.png";

  ngOnInit(): void {
   
      this.PCs = this.sharedService.getPCList();
      for (let PC of this.PCs){
        PC.currentHealth = PC.hp;
        PC.hasShitPants = false;
        let gold:item ={
          itemID: 13,
          itemDescription: 'Can be exchanged for goods and services.',
          itemName: 'Gold',
          itemQuantity: 10,
          imageID: ''
      }
        PC.items.push(gold)
      }
     
  }

  startMusic(): void {
    const audio = this.titleMusic?.nativeElement;
    if (!audio || !audio.paused) {
      return;
    }

    void audio.play().catch(error => {
      console.error('Unable to play title screen music.', error);
    });
  }

  menuAdvance() {
    this.index++
  }
  menuBack() {
    this.index--
    this.selectedPC = null;
  }

  selectPC(PC: any){
    this.selectedPC = PC;
    this.sharedService.PC = PC;
    this.index = 2;
  }

}
