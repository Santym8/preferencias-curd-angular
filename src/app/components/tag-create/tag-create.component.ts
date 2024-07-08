import { Component } from '@angular/core';
import { TagServiceService } from '../../services/tag-service.service';
import { Tag } from '../../model/tag';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tag-create.component.html',
})
export class TagCreateComponent {

  tagForm: FormGroup = this.formBuilder.group({
    name: ['']
  })

  constructor(
    private readonly tagService: TagServiceService,
    private router: Router,
    public formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
  }

  createTag() {
    this.tagService.createTag(this.tagForm.value).subscribe(
      (data) => {
        this.router.navigate(['tags'])
      }
    )

  }




}
