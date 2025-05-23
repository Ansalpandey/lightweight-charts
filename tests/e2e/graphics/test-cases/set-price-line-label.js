function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 1000; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const mainSeries = chart.addSeries(LightweightCharts.LineSeries);

	mainSeries.setData(generateData());

	const priceLine = {
		price: 980,
		color: '#be1238',
		lineWidth: 2,
		lineStyle: LightweightCharts.LineStyle.Dotted,
		axisLabelVisible: true,
		title: 'P/L: 500',
	};

	mainSeries.createPriceLine(priceLine);
}
