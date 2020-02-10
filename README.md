# Personal Website Project

I will be using Docker + Jenkins to work on my web development projects. I am assuming that you already have Docker installed and have basic knowledge of Docker. Below are the instructions on how I set up my containers for development.

## Creating a Container for GIT-based Project

1\. Clone a Linux-based docker image. You clone either a full image of Linux, such as Ubuntu, or you can clone a lightweight version, such as Alpine or Debian. For this project, we will be using Alpine.

```
docker pull alpine
```

2\. Run the pulled image to create a new running container.

```
docker run -it --name my-website --mount type=bind,source="$(pwd)",target=/projects
```

This command create a bind mount on your host computer. This is only necessary if you want to edit files in your container using programs like code editors such as VS code or VIM that are already installed on your host machine.

3\. Install GIT on your container. Installing GIT is dependent on the OS you chose. Visit this page for more details.

[https://git-scm.com/download/linux
](https://git-scm.com/download/linux)

Since we are using Alpine, our command will be:

```
apk add git
```

4\. Clone your Github repo and that's it!

## Creating a Container for Jenkins CI/CD

1\. Go to Docker Hub and search for the latest Jenkins image. As of this writing, the most current Jenkins image is here:

[https://hub.docker.com/r/jenkins/jenkins](https://hub.docker.com/r/jenkins/jenkins)

The above page has a link for further documentation on how to use the Jenkins docker image. You can also find this link below:

[https://github.com/jenkinsci/docker/blob/master/README.md](https://github.com/jenkinsci/docker/blob/master/README.md)

Use the following command to clone the Jenkins image:
```
docker pull jenkins/jenkins:lts
```

2\. Create a running container from the Jenkins image using the following command:

```
docker run -it --name jenkins -p 8080:8080 --mount type=volume,source=jenkins-data,target=/var/jenkins_home jenkins/jenkins:lts
```