import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() pageEmit: EventEmitter<number> = new EventEmitter<number>();
  @Output() loadingEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() digimonSearchEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() page!: number;
  @Input() loading!: boolean;
  @Input() digimonSearch!: boolean;

  constructor() { }

  ngOnInit(): void {
  }



  siguentes() {
    this.page = this.page + 6;
    this.pageEmit.emit(this.page)
    this.loading = true;
    this.loadingEmit.emit(this.loading)
    setTimeout(() => {
      this.loading = false;
      this.loadingEmit.emit(this.loading)
    }, 1500);
    this.digimonSearch = true;
    this.digimonSearchEmit.emit(this.digimonSearch)
  }

  anteriores() {
    if (this.page > 0) {
      this.page = this.page - 5;
      this.pageEmit.emit(this.page)
    }
    if (this.page <= 0) {
      this.page = 0;
      this.pageEmit.emit(this.page)
    }
    this.loading = true;
    this.loadingEmit.emit(this.loading)
    setTimeout(() => {
      this.loading = false;
      this.loadingEmit.emit(this.loading)
    }, 1500);

  }
}
