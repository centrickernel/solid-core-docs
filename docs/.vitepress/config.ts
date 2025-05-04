import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NPM Packages for Solid JS',
  description: 'A documentation of NPM packages for Solid JS',
  base: '/solid-core-docs/', // Must match the repo name
  appearance: 'dark',
  themeConfig: {
    sidebar: [ // THIS IS THE CHANGE - no path prefix
      {
        text: 'Getting Started',
        items: [
          { 
            text: 'Installation', 
            link: '/guide/installation'
          }
        ]
      },
      {
        text: 'Features',
        items: [
          { 
            text: 'Data Grid',
            link: '/features/data-grid'
          },
          { 
            text: 'Tabs',
            link: '/features/tabs' 
          }
        ]
      }
    ]
  }
})