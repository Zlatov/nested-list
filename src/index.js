"use strict"

import './index.scss'

var nested_list = {

}

import $ from "jquery"

$(document).ready(function() {

  $(".nested-list.openable").find("li:has(ul)").prepend('<div class="drop"></div>');
  $(".nested-list.openable div.drop").click(function() {
    if ($(this).nextAll("ul").css('display')=='none') {
      $(this).nextAll("ul").slideDown(400);
      $(this).css({'background-position':"-11px 0"});
    } else {
      $(this).nextAll("ul").slideUp(400);
      $(this).css({'background-position':"0 0"});
    }
  });
  $(".nested-list.openable").find("ul").slideUp(400).parents("li").children("div.drop").css({'background-position':"0 0"});

});

export default nested_list
