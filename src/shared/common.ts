export class KeyValuePair {
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  key: string;
  value: string;
}

export class Convertor {
  static toMultiDimensionalArray(items: Array<KeyValuePair>): Array<Array<String>> {
    if (!items) {
      throw new Error('toMultiDimensionalArray: Invalid parameter');
    }

    var result = new Array();
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      result.push(new Array(item.key, item.value));
    }
    return result;
  }
}
