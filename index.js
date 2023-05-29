import _ from 'lodash';

export default function solution(content){
  // BEGIN
 const rows = content.trim().split('\r\n').slice(1)
 const data = rows.map((row) => row.split(','))
 console.log(`Count: ${data.length}`)

const ports = _.uniq(data.map((el) => el[12])).slice(0,3)
console.log(`Ports: ${ports}`);

const gender = data.filter(el => el[5] ==="male")
const percent = Math.round(100 * gender.length / data.length)
console.log(`Percantage of genser: sale - ${percent}, female - ${100 - percent}`)

const survived = data.filter(el => Number(el[1]) )
const percentOFSurvived = Math.round(100 * survived.length / data.length)
console.log(`Percantage of survived: ${percentOFSurvived}`)

const names = data.map((el) => el[3]).filter((name) => name.charAt(0) === 'A')
console.log(`Names with A: ${names}`)
  // END
}