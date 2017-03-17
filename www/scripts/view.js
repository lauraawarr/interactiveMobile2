var app = function(app){

	app.makeView = function(stage){

		var view = {};

		var logo = new zim.Rectangle(300,100, frame.blue)
		.addTo(stage);
		// .pos(null, 50);

		var content = new zim.Container(500,500)
			.addTo(stage);
		var object1 = new zim.Rectangle(500,500, frame.green)
			.addTo(content)

		var footer = new zim.Container(500, 100)
			.addTo(stage);
			// .pos(null, stageH-50);
		var tabs = view.tabs = new zim.Tabs({
				width: 500, 
				tabs: ["ONE", "TWO", "THREE"]
			}).addTo(footer);


		// LAYOUT

		var layout = view.layout = new zim.Layout({
			holder: stage,
			regions: [
				{object: logo, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
				{object:content, marginTop:5, maxWidth:80, align: "center"},
				{object:footer, marginTop:5, maxWidth:80, height:20, backgroundColor: frame.orange}
			],
			regionShape: new zim.Shape()
		});

		return view
	}; //end makePages

	return app;

}(app || {}); //use modual pattern to avoid overwriting variables 