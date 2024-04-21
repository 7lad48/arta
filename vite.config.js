import { defineConfig } from 'vite';

export default ({mode}) => {
    const baseUrl = mode === 'development' ? '/' : '/arta/'
    return defineConfig({
        base: baseUrl,
    })

}