var genny = async function (fn, ln) {

    var firstName = fn.charAt(0);
    var lastName = ln.charAt(0);
    var head = "",
        tail = '',
        i = 0;

    /* Id head */
    
    head = head + firstName.toUpperCase() + lastName.toUpperCase()

    for (i; i < 4; i++) {
        tail = tail + Math.floor((Math.random() * 10) + 1)
    }
    return head + tail

}


