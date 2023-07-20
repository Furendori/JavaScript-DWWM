const data = `
{
"category": "animaux",
"entries": [
"chien",
"chat",
"lion",
"singe"
]
}
`;

const dataLog = JSON.parse(data)
console.log(dataLog.entries);