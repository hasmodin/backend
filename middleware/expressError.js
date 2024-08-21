class err {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
};

class ExpressError extends err {
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }
};
module.exports = ExpressError;