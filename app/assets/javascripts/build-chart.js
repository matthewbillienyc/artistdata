function ChartBuilder(){
  this.labels = $artistNames;
  this.dataSetProperties = [
    {
        label: "First Track",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: []
    },
    {
        label: "Second Track",
        fillColor: "rgba(190,190,190,0.5)",
        strokeColor: "rgba(190,190,190,0.8)",
        highlightFill: "rgba(190,190,190,0.75)",
        highlightStroke: "rgba(190,190,190,1)",
        data: []
    },
    {
        label: "Third Track",
        fillColor: "rgba(160,160,160,0.5)",
        strokeColor: "rgba(160,160,160,0.8)",
        highlightFill: "rgba(160,160,160,0.75)",
        highlightStroke: "rgba(160,160,160,1)",
        data: []
    },
    {
        label: "Fourth Track",
        fillColor: "rgba(140,140,140,0.5)",
        strokeColor: "rgba(140,140,140,0.8)",
        highlightFill: "rgba(140,140,140,0.75)",
        highlightStroke: "rgba(140,140,140,1)",
        data: []
    },
    {
        label: "Fifth Track",
        fillColor: "rgba(140,140,140,0.5)",
        strokeColor: "rgba(140,140,140,0.8)",
        highlightFill: "rgba(140,140,140,0.75)",
        highlightStroke: "rgba(140,140,140,1)",
        data: []
    }
  ]
}

ChartBuilder.prototype = {
  chartData: function(){
    for(var i = 0; i < $artists.length; i++){
      this.dataSetProperties[0].data.push($artists[i].trackPopularity[0]);
      this.dataSetProperties[1].data.push($artists[i].trackPopularity[1]);
      this.dataSetProperties[2].data.push($artists[i].trackPopularity[2]);
      this.dataSetProperties[3].data.push($artists[i].trackPopularity[3]);
      this.dataSetProperties[4].data.push($artists[i].trackPopularity[4]);
      debugger;
    }
  },
  buildChart: function(){
    var data = {labels: this.labels, datasets: this.dataSetProperties};
    var ctx = $("#graph-canvas").get(0).getContext('2d');
    var myBarChart = new Chart(ctx).Bar(data);
  }
}
