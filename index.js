class Formatter {
  //   Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  // Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, "")
  }
  // Write a method static titleize that takes in a string and capitalizes all words in a sentence
  // except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.

  static titleize(str) {
    // create an array of exceptions
    let exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ]
    // initialize empty array
    let result = []
    // remove empty spaces with in the string
    let justWords = str.split(" ")
    // loop through the justWords
    for (let i = 0; i < justWords.length; i++) {
      // capitalize each word that is not
      if (i == 0) {
        result.push(this.capitalize(justWords[i]))
      }
      // do not capitalize exceptions
      else {
        if (exceptions.includes(justWords[i])) {
          result.push(justWords[i])
        } else {
          result.push(this.capitalize(justWords[i]))
        }
      }
    }
    // add spaces between words
    return result.join(" ")
  }
}
