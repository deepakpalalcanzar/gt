//var github = require('octonode');

// Then we instantiate a client with or without a token (as show in a later section)


// var ghme           = client.me();
// var ghuser         = client.user('deepakpalalcanzar');
// var ghrepo         = client.repo('deepakpalalcanzar/test');
// var ghorg          = client.org('flatiron');
// var ghissue        = client.issue('pksunkara/hub', 37);
// var ghmilestone    = client.milestone('pksunkara/hub', 37);
// var ghlabel        = client.label('pksunkara/hub', 'todo');
// var ghpr           = client.pr('pksunkara/hub', 37);
// var ghrelease      = client.release('pksunkara/hub', 37);
// var ghgist         = client.gist();
// var ghteam         = client.team(37);
// var ghproject      = client.project('pksunkara/hub', 37);
// var ghnotification = client.notification(37);

//var ghsearch = client.search();



// client.get('/users/deepakpalalcanzar', {}, function (err, status, body, headers) {
//   console.log(body); //json object
// });

// var client = github.client();
//   var ghme           = client.me();


// var scopes = {
//   'add_scopes': ['user', 'repo', 'gist'],
//   'note': 'admin script7'
// };

// github.auth.config({
//   username: 'deepakpalalcanzar',
//   password: 'alcanzar@123'
// }).login(scopes, function (err, id, token) {
//   console.log(id, token);

  
//   ghme.repos({'token':token},function (err, data, token) {
// 	  console.log(err, data, token);
// 	});


// });




// ghme.info(function(err, data, headers) {
//   console.log("error: " + err);
//   console.log("data: " + data);
//   console.log("headers:" + headers);
// });







//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// var GitHubApi = require("github");

// var github = new GitHubApi({
//     // optional
//     debug: true,
//     protocol: "https",
//     host: "github.my-GHE-enabled-company.com", // should be api.github.com for GitHub
//     pathPrefix: "/api/v3", // for some GHEs; none for GitHub
//     headers: {
//         "user-agent": "Deepakalcanzattestapp" // GitHub is happy with a unique user agent
//     },
//     Promise: require('bluebird'),
//     followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
//     timeout: 5000
// });

// github.authenticate({
//     type: "basic",
//     username: 'deepakpalalcanzar',
//     password: 'alcanzar@123'
// }, function(err, res) {
//     if (res.token) {
//         //save and use res.token as in the Oauth process above from now on
//     }
// });

// github.authorization.create({
//     scopes: ["user", "public_repo", "repo", "repo:status", "gist"],
//     note: "what this auth is for",
//     note_url: "http://url-to-this-auth-app",
//     headers: {
//         "X-GitHub-OTP": "two-factor-code"
//     }
// }, function(err, res) {
//     if (res.token) {
//         //save and use res.token as in the Oauth process above from now on
//     }
// });





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






// var Github = require('github-api');

// var github = new Github({
//   username: "deepakpalalcanzar",
//   password: "alcanzar@123",
//   auth: "basic"
// });

//console.log(github);

// var yahoo = github.getOrganization('deepakpalalcanzar');
// yahoo.getRepos(function(err, repos) {
//    console.log(err,repos);
// });

// var repo = github.getRepo('deepakpalalcanzar', 'test',function(err, repo1) {
//    console.log(err,repo1);
// });

// //console.log(repo);
// repo.show(function(err, repo) {
// 	console.log(err,repo);

// });

// var state = 'open'; //or 'closed', or 'all' 
// repo.listPulls(state, function(err, pullRequests) { console.log(err,pullRequests); });


// var user = github.getUser('deepakpalalcanzar',function(err, repos) {console.log(err,repos);});
// console.log(user);

// user.userRepos('deepakpalalcanzar', function(err, repos) {console.log(err,repos);});






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







var checkUpdate = require('check-update-github');
var pkg = require('./package.json');
 
checkUpdate({
    name: pkg.name, 
    currentVersion: pkg.version, 
    user: 'deepakpalalcanzar',
    branch: 'master'
    }, function(err, latestVersion, defaultMessage){
    	console.log(err, latestVersion, defaultMessage);
    if(!err){
        console.log(defaultMessage);
    }
});