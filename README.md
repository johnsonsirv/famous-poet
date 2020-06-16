<h1 align="center">Single Page App - Local Restaurant</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/johnsonsirv/local-restaurant-page#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/johnsonsirv/local-restaurant-page/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/johnsonsirv/local-restaurant-page/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/johnsonsirv/local-restaurant-page" />
  </a>
  <a href="https://twitter.com/vokeugo" target="_blank">
    <img alt="Twitter: vokeugo" src="https://img.shields.io/twitter/follow/vokeugo.svg?style=social" />
  </a>
  <a href="https://twitter.com/vokeugo" target="_blank">
    <img alt="netlify" src="https://api.netlify.com/api/v1/badges/c9424649-60c1-4860-aeb2-a1dfede32144/deploy-status" />
  </a>

</p>

<br>

This project uses Webpack to build a Singel Page Application. The restaurant app is for a popular local restaurant called [Ntachi-Osa](https://ntachi-osa.netlify.com/) - a local name meaning eat enough, prevent ulcer disease.

It leverages on ES6 modules to dynamically inject content for each page. [See Live URL](https://ntachi-osa.netlify.com/)

It persists food menu items using an XML file data store. This minimal data storage is connected to the app using webpack `xml-loader`, and allows for the database part of the application to scale independently.

![](https://github.com/johnsonsirv/local-restaurant-page/blob/master/docs/ntachi-osa-1.png)

### Built with:

- Javascript
- HTML/CSS
- Webpack 4
- XML
- CD - Netlify

### Installation

> Clone the repository to your local machine

```sh
$ git clone https://github.com/johnsonsirv/local-restaurant-page.git
```

> in your terminal

```sh
$ cd local-restaurant-page

$ npm install

$ npm run build
```

### Usage

> Open ./dist/index.html using your favourite browser

### Contributor(s)

[Victor Okeugo](https://angel.co/u/victorokeugo/)

- Github: [@johnsonsirv](https://github.com/johnsonsirv)
- Twitter: [@vokeugo](https://twitter.com/@vokeugo/)
- Email: [okeugo.victor.c@gmail.com]()

### Contributing

1. Fork it (https://github.com/johnsonsirv/local-restaurant-page/fork)
2. Create your feature branch (git checkout -b feature/[choose-a-name])
3. Commit your changes (git commit -m 'What this commit will fix/add')
4. Push to the branch (git push origin feature/[chosen name])
5. Create a new Pull Request
   > You can also create [issues](https://github.com/johnsonsirv/local-restaurant-page/issues)
