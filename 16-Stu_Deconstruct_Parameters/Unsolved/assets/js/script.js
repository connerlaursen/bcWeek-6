fetch(
  // Explain each parameter in comments below.
// first paramter is per page, only show 10
// next is state of issues to return, only show open issues
// next is sort by creation date
// next is direction to sort results by
// 
//   
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
