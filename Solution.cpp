
#include <vector>
using namespace std;

class Solution {
    
public:
    int minimumTime(vector<int>& jobs, vector<int>& workers) {
        sort(jobs.begin(), jobs.end());
        sort(workers.begin(), workers.end());
        int minTimeForAllJobs = 0;

        for (int i = 0; i < jobs.size(); ++i) {
            int daysForCurrentJob = (jobs[i] / workers[i]) + (jobs[i] % workers[i] != 0 ? 1 : 0);
            minTimeForAllJobs = max(minTimeForAllJobs, daysForCurrentJob);
        }

        return minTimeForAllJobs;
    }
};
