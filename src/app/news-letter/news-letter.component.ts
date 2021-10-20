import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {
	test:string = "aaaaa";
	valueDate:Date = new Date();
	
	constructor() { 

	}

	ngOnInit(): void {
	}


	

}
