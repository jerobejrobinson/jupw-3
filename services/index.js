import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// const graphqlAPI = "s";

export const getServicePage = async (slug) => {
    const query = gql`
        query getServicePage($slug: String!) {
            service(where: {slug: $slug}) {
                title
                content {
                    html
                }
                excerpt
                slug
                featuredImage {
                    url
                    fileName
                }
                blogs(last: 3) {
                    id
                    title
                    slug
                    featuredImage {
                        fileName
                        url
                    }
                }
                projects(last: 3) {
                    id
                    price
                    projectImages(first: 1) {
                        fileName
                        url
                    }
                    slug
                    title
                }
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug })

    return results.service
}

export const getAllServiceSlugs = async () => {
    const query = gql`
        query getAllServiceSlugs {
            services {
                slug
            }
        }
    `
    const results = await request(graphqlAPI, query)

    return results.services
}

export const getServices = async () => {
    const query = gql`
        query getServices {
            services {
                id
                slug
                title
                excerpt
                featuredImage {
                url
                fileName
                }
            }
        }
    `
    const results = await request(graphqlAPI, query)

    return results.services
}

export const getAllCities = async () => {
    const query = gql`
        query getAllCities {
            citiesConnection {
                edges {
                    node {
                        slug
                        title
                    }
                }
            }
        }
    `

    const results = await request(graphqlAPI, query)
    console.log(results)
    return results.citiesConnection
}

// Getting data for project page
export const getProjectPage = async (slug) => {
    const query = gql`
        query getProjectPage($slug: String!) {
            project(where: {slug: $slug}) {
                content {
                    html
                }
                id
                price
                slug
                title
                projectImages {
                    fileName
                    url
                }
                city {
                    slug
                    title
                    googleMapUrl
                }
            }
            projects(last: 3) {
                slug
                title
                projectImages(first: 1) {
                    url
                    fileName
                }
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug })

    return [results.project, results.projects]
}

//Get all current slugs for the project pages
export const getAllProjectSlugs = async () => {
    const query = gql`
        query getAllProjectSlugs {
            projects {
                slug
            }
        }
    `
    const results =  await request(graphqlAPI, query)

    return results.projects
}