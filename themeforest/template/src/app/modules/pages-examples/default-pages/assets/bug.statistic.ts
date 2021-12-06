export interface BugStatistic {
  minorBugs;
  resolvedBugs;
  criticalBugs;
}

export const exampleBugStatistic: BugStatistic = {
  minorBugs: 150,
  resolvedBugs: 75,
  criticalBugs: 75,
};
