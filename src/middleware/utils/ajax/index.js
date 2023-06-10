import axios from 'axios';

// ajax object
export class ajax {
    // get request
    get = (url, callback_success, callback_error, request_data = []) => {
        axios.get(url, request_data).then((response_data) => {
            callback_success(response_data);
        }).catch(() => {
            callback_error();
        });
    }

    // post request
    post = (url, callback_success, callback_error, request_data = []) => {
        axios.post(url, request_data).then((response_data) => {
            callback_success(response_data.data);
        }).catch(() => {
            callback_error();
        });
    }

    // put request
    put = (url, callback_success, callback_error, request_data = []) => {
        axios.put(url, request_data).then((response_data) => {
            callback_success(response_data);
        }).catch(() => {
            callback_error();
        });
    }

    // delete request
    delete = (url, callback_success, callback_error, request_data = []) => {
        axios.delete(url, request_data).then((response_data) => {
            callback_success(response_data);
        }).catch(() => {
            callback_error();
        });
    }
};