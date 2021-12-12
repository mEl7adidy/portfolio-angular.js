import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skill:Array<any>=[
  {skills:"HTML",progress:90},
{skills:"CSS",progress:95},
{skills:"Javascript",progress:100},
{skills:"React",progress:80},
{skills:"PhotoShop",progress:75},
{skills:"Adobe XD",progress:80},
{skills:"Node.Js",progress:65},
{skills:"WordPress", progress:70}
];
  constructor() { }

  ngOnInit(): void {
  }

}
