$(document)
  .ready(() => {
    $('form')
      .on('click', (e) => {
        e.preventDefault();
        let flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let photo = $("#search")
          .val();
        let flickrOptions = {
          tags: photo,
          format: "json"
        };

        function displayPhotos(data) {
          var photoHTML = '<ul>';
          $.each(data.items, function(i, photo) {
            photoHTML += '<li class="grid-25 tablet-grid-50">';
            photoHTML += '<a href="' + photo.link + '" class="image">';
            photoHTML += '<img src="' + photo.media.m + '"></a></li>';
          });
          photoHTML += '</ul>';
          $("#photos")
            .html(photoHTML);
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);
      });
  });
