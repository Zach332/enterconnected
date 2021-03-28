export function formatUserList( userList ) {
    if(userList.length == 1) {
        return userList[0];
    }
    if(userList.length == 2) {
        return userList[0] + " and " + userList[1];
    }

    var returnString = ""
    for(var i = 0; i < userList.length; i++) {
        if(i < userList.length - 1) {
            returnString += userList[i] + ", "
        } else {
            returnString += " and " + userList[i];
        }
    }
    return returnString;
}