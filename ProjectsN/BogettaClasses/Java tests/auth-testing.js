var binNumber = []
var CSU
function UserCreate(Iname, Iauth) {
    var IDNumber = binNumber.length;
    var tempObject
    eval('var UserIDN' + IDNumber + '= { name:\'' + Iname + '\', auth: ' + Iauth + ', self: \'UserIDN'+ IDNumber + '\' };' );
    eval('var tempObject = UserIDN' + IDNumber);
    binNumber.push(tempObject);

    function GetCurrentSessionUser(number) {
        CSU = binNumber[number];
    }

    GetCurrentSessionUser(IDNumber)
};


function AuthTool(CurrentUser) {
    let authTool = CurrentUser.auth > 9 ? 'Access Granted... Welcome ' + CurrentUser.name : 'Access Denied';
    console.log(authTool)
}
UserCreate('Donner', 10);
AuthTool(CSU);
console.log(CSU)