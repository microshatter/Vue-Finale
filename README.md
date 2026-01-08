# Vue Finale

A modern Vue.js 3 application featuring authentication, admin dashboard, and internationalization support.

## Features

- **Authentication System**: Login and registration pages with token-based authentication
- **Admin Panel**: Dashboard, user management, and settings pages
- **Routing**: Vue Router with route guards for protected pages
- **Internationalization**: Support for English (en-US) and Chinese (zh-CN) languages using Vue i18n
- **UI Components**: Element Plus for consistent UI elements
- **Styling**: Tailwind CSS for responsive design
- **404 Page**: Custom not-found page for invalid routes

## Technology Stack

- **Frontend Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **UI Library**: Element Plus
- **Styling**: Tailwind CSS
- **Internationalization**: Vue i18n

## Project Structure

```
vue-finale/
├── index.html                 # Main HTML file
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite configuration
├── public/                    # Static assets
├── src/
│   ├── App.vue                # Root component
│   ├── main.js                # Application entry point
│   ├── router.js              # Vue Router configuration
│   ├── style.css              # Global styles
│   ├── assets/                # Dynamic assets
│   ├── components/            # Vue components
│   │   ├── Home.vue           # Home page component
│   │   ├── login.vue          # Login page component
│   │   ├── Register.vue       # Registration page component
│   │   ├── Props.vue          # Props demonstration component
│   │   ├── 404.vue            # 404 not found component
│   │   └── admin/             # Admin panel components
│   │       ├── Base.vue       # Admin base layout
│   │       ├── Dashboard.vue  # Admin dashboard
│   │       ├── Users.vue      # User management
│   │       └── Settings.vue   # Settings page
│   └── langs/                 # Internationalization files
│       ├── en-US.json         # English translations
│       └── zh-CN.json         # Chinese translations
└── README.md                  # This file
```

## Setup and Development

### Prerequisites

- Node.js (version 24 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/microshatter/vue-finale.git
cd vue-finale
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) with the [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension for the best development experience.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the terms specified in the LICENSE file.
