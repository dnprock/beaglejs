jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

function setGA(ga_account, ga_domain){
  if (window._gaq) return;
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', ga_account]);
  _gaq.push(['_setDomainName', ga_domain]);
  _gaq.push(['_trackPageview']);

  _gaq.push(['_trackEvent', 'page', 'load', 'page loaded']);

  (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
};

function setBeagle(ga_account, ga_domain, class_regex) {
  setGA(ga_account, ga_domain);
  
  $(":regex(class, " + class_regex + ")").click(function(e) {
    var tag = $(e.currentTarget);
    var tagData = { 'name':tag.prop("tagName"), 'class':tag.attr("class"),
                  'id':tag.attr("id"), 'value':tag.attr("value") };
    console.log(tagData);
    _gaq.push(['_trackEvent', 'beagle_class', 'click', JSON.stringify(tagData)]);
  });
}