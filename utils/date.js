const dayjs = require('dayjs');
const advancedFormat = require('dayjs/plugin/advancedFormat');

dayjs.extend(advancedFormat);

const currentDate = () => {
    const date = dayjs().format("MMM Do, YYYY");
    const time = dayjs().format("hh:m a");

    return `${date} at ${time}`;
}

module.exports = currentDate;