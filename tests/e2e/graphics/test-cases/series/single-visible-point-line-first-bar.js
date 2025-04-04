function generateData(priceOffset) {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		if (i % 100 === 0) {
			res.push({
				time: time.getTime() / 1000,
				value: i + priceOffset,
			});
		} else {
			res.push({
				time: time.getTime() / 1000,
			});
		}

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, {
		timeScale: {
			rightOffset: 7,
			barSpacing: 50,
		},
		layout: { attributionLogo: false },
	});

	const firstSeries = chart.addSeries(LightweightCharts.LineSeries, {
		lineWidth: 1,
		color: '#ff0000',
		priceLineVisible: false,
		lastValueVisible: false,
		autoscaleInfoProvider: () => ({
			priceRange: {
				minValue: 0,
				maxValue: 1000,
			},
		}),
	});

	const secondSeries = chart.addSeries(LightweightCharts.AreaSeries, {
		lineWidth: 1,
		color: '#ff0000',
		priceLineVisible: false,
		lastValueVisible: false,
		autoscaleInfoProvider: () => ({
			priceRange: {
				minValue: 0,
				maxValue: 1000,
			},
		}),
	});

	firstSeries.setData(generateData(0));
	secondSeries.setData(generateData(100));

	chart.timeScale().setVisibleRange({
		from: (new Date(Date.UTC(2017, 11, 28, 0, 0, 0, 0))).getTime() / 1000,
		to: (new Date(Date.UTC(2018, 0, 20, 0, 0, 0, 0))).getTime() / 1000,
	});
}
