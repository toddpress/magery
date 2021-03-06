module.exports = {
    entry: {
        'parsers': ['./parsers.js'],
        'render': ['./render.js'],
        'patch': ['./patch.js'],
        'builtins': ['./builtins.js'],
        'transforms': ['./transforms.js'],
        'utils': ['./utils.js']
    },
    output: {
        path: 'build/test',
        filename: '[name].js',
        // export itself to a global var
        libraryTarget: 'var',
        // name of the global var
        library: '[name]'
    }
};
