const cloudName = 'avila-golf-tournament';
const unsignedUploadPreset = 'xd7qr8ib';

//api key = 221679668455921
//preset name = wdfrzca0
// api secret = 5CHoYVUW6TEARQ8qmR6XXEo3GOM


$.cloudinary.config({
  cloud_name: cloudName
})

$('.cloudinary_fileupload').unsigned_cloudinary_upload(unsignedUploadPreset, {
    cloud_name: cloudName,
    tags: 'browser_uploads'
  }, {
    multiple: true
  }
  )
  .bind('cloudinarydone', function(e, data) {
    console.log(`data.loaded: ${data.loaded},
  data.total: ${data.total}`)
  })
  .bind('fileuploadprogress', function(e, data) {
    console.log(`fileuploadprogress data.loaded: ${data.loaded},
  data.total: ${data.total}`);
  })
  .bind('cloudinaryprogress', function(e, data) {
    console.log(`cloudinaryprogress data.loaded: ${data.loaded},
  data.total: ${data.total}`);
  })
  .bind('cloudinarydone', function(e, data) {
  // inspect data.result for return value with link to the uploaded image and more
  console.log('Upload result', data.result);
  // Create a thumbnail of the uploaded image, with 150px width
    var image = $.cloudinary.image(
        data.result.public_id, {
          secure: true,
          width: 150,
          crop: 'scale'
        });
    $('.gallery').prepend(image);
});