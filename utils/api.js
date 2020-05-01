const { Octokit } = require('@octokit/rest')
require('dotenv').config({ path: '../homework_9_personal_access_token/.env'}) //file saved locally in a folder 
                                                                              //called homework\homework_9_personal_access_token.  This was
                                                                              //due to GitHub killing my first personal access token because
                                                                              //it was visible publicly.


function runApi(user, callBack){
  var personalAccessToken = process.env.PATOKEN;
  const githubUser = new Octokit({ auth: personalAccessToken });

  githubUser.request('GET /users/:username', {
    username: user
  }).then(function(res) {
    callBack(res.data);
  });
};

module.exports = runApi;