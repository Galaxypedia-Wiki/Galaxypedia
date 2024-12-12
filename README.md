# Galaxypedia-Hugo
This is the repository for the Galaxypedia rewrite in Hugo. The aim is to recreate the Galaxypedia using the Hugo static site generator while retaining familiar functionality as on the MediaWiki site.

## Morale
The Galaxypedia in its current uses the MediaWiki software as its basis. While very powerful, it's very expensive to run. It uses PHP and MySQL, which are very resource-intensive. MediaWiki is as heavy as it is powerful.

MediaWiki is also very complex. It relies heavily on templates, extensions, themes, and other customizations to make things run smoothly. This results in a huge codebase that is difficult to maintain.

Not only that, but MediaWiki is also very hard to update. It's not as simple as updating the software. You have to update the extensions, the themes, the database, the media, and everything else. Upgrading is essentially copying over old files to a new installation, which is really time consuming.

That's why we're looking into moving to a Hugo based Galaxypedia. This version is so light that it can be run using GitHub pages. It doesn't require comet or me to pay for a server. It doesn't need accounts, discussions, or anything extra and unnecessary. Every aspect of the site is made by us from ground up, so we can make it as simple or as complex as we want. As heavy or as lightweight as we want. We hope that a Hugo based Galaxypedia will be easier to maintain, update, and use. And will be made by us, for us.

## Will this replace the Galaxypedia?
It's complicated. The Hugo version of the Galaxypedia will be a separate entity from the MediaWiki version. The MediaWiki version will still be up and running for as long as the hugo version is in development. Once the Hugo version is ready, has most and/or all of the content and features of the MediaWiki version we will consider replacing the MediaWiki version with the Hugo version.

For now, it's up in the air.

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
  - We use technologies like Node.JS, Tailwind CSS, Hugo, Pagefind, and more to make the Galaxypedia as accessible as possible.
  - Tailwind in specific allows us to make the Galaxypedia look good without having to write a lot of CSS. This makes the Galaxypedia more maintainable and easier to work with. It also has built in support for responsive design, which means that the Galaxypedia will look good on any device. And unlike MediaWiki, we don't have to make an entirely different skin for mobile.
  - Theming and custom color schemes are planned for the future. You can fine tune the Hugo Galaxypedia to look exactly how you want it to look.
- Open Source and Transparent
  - Instead of using APIs, the Hugo Galaxypedia is open source. This means that anyone can contribute to any aspect of the site, from content to platform. This ensures that the Galaxypedia is made by us, for us.
  - Being open source also means that the Galaxypedia is more portable. Anyone can easily download the site and archive it, host it themselves, or view the history.
  - Being open source also means that the Galaxypedia is more secure. Anyone can view the code and see if there are any security vulnerabilities. This ensures that the Galaxypedia is safe for everyone to use.
- Lightweight and Fast
  - Currently, the production version of the Hugo Galaxypedia is hosted on GitHub Pages. This means that the Galaxypedia is free to host, and doesn't require a server. This saves smallketchup82 money, which was one of the main concerns with the MediaWiki version. Server costs are not cheap!
  - The site being static means that even if the site goes down at any point in time, people can view the Galaxypedia by running `hugo server` if they have the source code downloaded.
  - Unlike MediaWiki which is built on PHP, uses extensions and themes, and requires a MySQL database, the Hugo Galaxypedia has no such concepts. The Hugo Galaxypedia is much faster since your browser doesn't have to load PHP, the server doesn't have to do database queries, and the site doesn't have to load a bunch of unnecessary extensions and themes.
- Secure and Independent
  - The Hugo Galaxypedia is built by us for the community. We don't rely on third parties, we don't have to deal with MediaWiki's security vulnerabilities and complexities. Updates are done on a rolling basis, and are much easier to do as a result. This means that there will be no downtime during updates.
  - As a breath of fresh air, the Hugo Galaxypedia does not require accounts. This means that there is no need for a database, and no need for a server. This means that the Galaxypedia is more secure, and more private. No need to worry about your data being leaked or stolen. And no need for smallketchup82 to concern himself with user data, management, and GDPR.
  - Since there are no accounts, there is no need for moderation. This means that staff can focus on making the Galaxypedia better, rather than dealing with trolls, vandals, and spammers.
  - Also we finally don't have to deal with bot accounts spamming the site with nonsense. This is a huge relief.

## Contributing
See the [wiki](https://github.com/Galaxypedia-Wiki/Galaxypedia-Hugo/wiki)
### To the content
Contributing to the content is easy. If you want to make a change to an existing page, you can easily use the GitHub web editor, make your changes, and let it do the heavy work of forking and creating a pull request.

If you want to do anything more than that, and most likely you will, you'll need to set up a local development environment. This is easy to do, but in true Node.JS fashion, you'll need to install a bunch of stuff.

### To the platform
If you want to contribute to the platform, which means the site itself (styling, functionality, etc.), 

## Licensing
Everything in the `content` directory is protected by the [CC-BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/).

All other directories and files are [MIT Licensed](https://en.wikipedia.org/wiki/MIT_License).
