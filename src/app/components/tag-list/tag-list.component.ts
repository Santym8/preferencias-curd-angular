import { Component } from '@angular/core';
import { Tag } from '../../model/tag';
import { TagServiceService } from '../../services/tag-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent {

  tags: Tag[] = [];

  constructor(
    private tagService: TagServiceService
  ) { }

  ngOnInit(): void {
    this.getTags()
  }

  getTags() {
    this.tagService.getTags().subscribe(
      (data: Tag[]) => {
        this.tags = data;
      }
    )
  }

  deleteTag(id: number) {
    if (window.confirm('Está seguro que desea eliminar el dato?')) {
      this.tagService.deleteTag(id).subscribe(
        (data) => {
          this.getTags();
        }
      )
    }
  }


}
