import { defineConfig } from 'vite';

const config = {
    server: {
        base: '/',
    },
    build: {
        base: '/arta/',
    },
};

export default ({ mode }) => {
    if (mode === 'development') {
        return defineConfig(config);
    } else {
        return defineConfig({
            ...config,
            ...{
                server: {
                    ...config.server,
                    base: '/arta/',
                },
            },
        });
    }
};