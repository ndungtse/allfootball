import moment from "moment";

const newdate = (new Date()).toISOString().split('T')[0]

/**
 * @description Get current season year
 * @example 1 jul 2020 - 30 jun 2021 return 2020
 */
export const getCurrSeasonYear = () => {
    const currDate = moment();
    const currMonth = currDate.month();
    const currYear = currDate.year();
    const startYear = currMonth < 6 ? currYear - 1 : currYear;
    return startYear;
}

export default newdate;