import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prfl',
  templateUrl: './prfl.component.html',
  styleUrl: './prfl.component.scss'
})
export class PrflComponent implements OnInit{
  public firstname = "Mithun";
  public secondname = "Kumar";
  public sex = "Male";
  public DOB  = "04/03/2000";
  public Address = "Muthirakalayil House";
  public State = "Kerala";
  public District = "Pathanamthitta";
  public Locality = "Elanthoor";
  public Pin = "689643";
  public title= "My Profile";
  public cls= "blue";
  public status="Trainee";
  constructor(){}
  ngOnInit(): void {}
  onselects(){
    this.status="selected";
  }
  onrejects(){
    this.status="rejected";
  }


}
