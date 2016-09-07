function convertHTML(str) {
    var entities = {
        '& ': '&amp; ', // & has a space because, replacing all & in str will be a infinite loop
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    for (var test in entities) {
        while (str.indexOf(test) !== -1) {
            str = str.replace(test, entities[test]);
        }
    }
    return str;
}

convertHTML("Hamburgers < Pizza < Tacos");
