# Galaxypedia

[![CodeFactor](https://www.codefactor.io/repository/github/galaxypedia-wiki/galaxypedia/badge)](https://www.codefactor.io/repository/github/galaxypedia-wiki/galaxypedia)

This is the repository for the Galaxypedia rewrite in Hugo. The aim is to recreate the Galaxypedia using the Hugo static site generator while retaining familiar functionality as on the MediaWiki site.

## Morale

Present-day Galaxypedia is built on the MediaWiki software, which is both powerful and expensive to operate. It relies on PHP and MySQL, which are resource-intensive, making MediaWiki as heavy as it is powerful.

MediaWiki is also highly complex, heavily relying on templates, extensions, themes, and other customizations to ensure smooth functionality. This extensive codebase makes it challenging to maintain.

Furthermore, MediaWiki is notoriously difficult to update. Unlike other software updates, MediaWiki requires updates to extensions, themes, the database, media, and more. Upgrading essentially involves copying over old files to a new installation, which is time-consuming.

In light of these challenges, we are exploring the possibility of transitioning to a Hugo-based Galaxypedia. This version is significantly lighter, allowing it to be run using GitHub Pages without the need for a server, Comet, or additional accounts, discussions, or unnecessary features. Every aspect of the site will be developed from scratch, enabling us to tailor it to our desired simplicity or complexity, as heavy or lightweight as we want.

We believe that a Hugo-based Galaxypedia will be easier to maintain, update, and use. Moreover, it will be developed and maintained by us, for us.

## Features

Some features that the Hugo version has over the MediaWiki version are:

- Autofilled ship infobox
  - When loading a page with a ship infobox, the ship infobox will automatically contact the Galaxy Info API (whose Galaxypedia endpoint recently became public) and fill in the infobox with the ship's information.
  - This removes the need for KetchupBot-Updater
- Formatter support
  - The Hugo version of the Galaxypedia supports formatters, with the formatter of choice being prettier. This allows us to format pages in a consistent way, and allows us to vet new changes for formatting issues before they go live.
  - Imgbot integration has been added to the repository which will automatically compress images and open pull requests to update them. Meaning we now have what is essentially an "image formatter".
  - No need for AutoWikiBrowser
- Modern and Responsive
  - The Hugo Galaxypedia is built using modern web technologies. This means that the Galaxypedia is more accessible, more responsive, and more user-friendly.
  - Design philosophy is based on [Linear](https://linear.app)
  - We use technologies like Node.JS, Tailwind CSS, Hugo, Pagefind, and more to make the Galaxypedia as accessible as possible.
  - Tailwind in specific allows us to make the Galaxypedia look good without having to write a lot of CSS. This makes the Galaxypedia more maintainable and easier to work with. It also has built in support for responsive design, which means that the Galaxypedia will look good on any device. And unlike MediaWiki, we don't have to make an entirely different skin for mobile.
  - Theming and custom color schemes are planned for the future. You can fine tune the Hugo Galaxypedia to look exactly how you want it to look.
- Open Source and Transparent
  - Instead of using APIs, the Hugo Galaxypedia is open source. This means that anyone can contribute to any aspect of the site, from content to platform. This ensures that the Galaxypedia is made by us, for us.
  - Being open source also means that the Galaxypedia is more portable. Anyone can easily download the site and archive it, host it themselves, or view the history.
  - Being open source also means that the Galaxypedia is more secure. Anyone can view the code and see if there are any security vulnerabilities. This ensures that the Galaxypedia is safe for everyone to use.
- Lightweight and Fast
  - Currently, the production version of the Hugo Galaxypedia is hosted on Cloudflare Pages. This means that the Galaxypedia is free to host, and doesn't require a server. This saves smallketchup82 money, which was one of the main concerns with the MediaWiki version. Server costs are not cheap!
  - The site being static means that even if the site goes down at any point in time, people can view the Galaxypedia by running `hugo server` if they have the source code downloaded.
  - Unlike MediaWiki which is built on PHP, uses extensions and themes, and requires a MySQL database, the Hugo Galaxypedia has no such concepts. The Hugo Galaxypedia is much faster since your browser doesn't have to load PHP, the server doesn't have to do database queries, and the site doesn't have to load a bunch of unnecessary extensions and themes.
- Secure and Independent
  - The Hugo Galaxypedia is built by us for the community. We don't rely on third parties, we don't have to deal with MediaWiki's security vulnerabilities and complexities. Updates are done on a rolling basis, and are much easier to do as a result. This means that there will be no downtime during updates.
  - As a breath of fresh air, the Hugo Galaxypedia does not require accounts. This means that there is no need for a database, and no need for a server. This means that the Galaxypedia is more secure, and more private. No need to worry about your data being leaked or stolen. And no need for smallketchup82 to concern himself with user data, management, and GDPR.
  - Since there are no accounts, there is no need for moderation. This means that staff can focus on making the Galaxypedia better, rather than dealing with trolls, vandals, and spammers.
  - Also we finally don't have to deal with bot accounts spamming the site with nonsense. This is a huge relief.

## Contributing

See the [wiki](https://github.com/Galaxypedia-Wiki/Galaxypedia-Hugo/wiki)

## Licensing

Everything in the `content` directory is protected by the [CC-BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/).

All other directories and files are [MIT Licensed](https://en.wikipedia.org/wiki/MIT_License).
