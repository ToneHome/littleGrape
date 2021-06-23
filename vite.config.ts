import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import {join} from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  server:{
    port:3005
  },
  resolve:{
    alias:{
      '@':join(__dirname+'/src/')
    }
  }
})
