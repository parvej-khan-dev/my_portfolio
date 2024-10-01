import axios from "axios";

// const getLatestRepos = async (data, token) => {
//   // console.log("data", data);
//   try {
//     const username = data.githubUsername;

//     // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
//     // console.log("TOKEN", token);

//     if (token) {
//       const res = await axios.get(
//         `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
//         {
//           headers: {
//             Authorization: `token ${token}`,
//           },
//         }
//       );
//       let repos = res.data.items;
//       console.log("REPOS", repos);
//       let latestSixRepos = repos.splice(0, 6);
//       // console.log("LATEST 6 repos", latestSixRepos);
//       return latestSixRepos;
//     } else {
//       const res = await axios.get(
//         `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
//       );
//       let repos = res.data.items;
//       let latestSixRepos = repos.splice(0, 6);
//       return latestSixRepos;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const getLatestRepos = async (data, token) => {
  const username = data.githubUsername;

  const query = `
    {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          edges {
            node {
              ... on Repository {
                name
                description
                url
                stargazerCount
                forkCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    if (token) {
      const res = await axios.post(
        "https://api.github.com/graphql",
        { query },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        }
      );

      let pinnedRepos = res.data.data.user.pinnedItems.edges.map((edge) => edge.node);
      return pinnedRepos;
    } else {
      throw new Error("GitHub token is required for fetching pinned repositories");
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
