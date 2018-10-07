import { Component, OnInit } from '@angular/core';

interface OverviewCard {
  cardNum: number;
  cardTitle: string;
  icon: {name: string, color: string};
}

@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.css']
})
export class OverviewSectionComponent implements OnInit {

  cards: OverviewCard[] = [
    {cardNum: 63, cardTitle: 'Doctors', icon: {name: 'home', color: 'blue'}},
    {cardNum: 340, cardTitle: 'Nurse', icon: {name: 'accessibility', color: 'green'}},
    {cardNum: 460, cardTitle: 'Patient', icon: {name: 'favorite', color: 'red'}},
    {cardNum: 60, cardTitle: 'Pharmacist', icon: {name: 'face', color: 'pink'}},
    {cardNum: 30, cardTitle: 'Lab', icon: {name: 'business', color: 'lightgreen'}},
    {cardNum: 40, cardTitle: 'Accountants', icon: {name: 'money', color: 'purple'}},
    {cardNum: 2601, cardTitle: 'Operation', icon: {name: 'people', color: 'lightblue'}},
    {cardNum: 2601, cardTitle: 'Birth Reports', icon: {name: 'note', color: 'orange'}},
    {cardNum: 2601, cardTitle: 'Death Reports', icon: {name: 'warning', color: 'indigo'}},
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
