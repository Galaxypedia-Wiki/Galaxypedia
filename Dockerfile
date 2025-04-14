# set up base image and set up corepack
FROM hugomods/hugo:node-git-0.139.5 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g corepack@latest
RUN corepack enable

FROM base AS dependencies
COPY pnpm-lock.yaml /src
WORKDIR /src
RUN pnpm fetch --prod
COPY . /src
RUN pnpm install --frozen-lockfile --prod

FROM base AS final
COPY --from=dependencies /src /src
WORKDIR /src
EXPOSE 1313

# build the site once so that we can index it
RUN pnpm build:min
CMD ["hugo", "server", "--minify", "-D"]
