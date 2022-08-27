
/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function (jobs, workers) {

    jobs.sort((x, y) => x - y);
    workers.sort((x, y) => x - y);
    let minTimeForAllJobs = 0;

    for (let i = 0; i < jobs.length; ++i) {
        let daysForCurrentJob = Math.floor(jobs[i] / workers[i]) + (jobs[i] % workers[i] !== 0 ? 1 : 0);
        minTimeForAllJobs = Math.max(minTimeForAllJobs, daysForCurrentJob);
    }

    return minTimeForAllJobs;
};
