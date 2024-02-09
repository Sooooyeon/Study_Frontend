interface Arr<T> {
  forEach(callback:(item: T)=>void): void;
}

const aArr: Arr<number> = [1,2,3];
aArr.forEach((item)=>{
  console.log(item);
  item.toFixed(1);
})
aArr.forEach((item)=>{
  console.log(item);
  return '3';
})

const bArr: Arr<string> = ['1','2','3'];
bArr.forEach((item)=>{
  console.log(item);
  item.charAt(3);
})
bArr.forEach((item)=>{
  console.log(item);
  return '3';
})

const cArr: Arr<string|number> = ['1','2','3'];
cArr.forEach((item)=>{
  console.log(item);
  item.charAt(3);
})
cArr.forEach((item)=>{
  console.log(item);
  return '3';
})