package com.jobtracker.jobtracker.controller;

import com.jobtracker.jobtracker.entity.Job;
import com.jobtracker.jobtracker.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:4200")

public class JobController {

    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/add")
    public Job addJob(@RequestBody Job job){
        System.out.println("Received job: " + job);
        Job job1 = jobService.addJob(job);
        return job1;
    }

    @GetMapping("getAll")
    public List<Job> getAllJobs(){
        List<Job> allJobs = jobService.getAllJobs();
        return allJobs;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteJob(@PathVariable Long id){
        jobService.deleteJob(id);
    }
}
