export async function getActualPrice(languageCode) {
    try {
        const response = await fetch('../../public/prices.json');
        const jsonData = await response.json();

        let yearlyData = jsonData.yearly[languageCode];
        let weeklyData = jsonData.weekly[languageCode];

        if (!yearlyData || !weeklyData) {
            yearlyData = jsonData.yearly.en;
            weeklyData = jsonData.weekly.en;
        }
        return {
            yearly: {
                perYear: yearlyData.perYear,
                perWeek: yearlyData.perWeek
            },
            weekly: weeklyData
        };
    } catch (error) {
        console.error(`Ошибка при получении данных цен: ${error}`);
        return null;
    }
}