import { Plugin } from 'vite';
export interface Options {
    depMap: DepMap;
}

export type DepMap = Record<string, string>;

export function remoteImport(options: Options | DepMap): Plugin {
    let normalizeOptions: Options;
    if (!options.depMap) {
        normalizeOptions = {
            depMap: options as DepMap,
        };
    } else {
        normalizeOptions = options as Options;
    }
    const depMap = normalizeOptions.depMap || {};
    return {
        name: 'remoteImport',
        config() {
            return {
                build: {
                    rollupOptions: {
                        external: Object.values(depMap),
                    },
                },
                optimizeDeps: {
                    exclude: Object.keys(depMap),
                },
            };
        },
        resolveId(id) {
            return depMap[id];
        },
        enforce: 'pre',
    };
}
