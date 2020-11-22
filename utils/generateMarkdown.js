// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  * ${data.desc}
  * ${data.prob}
  * ${data.feats}
`;
}

module.exports = {generateMarkdown};
