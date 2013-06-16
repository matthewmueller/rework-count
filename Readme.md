
# rework-count

  [Rework](https://github.com/visionmedia/rework) plugin to style elements based on the sibling count.

  Based on Lea Verou's sibling count technique: http://lea.verou.me/2011/01/styling-children-based-on-their-number-with-css3/

## Usage

```js
rework(css)
  .use(count())
  .toString();
```

## Example

```css
li:count(1) {
  width: 100%;
}

li:count(2) {
  width: 50%;
}

li:count(3) {
  width: 33.3333%;
}

li:count(1-2) {
  color: blue;
}
```

outputs:

```css
li:first-child:nth-last-child(1) {
  width: 100%;
}

li:first-child:nth-last-child(2),
li:first-child:nth-last-child(2) ~ li {
  width: 50%;
}

li:first-child:nth-last-child(3),
li:first-child:nth-last-child(3) ~ li {
  width: 33.3333%;
}

li:first-child:nth-last-child(1),
li:first-child:nth-last-child(2),
li:first-child:nth-last-child(2) ~ li {
  color: blue;
}
```

## License

(The MIT License)

Copyright (c) 2012 matthew mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
