module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        },
        "project": "./tsconfig.eslint.json"
    },
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": ["@typescript-eslint"],
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks"
    ],
    "ignorePatterns": ["node_modules/", "build/", "dist/", "e2e/"]
}
