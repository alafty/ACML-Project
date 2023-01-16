module.exports = (name: String, course: String, date: String) => {
    const today = new Date();
    return `
    <html>
    <head>
        <style type='text/css'>
            body, html {
                margin: 0;
                padding: 0;
            }
            body {
                color: black;
                display: table;
                font-family: Georgia, serif;
                font-size: 24px;
                text-align: center;
            }
            .container {
                border: 20px solid #293237;
                width: 750px;
                height: 563px;
                display: table-cell;
                vertical-align: middle;
            }
            .logo {
                color: #293237;
            }

            .marquee {
                color: #52adcc;
                font-size: 48px;
                margin: 20px;
            }
            .assignment {
                margin: 20px;
            }
            .person {
                border-bottom: 2px solid #52adcc;
                font-size: 32px;
                font-style: italic;
                margin: 20px auto;
                width: 400px;
            }
            .reason {
                margin: 20px;
            }
            .course{
                color: #52adcc;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                The Learning Tree    
            </div>

            <div class="marquee">
                Certificate of Completion
            </div>

            <div class="assignment">
                This certificate is presented to
            </div>

            <div class="person">
                ${name}
            </div>

            <div class="reason">
                For completing the following course<br/>
            <p class="course">
                ${course} <br/>
            </p>
                on ${date}
            
            </div>
        </div>
    </body>
</html>
    `
}