
/*

	File: chartUtils.js
	Purpose: Misc. utils

	Copyright 2015 Jonathan Watmough

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

*/


// charting options
Chart.defaults.global.animation = false;
Chart.defaults.global.animationSteps = 20;

output = function(parentId,title) {
	var t = document.createTextNode(title);
	var sect = document.getElementById(parentId);
	sect.appendChild(t);
	sect.appendChild(document.createElement("br"));
}

// delete evrything except the title from a parent
clean = function(parentId) {
	var sect = document.getElementById(parentId);
	var title= sect.firstChild;
	while (sect.firstChild) {
	    sect.removeChild(sect.firstChild);
	}
}

// arrays
arrayAsString = function(ary) {
	var ret = "";
	for(i=0;i<ary.length;++i) {
		ret += ary[i].toFixed(3).toString() + " ";
	}
	return ret;
}

// chart a buffer
var canvasname = "";
chartBuffer = function(parentId, data, series) {
	
	// create a canvas and append to document
	var br     = document.createElement("br");
	var canvas = document.createElement("canvas");
	canvasname += "A";
	canvas.id = canvasname;
	canvas.width = 320;
	canvas.height = 200;
	var sect = document.getElementById(parentId);
	sect.appendChild(canvas);
	sect.appendChild(document.createElement("br"));
	
	// over series
	var datasets = [];
	for(i=0;i<series.length;++i) {
		// create array to pass to chart
		var obj = series[i]
		var start = obj.start;
		var count = obj.count;
		var stride = obj.stride;
		var color = obj.color;
		var labels = new Array(count);
		var chartdata = new Array(count)
		
		// from start by stride for count
		for(d=0;d<count;++d)
		{
			// label
			labels[d] = "";
			
			// copy data
			chartdata[d] = data[start+d*stride];
		}
		
		datasets.push({fillColor:"rgba(0,0,0,0)",
					   pointColor:color,
					   strokeColor:color,
					   data:chartdata});
	}
	
	// add the chart
	var chartseries = {labels:labels, datasets:datasets};
	var ctx = document.getElementById(canvasname).getContext("2d");
	var chart = new Chart(ctx).Line(chartseries);
}

