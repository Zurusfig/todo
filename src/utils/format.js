export function formatDateToDDMMYY(dateString) {
  if (!dateString || dateString.trim() === '') {
    return '';
  }
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year.slice(2)}`;
}

export function passDue(dateString){
    if (!dateString || dateString.trim() === '') {
        return false;
    }
    
    const today = new Date();
    
    let pass = false
    const [taskYear, taskMonth, taskDay] = dateString.split("-");
    const tdYear = today.getFullYear();
    const tdMonth = String(today.getMonth() + 1).padStart(2, '0');
    const tdDay = String(today.getDate()).padStart(2, '0');

    if(tdYear > taskYear){
        pass = true;
    }else if (tdYear == taskYear && tdMonth > taskMonth){
        pass = true;
    }else if (tdYear == taskYear && tdMonth == taskMonth && tdDay > taskDay){
        pass = true;
    }

    return pass;
}

export function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}