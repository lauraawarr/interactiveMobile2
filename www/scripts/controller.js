var app = function(app){

	app.makeController = function(stage, view){

		view.tabs.on("change", function(){
			zog(view.tabs.text)
		});
	}; //end makeController

	return app;

}(app || {});