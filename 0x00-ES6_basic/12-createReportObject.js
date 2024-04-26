export default function createReportObject(employeesList) {
    let obj = {
        allEmployees: employeesList,
        getNumberOfDepartments: function(){
            return Object.keys(obj).length;
        }
    }
    return obj;
}