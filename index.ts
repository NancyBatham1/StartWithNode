import testJson from './data.json';
import {sub, add} from './math';
import math from './math';

console.log(sub(5,5))
console.log(math.add(5,5))
for(let i=0; i<testJson.length; i++)
{console.log(testJson[i].test)}