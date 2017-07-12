export default dataService;

function dataService($http) {   
    this.getData = function getData() {
    return  $http.get('test01/data.json');        
    }  
}
