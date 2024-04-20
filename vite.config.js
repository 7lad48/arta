import { defineConfig } from 'vite';
//const baseLink = import.meta.env.MODE === 'development' ? '/' : '/arta/';
//  export default defineConfig({
//      base: baseLink
//  })

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

//
// const config = {
//     server: {
//         base: '/',
//     },
//     build: {
//         base: '/arta/',
//     },
// };
//
// export default ({ mode }) => {
//     if (mode === 'development') {
//         return defineConfig(config);
//     } else {
//         return defineConfig({
//             ...config,
//             ...{
//                 server: {
//                     ...config.server,
//                     base: '/arta/',
//                 },
//             },
//         });
//     }
// };