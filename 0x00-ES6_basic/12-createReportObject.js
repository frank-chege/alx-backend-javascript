export default function createReportObject(employeesList) {
    let obj = {
        allEmployees: employeesList,
        getNumberOfDepartments: function(){
            return Object.keys(this.allEmployees).length;
        }
    }
    return obj;
}