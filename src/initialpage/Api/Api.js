export const Api = function (arr, url) {
    alert("called");
    var data = Object.assign({}, arr)
    console.log(data);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Authorization, Origin',
            'token': 'assss',
            "Access-Control-Allow-Methods": ["POST", "GET", "OPTIONS", "DELETE", "PUT"],
            "X-Requested-With": "XMLHttpRequest"
        },
        data: { 'data': JSON.stringify(data) },
        success: function (result) {
            var response = result.response;
            if (response.ResponseCode) {
                alert(response.ResponseMessage);
            } else {
                alert(response.ResponseMessage);
            }

        },
        error: function (result) {
            alert("error");
            console.log(result);
        }
    });

}
