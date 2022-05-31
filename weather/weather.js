var weatherApp = angular.module('weatherApp',[]);

weatherApp.controller('WeatherCtrl', function ($scope, $http){
    $http.get("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a7b32ded18757f25ec732e4099a02726&units=metric")
        .success(function (data){
            if (data){
                console.log(data)
                $scope.current = data.main.temp;
                $scope.temp_min = data.main.temp_min;
                $scope.temp_max = data.main.temp_max;
                $scope.wind_speed = data.wind.speed;
                $scope.clouds = data.clouds ? data.clouds.all : undefined;

                // lấy ảnh thời tiết
                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if ($scope.clouds < 20){

                    $scope.img_url = baseUrl + 'sunny.png';

                } else if ($scope.clouds < 90){

                    $scope.img_url = baseUrl + 'partly_cloudly.png';

                }else {

                    $scope.img_url = baseUrl + 'cloudy.png';
                }
            }
        })
        .error(function (data,status){
            console.log(data);
        });
})