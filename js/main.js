$(function() {
  var k = $(window).height();
  $(".next").click(function() {
    $.fn.fullpage.moveSectionDown();
  });
  $("#fullpage").fullpage({
    navigation: true,
    scrollingSpeed: 700,
    afterLoad: function(anchorLink, index) {
      if (index === 2) {
        $(".next").fadeOut();
        $(".search")
          .show()
          .animate({ right: 350 }, 1000, "easeOutBack", function() {
            $(".search-words").animate({ opacity: 1 }, 500, function() {
              $(".search").hide();
              $(".search-02-1")
                .show()
                .animate({ height: 30, right: 200, bottom: 450 }, 1000);
              $(".goods-02")
                .show()
                .animate({ height: 218 }, 1000);
              $(".words-02").animate({ opacity: 1 }, 500, function() {
                $(".next").fadeIn();
              });
            });
          });
      }
    },
    onLeave: function(index, nextIndex, direction) {
      $(".next").fadeOut();
      if (index === 2 && nextIndex === 3) {
        $(".shirt-02")
          .show()
          .animate(
            { bottom: -(k - 400), width: 207, left: 215 },
            1000,
            function() {
              $(".img-01-a , .btn-01-a").animate(
                { opacity: 1 },
                500,
                function() {
                  $(".next").fadeIn();
                }
              );
            }
          );
        $(".cover").show();
      }
      if (index === 3 && nextIndex === 4) {
        $(".shirt-02").hide();
        $(".t1f")
          .show()
          .animate({ bottom: -(k - 50), left: 250 }, 1000, function() {
            $(this).hide();
            $(".car-img").show();
            $(".car").animate(
              { left: "120%" },
              1500,
              "easeInElastic",
              function() {
                $(".note").show();
                $(".text,.words-04").animate({ opacity: 1 }, 1500, function() {
                  $(".next").fadeIn();
                });
              }
            );
          });
      }
      if (index === 4 && nextIndex === 5) {
        $(".hand-05").animate({ bottom: -10 }, 1000, function() {
          $(".mouse-a").animate({ opacity: 1 });
          $(".t1f-05")
            .show()
            .animate({ bottom: 180 }, 1000, function() {
              $(".order-05").animate({ bottom: 460 }, 1000, function() {
                $(".words-05").addClass("words-05-a");
                $(".next").fadeIn();
              });
            });
        });
      }
      if (index === 5 && nextIndex === 6) {
        $(".t1f-05").animate(
          { bottom: -(k - 600), width: 65, left: "41%" },
          1000,
          function() {
            $(".t1f-05").hide();
          }
        );
        $(".box-06").animate({ left: "39%" }, 1000, function() {
          $(".box-06").animate({ bottom: 30 }, 1000, function() {
            $(".box-06").animate({ left: "50%" }, 2000);
            $(".car-06").animate({ right: "40%" }, 2000);
            $(".words-06-a")
              .show()
              .animate({ left: "40%" }, 2000, "easeOutElastic");
            $(".pop-06")
              .show()
              .animate({ right: "39%" }, 2000);
            $(".man").animate({ right: "45%" }, 2000);
            $(".section6").animate(
              { backgroundPositionX: "100%" },
              2000,
              function() {
                $(".man").animate(
                  { height: 315, bottom: 116 },
                  1000,
                  function() {
                    $(".man").animate({ right: 500 }, 1000, function() {
                      $(".door").animate({ opacity: 1 }, 200, function() {
                        $(".women")
                          .show()
                          .animate(
                            { right: 350, height: 305 },
                            500,
                            function() {
                              $(".plese").show();
                              $(".next").fadeIn();
                            }
                          );
                      });
                    });
                  }
                );
              }
            );
          });
        });
      }
      if (index === 6 && nextIndex === 7) {
        setTimeout(() => {
          $(".star").animate({ width: 120 }, 500, function() {
            $(".good-07").show();
            $(".next").fadeIn();
          });
        }, 1000);
      }
      $(".shoping").hover(function() {
        $(".btn-08-a").toggle();
      });
      $(document).mousemove(function(event) {
        var x = event.pageX - $(".hand-08").width() / 2;
        var y = event.pageY + 10;
        var minY = k - 649;
        if (y < minY) {
          y = minY;
        }
        $(".hand-08").css({ left: x, top: y });
      });
      $(".again").click(function() {
        $.fn.fullpage.moveTo(1);
        $("img, .move").attr("style", "");
      });
    }
  });
});
