
## insert()
The function insert(where,what) is used for insert any element into the html finalize

### Structure
The funcion insert has two parameters 'where' and 'what'. On where you have to put is the element going to be placed and on what you have to write the element.

### Example
```javascript
  insert('#div','<p> Hello World! </p>');
  ```


## Sha1 Encode
All the sha1 encode was created by Chen, Yi-Cyuan so you can see the documentation of this script in his repository(https://github.com/emn178/js-sha1)


## Sha3 Encode
All the sha3 encode was created by Chen, Yi-Cyuan so you can see the documentation of this script in his repository(https://github.com/emn178/js-sha3)


## base64
The function base64 is used for convert any text to base64

### Structure
The function base64 has two functions. You can write base64.encrypt(msg) to encrypt any text to base64 and you also write base64.decrypt(msg) to decrypt any base64

### Example
```javascript
  var a;
  a = base64.encrypt('Hello World!'); // a = SGVsbG8gV29ybGQh
  a = base64.decrypt(a); // a = Hello World!
  ```
