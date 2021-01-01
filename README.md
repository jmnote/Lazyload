MediaWiki Lazyload Extension
============================

An extension to delay loading of images on MediaWiki pages.

## Requirements

Lazyload extension requires MediaWiki 1.25 or higher.

## Installation

To install the extension, place the entire `Lazyload` directory within your
MediaWiki `extensions` directory, then add the following line to your
`LocalSettings.php` file:

```php
wfLoadExtension( 'Lazyload' );
```

## License

[MIT](LICENSE)
