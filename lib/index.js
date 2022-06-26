import dayjs from 'dayjs';
export default (day) => {
    dayjs.between = (from, to) => {
        return day(from).isBefore(to) ? day(from) : day(to);
    };
    dayjs.init = () => 'Dayjs extends init.';
};
//# sourceMappingURL=index.js.map