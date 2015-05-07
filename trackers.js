//GA event tracking for buttons
$(document).ready(function() {
$('.btn-white').on('click', function() {
  ga('send', 'event', 'signup', 'click display', 'marketolp');
  });
  
$('.btn-white').on('click', function() {
ga('multitenant.send', 'event', 'signup', 'modal', 'opened');
 });
  
}); 

//var script = document.createElement('script');
//script.src = '//code.jquery.com/jquery-1.11.2.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);
window.onload = function(){ 
document.getElementsByClassName("mktoForm")[0].onsubmit = grabFormData;
}; 

function grabFormData(e) { 
  var id = e.srcElement.getAttribute("id");
  var email = $("#" + id).find("#Email").val();
  var first = $("#" + id).find("#FirstName").val();
  var last = $("#" + id).find("#LastName").val();
  var company = $("#" + id).find("#Company").val();
  var phone = $("#" + id).find("#Phone").val();
  var formid = $("#" + id).find("input[name=formid]").val();
  //console.log(first + " " + last, email, company);
  FS.identify(email, {
    "displayName": first + " " + last,
    "email": email,
    "company": company,
    "phone": phone,
    "formid": formid
   });
}
 
window['_fs_debug'] = false;
window['_fs_host'] = 'www.fullstory.com';
window['_fs_org'] = 'WZl';
(function(m,n,e,t,l,o,g,y){
  g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
  o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
  y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
  g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){FS(l,v)};
  g.clearUserCookie=function(d,i){d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
  ';path=/;expires='+new Date(0);i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}
})(window,document,'FS','script','user');

