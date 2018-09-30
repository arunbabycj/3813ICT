import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  createForm: FormGroup;
  issues: Issue[];
  displayedColumns = ['name', 'price', 'description', 'type', 'actions'];

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.fetchIssues();
    //this.searchIssue(searchdata);
  }

  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ... ');
      console.log(this.issues);
    });
  }

  searchIssue(searchdata) {
    this.issueService.searchIssue(searchdata).subscribe((data: Issue[]) => {
      this.issues = data;
        //  this.router.navigate(['/list']);
    });
  }

  // addIssue(name, price, description, type) {
  //    this.issueService.addIssue(name, price, description, type).subscribe(() => {
  //      this.router.navigate(['/list']);
  //    });
  //  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
