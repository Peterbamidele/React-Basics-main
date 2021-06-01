export const pathString = (route) => {

    let stringEnd = route.pathname.indexOf('/', 1)
    if(stringEnd > 0) {

        return route.pathname.substring(1, stringEnd)
    }else{

        return route.pathname.substring(1)
    }
}