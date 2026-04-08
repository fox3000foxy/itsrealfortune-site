declare module 'rollup-plugin-visualizer' {
  import { Plugin } from 'rollup';
  export function visualizer(options?: Record<string, unknown>): Plugin;
}