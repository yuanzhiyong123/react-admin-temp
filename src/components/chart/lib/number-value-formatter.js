const numberValueFormatter = value => {
    const nextValue = parseFloat(value);
    if (nextValue === value) {
        if (nextValue / 100000000 >= 1) {
            return nextValue / 100000000 + '亿';
        }
        if (nextValue / 10000 >= 1) {
            return Math.round(nextValue / 10000) + '万';
        }
    }
    return value;
};

export default numberValueFormatter;
