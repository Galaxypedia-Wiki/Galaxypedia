FROM mcr.microsoft.com/devcontainers/javascript-node:22-bookworm
LABEL repository="github.com/Galaxypedia-Wiki/Galaxypedia"
LABEL maintainer="cswimr <seaswimmerthefsh@gmail.com>"

ARG USER=node
ARG DEBIAN_FRONTEND=noninteractive
# RUN usermod -s /usr/bin/zsh ${USER}

# VARIANT can be either 'hugo' for the standard version or 'hugo_extended' for the extended version.
ARG VARIANT=hugo_extended
# VERSION can be either 'latest' or a specific version number
ARG VERSION=0.139.0

# Download Hugo
RUN case ${VERSION} in \
    latest) \
    export VERSION=$(curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest | grep "tag_name" | awk '{print substr($2, 3, length($2)-4)}') ;;\
    esac && \
    echo ${VERSION} && \
    case $(uname -m) in \
    aarch64) \
    export ARCH=ARM64 ;; \
    *) \
    export ARCH=64bit ;; \
    esac && \
    echo ${ARCH} && \
    curl -Lo ${VERSION}.tar.gz https://github.com/gohugoio/hugo/releases/download/v${VERSION}/${VARIANT}_${VERSION}_Linux-${ARCH}.tar.gz && \
    tar xf ${VERSION}.tar.gz && \
    mv hugo /usr/bin/hugo

# Hugo dev server port
EXPOSE 1313

RUN corepack enable

USER ${USER}
ARG HOME=/home/${USER}
WORKDIR ${HOME}

ARG OHMYZSH_HOME=${HOME}/.oh-my-zsh

RUN <<EOT
    hugo completion zsh > ${OHMYZSH_HOME}/plugins/git/_hugo
EOT
