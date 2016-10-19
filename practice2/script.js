window.onload = function(){
	var roadMap = Snap.select("#roadMap");
	var map = roadMap.select("#map");

	var goal = map.rect(360,148,21,21);
	goal.attr({
		fill: '#192D4A',
		stroke: '#FFF',
		strokeWidth: 2
	});
	var pt = map.circle(150,404,12);
	pt.attr({
		fill: '#C53645',
		stroke: '#FFF',
		strokeWidth: 8
	});
	map.text(160,430,"START").attr({
		font: "bold 18px Arial, sans-serif",
		fill: "#192D4A"
	});
	map.text(350,135,"GOAL!").attr({
		font: "bold 18px Arial, sans-serif",
		fill: "#192D4A"
	});
	// 在地圖上加上遮色片
	var maskCircle = roadMap.circle(250,250,250);

	maskCircle.attr({
		fill:'#FFF'
	});
	map.attr({
		mask: maskCircle
	});
	
	var route = map.select("#router");
	route.attr({
		display: "none"
	});
	var len = route.getTotalLength();
	console.log(route);
	roadMap.click(function(){
		Snap.animate(0, len, function(val){
			var dot = route.getPointAtLength(val);
			// console.log(len);
			pt.attr({
				cx : 100,
				cy : 200
				// cy : dot.y
			});
		},10000);
	});
}