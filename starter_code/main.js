var cities = ['nyc', 'sf', 'la', 'atx', 'syd']

var selectBox = $('#city-type')

cities.forEach(function (city) {
  selectBox.append('<option>' + city + '<option>')
})

selectBox.change(function() {
  if (selectBox.val() === 'nyc') {
    $('body').css('background-image', 'url(images/nyc.jpg)')
  }
})
