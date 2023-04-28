import { Component, OnInit } from '@angular/core';
import Vilain from '../types/vilain.type';

@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['./vilains-list.component.css']
})
export class VilainsListComponent implements OnInit {
  vilains = [
    { id : 1, name : 'Sayah', superpower : 'Angular master' },
    { id : 2, name : 'M le maudit', superpower : 'Force' },
    { id : 3, name : 'Gargamel', superpower : 'Sorcier' },
    ];

    selectedVilain: Vilain;

  constructor() { }

  ngOnInit() {
  }

}
