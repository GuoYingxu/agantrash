export function formartDate(time){
 
  const date = new Date(time)
  return `${date.getFullYear()}-${date.getMonth()>=9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate()>=10 ? date.getDate() : '0' + date.getDate()} ${ date.getHours()>=10? date.getHours() : ('0'+date.getHours())}:${date.getMinutes() >=10?date.getMinutes() : '0'+date.getMinutes()}`
}