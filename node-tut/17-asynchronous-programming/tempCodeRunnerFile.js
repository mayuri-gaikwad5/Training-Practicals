async function performTask(){
    try{
        const response = await userLogin();
        console.log("Validated User");
        const userAuthStatus=goToHomepage(response)
        console.log(userAuthStatus)
    } catch(error){
        console.log(error)
    }
}

performTask();