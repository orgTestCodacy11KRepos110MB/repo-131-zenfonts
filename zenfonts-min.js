!function(t,e){"use strict";var i="Courier,Verdana",n=e.documentElement,a=function l(t){if(t){var e=t.parentNode;e&&e.removeChild(t)}},o=function f(t,e,i){for(var n=e>9999,o=t.length;o--;){var s=t[o];(n||s.offsetWidth!==s.origWidth)&&(t.splice(o,1),a(s))}0===t.length?n||i():setTimeout(function(){f(t,1.3*e,i)},e)},s=function r(t){t&&(n.className=n.className.replace(new RegExp("(^|\\s)*"+t+"(\\s|$)*","g")," "))};t.Zenfonts=function d(t,l){t instanceof Array||(t=[t]),l=l||{};for(var f=l.loadingClass,r=l.fallbackClass,d=[],c=0,h=t.length;h>c;c++){var m=t[c];"string"==typeof m&&(m={family:m});var u=m.family,p=m.style,g=e.createElement("div");g.style.cssText="position:absolute;top:-999px;left:-999px;visibility:hidden;display:block;width:auto;height:auto;white-space:nowrap;line-height:normal;margin:0;padding:0;font-variant:normal;font-size:20em;font-family:"+i+";"+(p?p:""),g.appendChild(e.createTextNode("// Zenfonts([{}]);")),e.body.appendChild(g),g.origWidth=g.offsetWidth,g.style.fontFamily="'"+u+"',"+i,g.origWidth!==g.offsetWidth?a(g):d.push(g)}var v=function W(){s(f),s(r),l.onLoad&&l.onLoad()};if(0===d.length)v();else{f&&(n.className+=" "+f);var y=v;if(r){var C=l.timeout||2222,N=setTimeout(function b(){s(f),n.className+=" "+r},C);y=function(){clearTimeout(N),v()}}o(d,23,y)}}}(this,document);