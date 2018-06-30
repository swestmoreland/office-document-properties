<h3 align="center">office-document-properties</h3>

<p align="center">Read document properties from Microsoft Office Open XML documents.</p>

<p align="center">
  <a href="https://badge.fury.io/js/office-document-properties">
    <img src="https://badge.fury.io/js/office-document-properties.svg" alt="npm version badge">
  </a>
</p>

## Introduction

Use this node module to read document properties and metadata from Microsoft Office Open XML documents (docx, docm, pptx, pptm, xlsx, xlsm).

## Installation

To install via npm:

```sh
npm install office-document-properties --save
```

## Usage

### Import

```js
var getDocumentProperties = require('office-document-properties');
```

### Read Document Properties from File

```js
getDocumentProperties.fromFilePath(filePath, function(err, data) {
  if (err) throw err;
  console.log(data);
  /*
  {
    application: 'Microsoft Macintosh Word',
    applicationVersion: '15.0000',
    characters: 20,
    comments: 'This is an example document for testing the retrieval of document properties.',
    company: 'Acme',
    created: '2017-09-06T17:32:00Z',
    createdBy: 'Microsoft Office User',
    keywords: 'Example Sample Test Properties',
    manager: 'John Doe',
    modified: '2017-10-13T19:26:00Z',
    modifiedBy: 'Microsoft Office User',
    pages: 1,
    paragraphs: 1,
    revision: 5,
    subject: 'Example',
    template: 'Normal.dotm',
    title: 'Test Word Document',
    totalTime: 8,
    words: 5
  }
  */
})
```

### Read Document Properties from Buffer

```js
getDocumentProperties.fromBuffer(buffer, function(err, data) {
  if (err) throw err;
  console.log(data);
  /*
  {
    application: 'Microsoft Macintosh PowerPoint',
    applicationVersion: '15.0027',
    comments: 'This is an example document for testing the retrieval of document properties.',
    company: 'Acme',
    created: '2017-10-13T15:54:58Z',
    createdBy: 'Microsoft Office User',
    keywords: 'Example Sample Test Properties',
    manager: 'Jane Doe',
    modified: '2017-10-13T19:27:15Z',
    modifiedBy: 'Microsoft Office User',
    notes: 0,
    paragraphs: 2,
    revision: 3,
    slides: 1,
    subject: 'Example',
    title: 'Test PowerPoint Document',
    totalTime: 2,
    words: 8
  }
  */
})
```
