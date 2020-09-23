/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql`
//     query {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               tags
//             }
//             id
//             slug
//           }
//         }
//       }
//     }
//   `

//   const postPerPage = 5
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve(".src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     })
//   })

//   data.allMdx.edges.forEach(edge=>{
//       const slug = edge.node.slug
//       const id  = edge.node.id
//       actions.createPages({
//           path: slug,
//           component: require.resolve(`./src/templates/singlePost.js`),
//           context:{id}
//       })
//   })
// }
