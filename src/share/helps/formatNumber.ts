export function formatNumber(number: number = 0): string {
    if (typeof number !== 'number') {
        return '0';
    }

    const suffixes: string[] = ['', 'k', 'M', 'B', 'T', 'Q', 'QUEN', 'S'];
    let magnitude: number = 0;

    if (number < 0) return '0';

    while (number >= 1000 && magnitude < suffixes.length - 1) {
        number /= 1000;
        magnitude++;
    }

    let formattedNumber: string;
    if (number % 1 === 0) {
        formattedNumber = number.toString();
    } else {
        formattedNumber = (Math.floor(number * 10) / 10).toString();
        if (formattedNumber.endsWith('.0')) {
            formattedNumber = formattedNumber.slice(0, -2);
        }
    }

    return `${formattedNumber}${suffixes[magnitude]}`;
}