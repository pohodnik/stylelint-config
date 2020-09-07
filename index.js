module.exports = {
    "extends": "stylelint-config-airbnb",
    "plugins": [
        "stylelint-scss",
        "stylelint-order"
    ],
    "rules": {
        "string-quotes": "single",
        "at-rule-no-unknown": [ true, {
            "ignoreAtRules": [
                "extends",
                "ignores"
            ]
        }],
        "indentation": 4,
        "number-leading-zero": null,
        "unit-whitelist": ["em", "rem", "px", "%"]
    }
}
