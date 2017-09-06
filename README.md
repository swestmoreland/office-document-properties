# office-document-properties [![npm version](https://badge.fury.io/js/office-document-properties.svg)](https://badge.fury.io/js/office-document-properties)

Use this node module to read document properties from Microsoft Office Open XML documents (docx, docm, pptx, pptm, xlsx, xlsm).

## Installation

```sh
npm install office-document-properties
```

## Usage

### Import

```js
var getDocumentProps = require('office-document-properties');
```

### Read Document Properties from File

```js
getDocumentProps.fromFilePath(filePath, function(err, data){
  if (err) throw err;
  console.log(data);
  /*
  {
    application: 'Microsoft Macintosh Word',
    applicationVersion: '15.0000',
    characters: 2870,
    company: 'Acme',
    created: '2017-08-17T20:34:00Z',
    createdBy: 'Steven Westmoreland',
    keywords: 'example',
    modified: '2017-08-17T20:37:00Z',
    modifiedBy: 'Steven Westmoreland',
    pages: 4,
    paragraphs: 32,
    revision: 1,
    subject: 'Summary of Document Properties',
    template: 'MLA Style Paper.dotx',
    title: 'Example Document',
    totalTime: 2,
    words: 588
  }
  */
});
```

### Read Document Properties from Buffer

```js
getDocumentProps.fromBuffer(buffer, function(err, data){
  if (err) throw err;
  console.log(data);
});
```
