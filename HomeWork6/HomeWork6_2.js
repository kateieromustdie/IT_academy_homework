let count = 0;
let today = new Date();
for(let startYear = 2000; startYear <= today.getFullYear(); startYear++)
{
    for(let month = 0; month < 12; month++)
    {
        let currentDate = new Date(startYear, month, 13)
        if (currentDate.getDay() === 5){
        count++
        }
    }
}
console.log(`Количество пятниц 13-ое с 01.01.2000 года - ${count}`);
