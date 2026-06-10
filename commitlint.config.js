module.exports = {
  extends: ["@commitlint/config-conventional"],
  helpUrl: "https://www.conventionalcommits.org/",
  ignores: [
    // We need this until https://github.com/dependabot/dependabot-core/issues/2445
    // is resolved.
    (msg) => /Signed-off-by: dependabot\[bot]/m.test(msg),
    // Onboarding commits from the StepSecurity fork that don't follow
    // conventional-commits. Drop these entries once history is rewritten.
    (msg) => /^lintr removed from gitignore\b/.test(msg),
    (msg) => /^subsciption check added\b/.test(msg),
  ],
};
