const { Octokit } = require("@octokit/rest");
exports.main = async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT
  });

  const result = await octokit.rest.actions.createWorkflowDispatch({
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    workflow_id: process.env.GITHUB_WORKFLOW_FILENAME,
    ref: process.env.GITHUB_BASE_BRANCH
  });

  console.log(result);

  res.status(result.status).send(result);
};
