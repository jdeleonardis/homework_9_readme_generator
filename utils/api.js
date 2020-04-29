const { Octokit } = require('@octokit/rest')

function runApi(user, callBack){
    const githubUser = new Octokit({ auth: "0ef0ea0af5fbb6f6ac5c78dadf603df59b1c670f" });

    githubUser.request('GET /users/:username', {
      username: user
    }).then(function(res) {
      callBack(res.data);
    });
};

module.exports = runApi;