# Vanity BTC

NodeJS based tool to generate vanity bitcoin addresses

# Features!

  - Generate multiple addresses
  - Supports Multi-core processors
  - log to file
  - checksum based vanity address

### Installation
```sh
$ npm install -g vanity-btc
$ vanitybtc -i cafe
```
### Examples

Generate bitcoin address:
```sh
$ vanitybtc
```

generate 10 bitcoin addresses:
```sh
$ vanitybtc -n 10
```

generate 10 bitcoin addresses with Cafe as starting characters:
```sh
$ vanitybtc -n 10 -i Cafe
```
log to file
```sh
$ vanitybtc -n 10 -l
```
help me
```sh
$ vanitybtc -h
```

License
----

MIT

