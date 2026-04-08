declare module 'vite-plugin-compression' {
  import { Plugin } from 'vite';
  export default function compression(options?: Record<string, unknown>): Plugin;
}