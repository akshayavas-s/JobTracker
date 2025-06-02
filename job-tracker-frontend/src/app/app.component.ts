import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'job-tracker-frontend';
  activeTab: 'add' | 'list' = 'add';

  jobs: Job[] =[]
  newJob: Job={
    companyName:'',
    jobTitle:'',
    appliedDate:'',
    status:''
  }


  

  constructor(private jobService: JobService){}

  ngOnInit(){
    this.fetchJobs()
  }

  fetchJobs() {
    this.jobService.getAllJobs().subscribe(data => this.jobs = data);
  }

  addJob() {
  this.jobService.addJob(this.newJob).subscribe({
    next: () => {
      this.fetchJobs();
      this.newJob = { companyName: '', jobTitle: '', appliedDate: '', status: '' };
    },
    error: err => {
      console.error('Error saving job:', err);
      alert('Failed to save job. See console for details.');
    }
  });
}


  deleteJob(id: number) {
    this.jobService.deleteJob(id).subscribe(() => this.fetchJobs());
  }
}
