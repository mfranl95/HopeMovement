function initQuoteCarousel() {

    var $quotesWrapper = $(".cust-quotes");
    var $quotes = $quotesWrapper.find("blockquote");

    if (!$quotes.length) {
        return;
    }

    var selectNextQuote = function () {
        // keep move first quote in dom to the end to make continous
        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

        setTimeout(selectNextQuote, $quote.data("timeout"));
    };

    setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

}

$(function () {
    initQuoteCarousel();
});

// Fonts
(function(d) {
    var config = {
      kitId: 'opn7dui',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

 (function(d) {
    var config = {
      kitId: 'fhu8mgt',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
