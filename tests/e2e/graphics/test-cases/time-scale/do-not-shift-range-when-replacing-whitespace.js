const seriesOneData = [
	{ time: '2019-04-11', value: 80.01 },
	{ time: '2019-04-12', value: 96.63 },
	{ time: '2019-04-13', value: 76.64 },
	{ time: '2019-04-14', value: 81.89 },
	{ time: '2019-04-15', value: 74.43 },
	{ time: '2019-04-16', value: 80.01 },
];

const seriesTwoWhitespaceData = [
	{ time: '2019-04-17' },
	{ time: '2019-04-18' },
	{ time: '2019-04-19' },
	{ time: '2019-04-20' },
];

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, {
		timeScale: {
			barSpacing: 30,
			rightOffset: 10,
			shiftVisibleRangeOnNewBar: true,
		},
		layout: { attributionLogo: false },
	});

	const s1 = chart.addSeries(LightweightCharts.LineSeries, {
		color: 'red',
	});
	s1.setData(seriesOneData);

	return new Promise(resolve => {
		requestAnimationFrame(() => {
			const s2 = chart.addSeries(LightweightCharts.LineSeries, {
				color: 'blue',
			});
			s2.setData(seriesTwoWhitespaceData);
			requestAnimationFrame(() => {
				s1.update({ time: '2019-04-17', value: 84.43 });
				requestAnimationFrame(resolve);
			});
		});
	});
}
