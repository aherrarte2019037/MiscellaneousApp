import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  userId: number;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe( params => this.userId = Number(params.id) );
  }


}
