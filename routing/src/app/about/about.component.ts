import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateHome(){
    // Both method return Absolute Path 
    this.router.navigate(['home'])
    // this.router.navigateByUrl('home')

    // Perform Relative Path with this.navigate()
    // this.router.navigate(['home'], {relativeTo: this.activatedRoute})
  }
}
