export function cropImage(imageBase64, cb) {
    var img = new Image();
    img.src = imageBase64;
    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = 1541;
      canvas.height = 866;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(
        img,
        // Start at 400/330 pixels from the left and the top of the image (crop),
        400,
        300, // "Get" a `800 * 500` (w * h) area from the source image (crop),
        800,
        500,
        // Place the result at 0, 0 in the canvas,
        0,
        0,
        1541,
        1080
      );
      cb(canvas.toDataURL("image/jpeg"));
    };
  }