
var $artists = [];
var $artistNames = [];

$(function(){

  $('#graph').click(function(){
    var $inputs = $("input")
    $inputs.each(function(i){
      var dataMiner = new DataMiner(this.value);
      dataMiner.getArtistData();
      var artist = new ArtistFromData(dataMiner.artistData);
      dataMiner.fetchTracksUrl = 'https://api.spotify.com/v1/artists/'+artist.id+'/top-tracks?country=US'
      dataMiner.getTopTracks(artist);
      dataMiner.getTrackPopularity(artist);
      $artists[$artists.length] = artist;
      // var charter = new ChartBuilder(artist);
      // charter.buildChart();
    })
    $artists.forEach(function(artist){
      $artistNames.push(artist.name);
    })
    var builder = new ChartBuilder();
    builder.chartData();
    builder.buildChart();
  })

})
