import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';
import { EntryService } from 'src/app/services/entry.service';
@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  entry: Entry = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private entryService: EntryService) { }
  ngOnInit(): void {
  }
  saveEntry(): void {
    const data = {
      title: this.entry.title,
      description: this.entry.description
    };
    this.entryService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newEntry(): void {
    this.submitted = false;
    this.entry = {
      title: '',
      description: '',
      published: false
    };
  }
}
