/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const answerStack = [];
    const recursive = (deep, stack) => {
        if (deep === graph.length - 1) {
            answerStack.push(stack);
        }
        for (let i = 0 ; i < graph[deep].length ; i++) {
            let record = [...stack];
            record.push(graph[deep][i]);
            recursive(graph[deep][i], record);
        }
    }
    recursive(0, [0]);
    return answerStack;
};