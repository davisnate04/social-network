const dayjs = require('dayjs');
const advancedFormat = require('dayjs/plugin/advancedFormat');

dayjs.extend(advancedFormat);

const currentDate = (d) => {
    const date = dayjs(d).format("MMM Do, YYYY");
    const time = dayjs(d).format("hh:m a");

    return `${date} at ${time}`;
}

module.exports = currentDate;