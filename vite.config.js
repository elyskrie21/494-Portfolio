/** @type {import('vite').UserConfig} */
import { resolve } from 'path'
import { Result } from 'postcss';
export default {
  //absolute path
  base: '/494-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        essay: resolve(__dirname, 'pages/essay.html'),
        works: resolve(__dirname, 'pages/works.html'),
        seniordesign: resolve(__dirname, 'pages/seniordesign.html'),
        objectives: resolve(__dirname, 'pages/objectives.html'),
        resume: resolve(__dirname, 'pages/resume.html')
      },
    },
  }
};
