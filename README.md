# office-document-properties

Parse document properties for Microsoft Office Open XML documents (docx, pptx, xlsx) with node.

## Installation

```
npm install office-document-properties
```

### Usage

```javascript
var msoprops = require('office-document-properties');

msoprops.fromFile(filePath, function(err, data){
  if (err) throw err;
  console.log(data);
});
```
