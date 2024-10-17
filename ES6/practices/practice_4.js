let persons = [
  { id: 1, name: 'John', tags: 'javascript' },
  { id: 2, name: 'Alice', tags: 'dontnet' },
  { id: 3, name: 'Roger', tags: 'java' },
  { id: 4, name: 'Adam', tags: 'javascript' },
  { id: 5, name: 'Alex', tags: 'java' },
]

//1. List the person with javascript tag
const personWithJavascriptTag = persons.filter((person) => person.tags === 'javascript')
console.log(personWithJavascriptTag)

//2. List the same on person using java and put programmer after their name, change the name key to Developer
const personWithJavaTag = persons
  .filter((person) => person.tags === 'java')
  .map((person) => {
    const { name, ...rest } = person
    const newName = `${name} Programmer`
    return { ...rest, Developer: newName }
  })
console.log(personWithJavaTag)
console.log(persons)

//3. If we have anyone with tag python
const hasPythonPerson = persons.some((person) => person.tags === 'python')
console.log(hasPythonPerson)

//4. Find the number of unique tags and their count present in list
const uniqueTagsCount = persons.reduce((prevObject, currObject) => {
  prevObject[currObject.tags] = prevObject[currObject.tags] ? prevObject[currObject.tags] + 1 : 1
  return prevObject
}, {})
console.log(uniqueTagsCount)
