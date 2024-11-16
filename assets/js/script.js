(function ($) {
  "use strict";

  if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = $(entry.target);
          img.attr("src", img.data("src")).removeClass("lazy");
          observer.unobserve(entry.target);
        }
      });
    });

    $(".lazy").each(function () {
      observer.observe(this);
    });
  } else {
    $(window).on("scroll", lazyLoad);
    $(window).on("resize", lazyLoad);
    lazyLoad();
  }
})(jQuery);
