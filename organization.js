const list = require('./Organization_list')

function organization(boss=null) {

  let node = {};
    list.filter(item => item.boss === boss)
                   .forEach(item => node[item.id] = organization(item.id));
    return node;

}

const bolds = ['Bosworth', 'Andra', 'Blanch'];

function logTree(node, lvl=0) {
  if (Object.keys(node).length === 0) {
    // console.log(node.name);
    return;
  }
  for (var i = 0; i < Object.keys(node).length; i++) {

    console.log(`${'    '.repeat(lvl)}${Object.keys(node)[i]}`)
    logTree(node[Object.keys(node)[i]], lvl +1 )
  }

}

logTree(organization())
