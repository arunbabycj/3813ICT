import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.loginuser = this.fb.group({
      username: ['', Validators.required],
      password: ''
    });
  }

  loginUser(username, password) {
    this.issueService.loginUser(username, password).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['/chat']);
    });
  }

  ngOnInit() {
  }

}
