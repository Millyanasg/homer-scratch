document.addEventListener("DOMContentLoaded", function () {
  function checkScratchedPercentage() {
    var imageData = scratchCtx.getImageData(0, 0, canvasWidth, canvasHeight);
    var pixels = imageData.data;
    var transparentPixels = 0;
    for (var i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) {
        transparentPixels++;
      }
    }
    var scratchedPercentage = (transparentPixels / (pixels.length / 4)) * 100;
    if (scratchedPercentage > 70) {
      showResetButton();
    }
  }
  function showResetButton() {
    var resetButton = document.getElementById("resetButton");
    if (!resetButton) {
      resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.textContent = "Reiniciar";
      resetButton.style.position = "absolute";
      resetButton.style.zIndex = 3;
      resetButton.style.top = "7%";
      resetButton.style.lef = "50%";
      resetButton.style.padding = "10px";
      resetButton.style.backgroundColor = "#3C86B5";
      resetButton.style.color = "white";
      resetButton.style.borderRadius = "8px";
      resetButton.style.border = "none";
      document.body.appendChild(resetButton);

      resetButton.addEventListener("click", resetScratchCard);
    }
    resetButton.style.display = "block";
  }

  function resetScratchCard() {
    scratchCtx.globalCompositeOperation = "source-over";
    scratchCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    scratchCtx.fillStyle = "#191919";
    scratchCtx.fillRect(0, 0, canvasWidth, canvasHeight);
    scratchCtx.drawImage(
      overlayImg,
      posX,
      posYFirstState,
      imageWidth,
      imageHeight
    );
    scratchCtx.font = "normal 400 18px Unbounded, sans-serif";
    scratchCtx.fillStyle = "white";
    scratchCtx.fillText(
      "Se você for curioso raspe aqui!",
      canvasWidth / 2,
      posYFirstState - 30
    );
    var resetButton = document.getElementById("resetButton");
    if (resetButton) {
      resetButton.style.display = "none";
    }
  }

  var canvasWidth = 400;
  var canvasHeight = 400;
  var imageWidth = 300;
  var imageHeight = 300;

  var posX = (canvasWidth - imageWidth) / 2;
  var posYFirstState = (canvasHeight - imageHeight) / 2 + 50;
  var posYSecondState = 10;

  var backgroundCanvas = document.getElementById("background-canvas");
  var backgroundCtx = backgroundCanvas.getContext("2d");
  var backgroundImg = new Image();
  backgroundImg.src = "./images/homer2.png";
  backgroundImg.onload = function () {
    backgroundCtx.drawImage(
      backgroundImg,
      posX,
      posYSecondState,
      imageWidth,
      imageHeight
    );
    backgroundCtx.font = "normal 400 18px Unbounded, sans-serif";
    backgroundCtx.fillStyle = "black";
    backgroundCtx.textAlign = "center";
    backgroundCtx.fillText(
      "Não era nada, seu besta!",
      canvasWidth / 2,
      posYSecondState + imageHeight + 20
    );
  };

  var scratchCanvas = document.getElementById("scratch-canvas");
  var scratchCtx = scratchCanvas.getContext("2d");
  var overlayImg = new Image();
  overlayImg.src = "./images/homer1.png";
  overlayImg.onload = function () {
    scratchCtx.fillStyle = "#191919";
    scratchCtx.fillRect(0, 0, canvasWidth, canvasHeight);
    scratchCtx.drawImage(
      overlayImg,
      posX,
      posYFirstState,
      imageWidth,
      imageHeight
    );
    scratchCtx.font = "normal 400 18px Unbounded, sans-serif";
    scratchCtx.fillStyle = "white";
    scratchCtx.textAlign = "center";
    scratchCtx.fillText(
      "Se você for curioso raspe aqui!",
      canvasWidth / 2,
      posYFirstState - 30
    );
  };
  scratchCanvas.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      isScratching = true;
    },
    { passive: false }
  );

  scratchCanvas.addEventListener("touchend", function (e) {
    isScratching = false;
  });

  scratchCanvas.addEventListener("touchcancel", function (e) {
    isScratching = false;
  });

  scratchCanvas.addEventListener("touchmove", function (e) {
    if (isScratching) {
      var touch = e.touches[0];
      var rect = scratchCanvas.getBoundingClientRect();
      var x = touch.clientX - rect.left;
      var y = touch.clientY - rect.top;
      scratchCtx.globalCompositeOperation = "destination-out";
      scratchCtx.beginPath();
      scratchCtx.arc(x, y, 40, 0, Math.PI * 2, false);
      scratchCtx.fill();
      checkScratchedPercentage();
    }
  });

  var isScratching = false;
  scratchCanvas.addEventListener("mousedown", function (e) {
    isScratching = true;
  });
  scratchCanvas.addEventListener("mouseup", function (e) {
    isScratching = false;
  });
  scratchCanvas.addEventListener("mouseleave", function (e) {
    isScratching = false;
  });
  scratchCanvas.addEventListener("mousemove", function (e) {
    if (isScratching) {
      var rect = scratchCanvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      scratchCtx.globalCompositeOperation = "destination-out";
      scratchCtx.beginPath();
      scratchCtx.arc(x, y, 40, 0, Math.PI * 2, false);
      scratchCtx.fill();
      checkScratchedPercentage();
    }
  });
});
