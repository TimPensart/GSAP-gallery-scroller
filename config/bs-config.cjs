module.exports = {
    ui: {
        port: 3000,
        weinre: {
            port: 8080,
        },
    },
    files: [
        "dist/styles/*.css",
        "dist/scripts/*.js",
    ],
    port: 3000,
    ghostMode: false,
    open: false,
    browser: ["google chrome"],
    notify: false,
    proxy: "http://localhost:3000",
    host: "localhost",
};
