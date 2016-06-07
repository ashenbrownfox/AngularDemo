/// <reference path="Script.js" />

app.factory('stringService', function () {
    return {
        processString: function (input) {
            processString:function(input){
                if(!input){
                    return input;
                }
                var output = "";

                for(var i = 0; i < input.length; i++){
                    if(i>0 && input[i] == input[i].toUpperCase()){
                        output = output + input[i];
                    }
                    output = output + input[i];
                }
                return output;
            }
        }
    };
});