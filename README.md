# MyWebsite

Welcome to the **MyWebsite** repository! This project is an experimental site developed while learning the [Eleventy](https://www.11ty.dev/) static site generator.

Eleventy (11ty) is a simpler static site generator that enables you to transform HTML templates, Markdown, and data files into pre-rendered HTML. This project aims to explore Eleventy's features and demonstrate how to build and deploy a static site using Node.js.

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Install PM2](#3-install-pm2)
  - [4. Running the Website](#4-running-the-website)
  - [5. Enabling PM2 on System Boot](#5-enabling-pm2-on-system-boot)
- [Additional Information](#additional-information)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Requirements

- **Node.js** (version 18 or higher)
- **NPM** 
- **PM2** (Process Manager for Node.js applications)

## Getting Started

To set up this project on your local machine, follow the instructions below:

### 1. Clone the Repository

```bash
git clone https://github.com/jaimemarcosjr/MyWebsite.git
cd MyWebsite
```

### 2. Install Dependencies

Before running the site, install the necessary dependencies using npm:

```bash
npm install -D @11ty/eleventy
npm install -D @11ty/eleventy-img
```

### 3. Install PM2

Install PM2 globally to manage the Node.js application:

```bash
npm install pm2 -g
```

### 4. Running the Website

To start the site, use the following command:

```bash
pm2 start "npm start"
```

This will run the site using PM2, a process manager that ensures the website runs continuously in the background.

### 5. Enabling PM2 on System Boot

To make sure PM2 starts automatically when your system reboots, run these commands:

```bash
pm2 startup
pm2 save
```

## Additional Information

- **Eleventy**: A static site generator for building fast, modern websites. Learn more about [Eleventy](https://www.11ty.dev/).
- **PM2**: Advanced Node.js process management tool. Read more about [PM2](https://pm2.keymetrics.io/).

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or suggestions.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the [Eleventy](https://www.11ty.dev/) community for providing excellent documentation and support.
- Inspired by various open-source projects and tutorials on static site generation.