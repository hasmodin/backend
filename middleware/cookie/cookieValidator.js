
async function  cookieValidator(cookies) {
    try {
        await externallyValidateCookie(cookies.testCookies);

    }catch(err) {
        throw new Error("Invalid cookies");
    }
}