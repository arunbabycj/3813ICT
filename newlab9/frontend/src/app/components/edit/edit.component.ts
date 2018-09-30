import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        console.log(this.issue);
        this.updateForm.get('name').setValue(this.issue.name);
        this.updateForm.get('price').setValue(this.issue.price);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('type').setValue(this.issue.type);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required ],
      price: '',
      description: '',
      type: ''
    });
  }

  updateIssue(name, price, description, type) {
    this.issueService.updateIssue(this.id, name, price, description, type).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
