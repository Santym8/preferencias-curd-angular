import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TagServiceService } from '../../services/tag-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tag-edit.component.html',
  styleUrl: './tag-edit.component.css'
})
export class TagEditComponent {

  id: number = 0;
  tagForm: FormGroup = this.formBuilder.group({
    name: ['']
  })

  constructor(
    public actRoute: ActivatedRoute,
    private readonly tagService: TagServiceService,
    private router: Router,
    public formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.tagService.getTag(this.id).subscribe(
      (data) => {
        this.tagForm.setValue({
          name: data.name
        })
      }
    )
  }

  updateTag() {
    this.tagService.updateTag(this.id, this.tagForm.value).subscribe(
      (data) => {
        this.router.navigate(['tags'])
      }
    )

  }
}
