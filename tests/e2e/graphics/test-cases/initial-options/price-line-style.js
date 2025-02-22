function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 1; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}

	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, {
		rightPriceScale: {
			mode: LightweightCharts.PriceScaleMode.Percentage,
		},
		layout: { attributionLogo: false },
	});

	const firstSeries = chart.addSeries(LightweightCharts.LineSeries, {
		priceLineVisible: true,
		priceLineWidth: 2,
		priceLineColor: '#92151E',
		priceLineStyle: LightweightCharts.LineStyle.Dashed,
	});

	firstSeries.setData(generateData());
}
