import dayjs from 'dayjs';
declare module 'dayjs' {
    function init(): string;
    function between(start: string | Date, end: string | Date): dayjs.Dayjs;
}
declare const _default: (day: typeof dayjs) => void;
export default _default;
