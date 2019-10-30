const json = JSON.parse(prompt('json to reorder: '));
const orderOfFields = prompt('order of fields: ');
let newJson = JSON.parse('[]');
let i = 0;
json.forEach(el => {
  newJson[i++] = reorder(orderOfFields, el);
});
console.log(JSON.stringify(newJson));

function reorder(order, obj) { 
  typeof order === 'string' && (order = order.split (/\s* \s*/));
  return order.reduce (function (result, prop) {
    if (typeof obj[prop] === "boolean") { // comment this "if" to not transform booleans to binary
      result[prop] = obj[prop] ? 1 : 0;
      return result;
    }
    result[prop] = obj[prop];
    return result;   
  }, {});
}