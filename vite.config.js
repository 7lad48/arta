import { defineConfig } from 'vite';

export default ({mode}) => {
    if(mode === 'development'){
        return defineConfig({
            base: '/'
        })
    } else {
        return defineConfig({
            base: '/arta/'
        })
    }
}