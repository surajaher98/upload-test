import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  constructor(public sharedService: SharedService) {
    this.sharedService.showHeader = true;
  }

  ngOnInit(): void {
  }

}
