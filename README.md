# Redactor draggable modal

Plugin for Imperavi Redactor WYSIWYG. Allow users drag modal windows

### Getting started

    <!DOCTYPE html>
    <html>
        <head>
            <title>Redactor</title>
            <meta charset="utf-8">
    
            <!-- redactor css -->
            <link rel="stylesheet" href="/your-folder/redactor.css" />
        </head>
        <body>
            <!-- element -->
            <textarea id="content">...</textarea>
    
            <!-- redactor js -->
            <script src="/your-folder/redactor.js"></script>
    
            <!-- plugin js -->
            <script src="/your-folder/plugins/draggablemodal.min.js"></script>
    
            <!-- call -->
            <script>
            $R('#content', { plugins: ['draggablemodal'] });
            </script>
        </body>
    </html>

### License

MIT license