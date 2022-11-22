var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// once AJAX is linked through JQUERY, then it returns JSON data
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// this is done through the browser so no linking JQUERY AJAX is necessary, it keeps the website lighter.
// it also returns JSON data like AJAX.
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// this is the old school way similar to the above fetch method, except this does not return JSON data unless
// it is JSON parsed. it will normally return a string
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned

//jquery ajax and fetch both return JSON data, while xhr will return a string.
