const depthFirstSearch = (rootNode, vertices, edges) => {
  let stack = [];
  stack.push(rootNode);
  let discovered = [rootNode];

  while (stack.length != 0) {
    let current = stack.pop();
    if (!current.discovered) {
      current.discovered = true;

      findAdjacent(current.name, vertices, edges).forEach((node) => {
        discovered.push(node);
        stack.push(node);
      });
    }
  }
  return discovered;
};

const findAdjacent = (nodeName, vertices, edges) => {
  return edges
    .filter((edge) => {
      return edge.includes(nodeName);
    })
    .map((edge) => {
      return edge.filter((node) => {
        return node != nodeName;
      })[0];
    })
    .map((name) => {
      return findNode(name, vertices);
    })
    .filter((node) => {
      return !node.discovered;
    });
};

const findNode = (nodeName, vertices) => {
  return vertices.find((vertex) => {
    return vertex.name == nodeName;
  });
};
