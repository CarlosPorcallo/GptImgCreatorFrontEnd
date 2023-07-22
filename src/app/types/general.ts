// general purpose
export type TEvent = {
    target: {
        name: string,
        value: string
    }
};

// ajax response
export interface IAjaxResponse {
    status: number,
    data: object | any,
    message?: string   
};

// ajax response
export interface IAjaxPromptRequest {
    message: string   
};