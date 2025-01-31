export function calculatePercentage(current: number, total: number): number {
    if (!total || !current || current < 0 || total < 0) return 0;

    // Округляем до одного знака после запятой
    return Math.floor((current / total) * 1000) / 10;
}