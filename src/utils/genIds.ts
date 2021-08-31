export default function* idGen(){
  var index = 1;
  while(index < 100000)
    yield index++;
}
