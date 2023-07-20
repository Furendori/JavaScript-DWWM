let data = `
{
"name": "Robert",
"address": "6, rue Paul",
"city": "Lyon"
}
`;

data = JSON.parse(data)
console.log(data.name);
console.log(data.address);
console.log(data.city);