/*
 * Date Format 1.2.3 - MIT license
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net> and Kris Kowal <cixar.com/~kris.kowal/>
 * Minified by Joshua Woodward for GDG Bootstrap
 */
var dateFormat=function(){var k=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,l=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,t=/[^-+\dA-Z]/g,d=function(a,c){a=String(a);for(c=c||2;a.length<c;)a="0"+a;return a};return function(a,c,h){var f=dateFormat;1==arguments.length&&("[object String]"==Object.prototype.toString.call(a)&&!/\d/.test(a))&&(c=a,a=void 0);a=a?new Date(a):new Date;if(isNaN(a))throw SyntaxError("invalid date");c=String(f.masks[c]||c||f.masks["default"]);"UTC:"==c.slice(0,4)&&(c=c.slice(4),h=!0);var b=h?"getUTC":"get",g=a[b+"Date"](),n=a[b+"Day"](),j=a[b+"Month"](),p=a[b+"FullYear"](),e=a[b+"Hours"](),q=a[b+"Minutes"](),r=a[b+"Seconds"](),b=a[b+"Milliseconds"](),m=h?0:a.getTimezoneOffset(),s={d:g,dd:d(g),ddd:f.i18n.dayNames[n],dddd:f.i18n.dayNames[n+7],m:j+1,mm:d(j+1),mmm:f.i18n.monthNames[j],mmmm:f.i18n.monthNames[j+12],yy:String(p).slice(2),yyyy:p,h:e%12||12,hh:d(e%12||12),H:e,HH:d(e),M:q,MM:d(q),s:r,ss:d(r),l:d(b,3),L:d(99<b?Math.round(b/10):b),t:12>e?"a":"p",tt:12>e?"am":"pm",T:12>e?"A":"P",TT:12>e?"AM":"PM",Z:h?"UTC":(String(a).match(l)||[""]).pop().replace(t,""),o:(0<m?"-":"+")+d(100*Math.floor(Math.abs(m)/60)+Math.abs(m)%60,4),S:["th","st","nd","rd"][3<g%10?0:(10!=g%100-g%10)*g%10]};return c.replace(k,function(a){return a in s?s[a]:a.slice(1,a.length-1)})}}();dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.i18n={dayNames:"Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),monthNames:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};Date.prototype.format=function(k,l){return dateFormat(this,k,l)};