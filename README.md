# office-document-properties

Parse document properties for Microsoft Office Open XML documents (docx, pptx, xlsx).

## Installation

```sh
npm install office-document-properties
```

## Usage

### Import

```js
var msoprops = require('office-document-properties');
```

### From File

```js
msoprops.fromFilePath(filePath, function(err, data){
  if (err) throw err;
  console.log(data);
});
```

### From Buffer

```js
msoprops.fromBuffer(buffer, function(err, data){
  if (err) throw err;
  console.log(data);
});
```
