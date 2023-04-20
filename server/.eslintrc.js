export default {
    "env": {
        "es2021": true,
        "node": true
    },
    "plugins": ["prettier"],
    "extends": ["standard","standard-with-typescript", "plugin:prettier/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",

"no-unused-vars": "off"
    }
}
