const path = require("path")
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
  {
    allApiData {
      characters {
        info {
          count
        }
        results {
          name
        }
      }
    }
  }
`)
  
  for (let i = 1; i <= data.allApiData.characters.info.count; i++) {
    actions.createPage({
      component: path.resolve("./src/templates/character-details.js"),
      context: { id: i },
      path: "/" + "detail-" + i,
    })
  }
}