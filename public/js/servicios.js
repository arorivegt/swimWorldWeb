angular.module('swim.httpServices',['ngCookies'])

.factory('Servicios', function($http, $q,$cookies) {
  return {
    /**atletas*/
    atletas:function(){
      var deferred=$q.defer();
      $http({
       url: '/atletas/',
       method: 'GET',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
     }).success(function (response) {
          deferred.resolve(response);
      }).error( function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    },
    crearAtletas:function(fisrtName,lastName,dateBirthday,idGender,idTeam){
      var deferred=$q.defer();
      $http({
         url: '/atletas/create',
         method: 'POST',
          headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+$cookies.get('token')
          },
         data: {
           nombre     : fisrtName,
           apellido   : lastName,
           nacimiento : dateBirthday,
           genero     : idGender,
           equipo     : idTeam
         }
       }).success(function (response) {
        console.log(JSON.stringify(response));
        deferred.resolve(response);
      }).error( function (response) {
        console.log(JSON.stringify(response));
        deferred.resolve(response);
      });
      return deferred.promise;
    },
    editarAtletas:function(idAtleta,fisrtName,lastName,dateBirthday,idGender,idTeam){
      var deferred=$q.defer();
      $http({
       url: '/atletas/'+idAtleta+'/save',
       method: 'POST',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        },
        data: {
           nombre    : fisrtName,
           apellido  : lastName,
           nacimiento: dateBirthday,
           genero    : idGender,
           equipo    : idTeam
         }
     }).success(function (response) {
        deferred.resolve(response);
      }).error( function (response) {
        deferred.resolve(error);
      });
      return deferred.promise;
    },
    eliminarAtleta:function(){
      var deferred=$q.defer();
      $http({
         url: '/atletas/'+id,
         method: 'DELETE',
          headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+$cookies.get('token')
          }
       }).success(function (response) {
          deferred.resolve(response);
      }).error( function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    },
    /**eventos*/
    evento:function(idEvent){
      var deferred=$q.defer();
      $http({
       url: '/eventos/'+idEvent,
       method: 'GET',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
      }).success(function (response) {
          deferred.resolve(response);
      }).error( function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    },
    eventos:function(){
      var deferred=$q.defer();
      $http({
       url: '/eventos/',
       method: 'GET',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
      }).success(function (response) {
          deferred.resolve(response);
      }).error( function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    },
    atletasEvento:function(idEvent){
      var deferred=$q.defer();
      $http({
       url: '/eventos/atletas/'+idEvent,
       method: 'GET',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
     }).success(function (response) {
          deferred.resolve(response);
      }).error( function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    },
    nombreEquipo:function(id){
      var deferred=$q.defer();
       $http({
         url: '/equipos/'+id,
         method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+$cookies.get('token')
          }
       }).success(function(response){
          deferred.resolve(response);
        }
      ).error(function(response){
          deferred.resolve(response);
      });
      return deferred.promise;
    },
    /***tipo de evento***/
    tipoEventos:function(){
      var deferred=$q.defer();
      $http({
       url: '/tipo',
       method: 'GET',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
      }).success(function(response){
          deferred.resolve(response);
        }
      ).error(function(response){
          deferred.resolve(response);
      });
      return deferred.promise;

    },
    eliminarTipoEvento:function(idTipoEvento){
      var deferred=$q.defer();
     $http({
       url: '/tipo/'+idTipoEvento,
       method: 'DELETE',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
     }).success(function(response){
          deferred.resolve(response);
        }
      ).error(function(response){
          deferred.resolve(response);
      });
      return deferred.promise;

    },
    tipoEvento:function(idTipoEvento){

      var deferred=$q.defer();
      $http({
         url: '/tipo/'+idTipoEvento,
         method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+$cookies.get('token')
          }
       }).success(function(response){
          deferred.resolve(response);
        }
      ).error(function(response){
          deferred.resolve(response);
      });
      return deferred.promise;

    },
    eliminarEquipo:function(id){
     var deferred=$q.defer();   
     $http({
       url: '/equipos/'+id,
       method: 'DELETE',
        headers : { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+$cookies.get('token')
        }
     }).success(function(response){
            deferred.resolve(response);
          }
        ).error(function(response){
            deferred.resolve(response);
        });
        return deferred.promise;
     },
     /**************equipos*****************/
    equipos:function(){
     var deferred=$q.defer();   
       $http({
         url: '/equipos',
         method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+$cookies.get('token')
          }
       }).success(function (response) {
          deferred.resolve(response);
       }).error( function (response) {
          deferred.resolve(response);
       }); 
      return deferred.promise;
    }
  }
   
});
