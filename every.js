var information = [];
$.ajax({
  url: 'http://10.32.176.4/xplusequal13-all-data'
})
.success(function(data) {
  var d = data.split('*');
  d.map(function(log) {
    if(log !== "") {
      var a = log.split(',');
      if(a[0] === "") a.shift();
      information[0] = a[0];
      information[1] = (information[1]) ? (information[1]+a)/2 : a[1]
      information[2] = a[2]
      information[3] = (information[3]) ? (information[3]+a)/2 : a[3]
      information[4] = (information[4]) ? (information[4]+a)/2 : a[4]
      information[5] = (information[5]) ? (information[5]+a)/2 : a[5]
    }
  })
  var place = information[0].split(' ');
  $('#place').html('Place: '+place[0]);
  $('#adress').html('Adress: '+information[0]);
  $('#one').html(information[1]);
  $('#two').html(information[2]);
  $('#three').html(information[3]);
  $('#four').html(information[4]);
  $('#five').html(information[5]);
});
