const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User Logged In....');
        }, 4000)
    })
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating Last Login....');
        }, 2000)
    })
}

async function loginActivities(login, updateAccount) {
    const returnedLogin = await login;
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount)
}

loginActivities(login(), updateAccount())
