class ApiError extends Error{

    constructor(
        statusCode,
        message="Something ",
        error=[]
    ){super(message)
    this.statusCode=statusCode
    this.data=null
    this.message=messagethis.success=false;
    this.errors=errors

    if(statck){
        this.stack=statck
    } else{
        Error.captureStackTrace(this,this.constructor)
    }
}

}

export {ApiError}