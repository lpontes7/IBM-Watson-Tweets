import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hashtag } from '../shared/hashtag';
import { HashtagService } from '../shared/hashtag.service';

@Component({
  selector: 'app-hashtag-list-item',
  templateUrl: './hashtag-list-item.component.html',
  styleUrls: ['./hashtag-list-item.component.css']
})
export class HashtagListItemComponent implements OnInit {
  @Input()
  hashtag: Hashtag;

  @Output()
  onDeleteHashtag = new EventEmitter()
  onHashtagTwitter = new EventEmitter()
  
  constructor(private hashtagService: HashtagService) { }

  ngOnInit() {
  }

  remove(hashtag: Hashtag) {
    this.hashtagService.delete(hashtag.id).subscribe(() => {
      this.onDeleteHashtag.emit(hashtag);
    });
  }

  tweets(hashtag: Hashtag) {
    this.hashtagService.tweets(hashtag).subscribe(() => {
      this.onHashtagTwitter.emit(hashtag);
    });
  }

  onCompletedCheckChange(hashtag: Hashtag) {
    this.hashtagService.save(hashtag).subscribe(hashtag => {
      console.log(hashtag);
    });
  }
}
