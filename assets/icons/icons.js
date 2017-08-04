const faviconsContext = require.context(
    '!!file?name=[name].[ext]!.',
    true,
    /\.(svg|png|ico|xml|json)$/
);

faviconsContext.keys().forEach(faviconsContext);
