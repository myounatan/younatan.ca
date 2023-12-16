const EXPERIENCE_START_DATE = new Date(2019, 7, 1);

export function getYearsOfExperience() {
  // get number of years to this date
  const now = new Date();
  const years = now.getFullYear() - EXPERIENCE_START_DATE.getFullYear();

  return years;
}