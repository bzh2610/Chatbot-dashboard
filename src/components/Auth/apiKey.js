//Request an ApiKey to make requests with the back end
//This function receives a callback parameter to which the result will be sent to

function fetchApiKey(callback) {

    var raw = "";
    var status = 200;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/v1/apikey", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                callback(result.data.key)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                callback(null, error)
            }
        )
}

export default fetchApiKey;