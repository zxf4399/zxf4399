module.exports = ({ types: t }) => {
  return {
    name: "babel-plugin-remove-console",
    visitor: {
      CallExpression(path) {
        if (t.isMemberExpression(path.get("callee"))) {
          if (
            t.isIdentifier(path.get("callee.object", { name: "console" })) &&
            t.isIdentifier(path.get("callee.property", { name: "log" }))
          ) {
            path.remove()
          }
        }
      },
    },
  }
}
