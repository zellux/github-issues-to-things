(function () {
  // check if it's issue page
  if (!document.getElementsByClassName("js-comment-edit-button").length)
    return;

  var issueTitle = document.getElementsByClassName("discussion-topic-title")[0].innerText;
  var issueLink = 'Issue link: ' + window.location.toString();
  var issueBody = document.getElementsByClassName("comment-body")[0].textContent
  var thingsURL = 'things:add?notes=' + encodeURIComponent(issueLink + issueBody) + '&title=' + encodeURIComponent(issueTitle);

  var target = document.getElementsByClassName("comment-topic-actions")[0].getElementsByTagName("li")[0];
  var btn = document.createElement("a");
  var text = document.createTextNode("Add to Things");

  btn.appendChild(text);
  btn.className = "button minibutton";
  btn.href = thingsURL;
  btn.style["margin-right"] = "10px";

  target.insertBefore(btn, target.childNodes[0]);

})();
