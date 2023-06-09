# Github Action Dispatch Function

The purpose of this function is to receive unauthenticated webhook events from third-party services to trigger Gitub Action workflows.

## Prerequisites

- The Github Action you wish to trigger should already exist in the base branch of the repository you're targeting (typically `master` or `main`)
- You must configure your Github Actions workflow to run when the `workflow_dispatch` webhook event occurs.

```yaml
# Github Actions Documentation: https://help.github.com/en/github/automating-your-workflow-with-github-actions
name: Download Translations from Third Party Provider

on: workflow_dispatch:
...
```

## Environment Variables

The following environment variables are all required to run this function

GITHUB_PAT
: Github Personal Access Token. Requires `workflow` permission.

GITHUB_OWNER
: The organization or user which the dispatch event will be published to.
: For a Github URL of `https://github.com/theaccordance/dispatchly/` the value would be `theaccordance`

GITHUB_REPO
: The name of the repository
: For a Github URL of `https://github.com/theaccordance/dispatchly/` the value would be `dispatchly`

GITHUB_WORKFLOW_FILENAME
: The filename of the Github Action you wish to trigger
: For a workflow file found at `/.github/workflows/download-translations.yml` the value would be `download-translations.yml`

GITHUB_BASE_BRANCH
: The base branch of the repo, required to trigger an action workflow
