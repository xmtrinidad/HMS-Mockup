import { Component, OnInit } from '@angular/core';

interface OverviewCard {
  cardNum: number;
  cardTitle: string;
  icon: string;
}

@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.css']
})
export class OverviewSectionComponent implements OnInit {

  cards: OverviewCard[] = [
    {cardNum: 63, cardTitle: 'Doctors', icon: 'home'},
    {cardNum: 340, cardTitle: 'Nurse', icon: 'accessibility'},
    {cardNum: 460, cardTitle: 'Patient', icon: 'favorite'},
    {cardNum: 60, cardTitle: 'Pharmacist', icon: 'face'},
    {cardNum: 30, cardTitle: 'Lab', icon: 'business'},
    {cardNum: 40, cardTitle: 'Accountants', icon: 'money'},
    {cardNum: 2601, cardTitle: 'Operation', icon: 'people'},
    {cardNum: 2601, cardTitle: 'Birth Reports', icon: 'note'},
    {cardNum: 2601, cardTitle: 'Death Reports', icon: 'warning'},
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
