// src/shims-vue.d.ts 或 src/vite-env.d.ts

declare module '*.css' {
    const content: string;
    export default content;
}

declare module 'ant-design-vue/dist/reset.css' {
    const content: string;
    export default content;
}