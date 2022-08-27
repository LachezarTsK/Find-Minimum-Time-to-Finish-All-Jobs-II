
import java.util.Arrays;

public class Solution {

    public int minimumTime(int[] jobs, int[] workers) {

        Arrays.sort(jobs);
        Arrays.sort(workers);
        int minTimeForAllJobs = 0;

        for (int i = 0; i < jobs.length; ++i) {
            int daysForCurrentJob = (jobs[i] / workers[i]) + (jobs[i] % workers[i] != 0 ? 1 : 0);
            minTimeForAllJobs = Math.max(minTimeForAllJobs, daysForCurrentJob);
        }

        return minTimeForAllJobs;
    }
}
