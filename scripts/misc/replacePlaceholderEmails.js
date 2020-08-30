let placeholderEmails = [
    'mscott@dminfinity.net',
    'bigtuna@dminfinity.net',
    'pampampam@dminifity.net',
    'chumbo@dminfitinty.net',
    'dwallace@dm.com',
    'idiotsandwich@ramsay.net',
    'kitchen@nightmares.net',
    'percygrainger@gmail.com',
    'sammy@amysbaking.co',
    'fallguys@ragequit.com',
    'charity@druid.net',
    'ashe@overwatch.com',
    'moira@overwatch.com',
    'mei@overwatch.com',
    'uselet@javascript.com',
    'toby@toby.com'
];

function ReplacePlaceholderEmails(){
    let emailPlaceholderEls = document.getElementsByClassName('replace-placeholder-email');

    for (let element of emailPlaceholderEls){
        element.placeholder = placeholderEmails.random();
    }
}

export {ReplacePlaceholderEmails};