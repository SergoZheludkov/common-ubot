const getYear = (year: string) => {
  switch (year.length) {
    case 2:
      return `20${year}`;
    case 4:
      return year;
    default:
      return '2021';
  }
};

const getPeriod = (text: string): number[] =>
  text.split('-').map((date) => {
    const day = date.trim().slice(0, 2);
    const month = date.trim().slice(2, 4);
    const year = date.trim().slice(4);

    return Number(`${getYear(year)}${month}${day}`);
  });

const getValidateDate = (period: number[]): boolean => period.filter((date) => Number.isInteger(date)).length === 2;

export { getPeriod, getValidateDate };
