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
  /*
  {
    application: 'Microsoft Macintosh Word',
    applicationVersion: '15.0000',
    characters: 2870,
    company: 'Acme',
    created: '2017-08-17T20:34:00Z',
    createdBy: 'Steven Westmoreland',
    keywords: 'Example, Template, MLA',
    modified: '2017-08-17T20:37:00Z',
    modifiedBy: 'Microsoft Office User',
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

### From Buffer

```js
msoprops.fromBuffer(buffer, function(err, data){
  if (err) throw err;
  console.log(data);
});
```
