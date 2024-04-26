export default function createEmployeesObject(departmentName, employees) {
   obj ={
     [`${departmentName}`]: [`${employees}`]
   }
   return obj;
}