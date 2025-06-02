package com.jobtracker.jobtracker.service;

import com.jobtracker.jobtracker.entity.Job;
import com.jobtracker.jobtracker.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public Job addJob(Job job) {
        Job save = jobRepository.save(job);
        return save;
    }

    public List<Job> getAllJobs() {
        List<Job> all = jobRepository.findAll();
        return all;
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
