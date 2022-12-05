import { Component, Input, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'src/app/models/entry.model';
@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentEntry: Entry = {
    title: '',
    description: '',
    published: false
  };

  message = '';
  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEntry(this.route.snapshot.params["id"]);
    }
  }
  getEntry(id: string): void {
    this.entryService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEntry = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentEntry.title,
      description: this.currentEntry.description,
      published: status
    };
    this.message = '';
    this.entryService.update(this.currentEntry.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentEntry.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateEntry(): void {
    this.message = '';
    this.entryService.update(this.currentEntry.id, this.currentEntry)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This entry was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteEntry(): void {
    this.entryService.delete(this.currentEntry.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/entries']);
        },
        error: (e) => console.error(e)
      });
  }
}
