# GCP DevOps Workshop

Welcome to the `gcp_devops_workshop` !

This repo contains the code, organized in steps, of the DevOps workshop I usually present when talking about DevOps and the GCP.

The goal of this workshop is to introduce trainees to these concepts/tools by making them build a simple web API and gradually implement CI/CD pipelines; containerization, monitoring, etc.

This is an overview of the pipeline we'll be building:

```mermaid
flowchart TD
    id1[Initialize a NodeJS Express app]
    id2[Dockerize it with application stack containing a db]
    id3[Checkout on a feature branch]
    id4[Write the test for the output of a given endpoint]
    id5[Test fails]
    id6[Write the code that makes the test pass]
    id7[Push the code to the remote repository]
    id8[Run tests in the CI, including the dockerized db]
    id9[Push an image to the Google Artifact Registry]
    id10[Pull the pushed image in the same pipeline]
    id11[Deploy a container with this image on Google Cloud Run in the same pipeline]

    id1-->id2
    id2-->id3
    id3-->id4
    id4-->id5
    id5-->id6
    id6-->id7
    id7-->id8
    id8-->id9
    id9-->id10
    id10-->id11
```

You would navigate between the repo steps by checking out to the dedicated branch incrementally, e.g. git checkout step/x. You could fork the repo and go through the workshop that way, but I strongly recommend you'd create a repo from scratch and implement the steps one by one, using this repo as a reference: it's better for learning !

NOTE: the `main` branch is the most advanced. So, if you want to start from scratch, you can use the `step/0` branch.

Link to the wiki is available here => <https://github.com/yactouat/gcp_devops_workshop/wiki>

## Prerequisites

Node.js installed on your machine.
