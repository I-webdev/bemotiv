import express from "express";
const app = express();
const port = 3100;



app.get("/motivation", (req, res)=>{
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur","Fri", "Sat"];
    const d = new Date();
    const day = d.getDay();
    const dayName = weekdays[day];
    const motivationForTheDay = motivations.filter((motivation)=>motivation.Day === dayName);
    const randomIndexmotivationForTheDay = Math.floor(Math.random() * motivationForTheDay.length);
    const aMotivation = motivationForTheDay[randomIndexmotivationForTheDay];
    res.json(aMotivation);
});





app.listen(port, ()=>{
    console.log(`This api is running on port ${port}. Please, take note.`)
});


const motivations = [
    {_id: 1,
    Day: "Mon",
    Motivation:"Success is to wake up each morning and consciously decide that today will be the best day of your life."},

    {_id: 2,
    Day: "Tue",
    Motivation:"The only way to do great work is to love what you do."},

    {_id: 3,
    Day: "Wed",
    Motivation:"Success is the sum of small efforts, repeated day in and day out."},
    
    {_id: 4,
        Day: "Thur",
        Motivation:"Thursday is a perfect day to start turning your dreams into reality."},
    
    {_id: 5,
        Day: "Fri",
        Motivation:"Congratulations on making it to the end of the week! But before diving headfirst into the weekend, one more day to stay motivated and focused."},
  
{_id: 6,
    Day: "Sat",
    Motivation:"Don’t let the weekend be your weak end. Stay strong, stay motivated."},

    {_id: 7,
    Day: "Sun",
    Motivation:"Sunday is a day to dream big, set audacious goals, and believe in your ability to make them a reality."},
    
    {_id: 8,
        Day: "Mon",
        Motivation:"The biggest thrill wasn’t in winning on Sunday but in meeting the payroll on Monday."},
    
    {_id: 9,
        Day: "Tue",
        Motivation:"It does not matter how slowly you go, as long as you do not stop."},
 

        {_id: 10,
    Day: "Wed",
    Motivation:"The way to get started is to quit talking and begin doing."},

    {_id: 11,
    Day: "Thur",
    Motivation:"Embrace the challenges of this Thursday, for they will lead you to great opportunities."},
    
    {_id: 12,
        Day: "Fri",
        Motivation:"Oh! It’s Friday again. Share the love that was missing during the week. In a worthy moment of peace and bliss."},
    
    {_id: 13,
        Day: "Sat",
        Motivation:"Saturday shines when you do. Keep shining."},
 

        {_id: 14,
    Day: "Sun",
    Motivation:"Sunday is your best day. You know you had an amazing week. Time to recover and think how you gonna kill the next one."},

    {_id: 15,
    Day: "Mon",
    Motivation:"The future depends on what you do today."},
    
    {_id: 16,
        Day: "Tue",
        Motivation:"The only person you should try to be better than is the person you were yesterday."},
    
    {_id: 17,
        Day: "Wed",
        Motivation:"The only thing that can grow is the thing you give energy to."},
 

        {_id: 18,
    Day: "Thur",
    Motivation:"Success is not achieved overnight; it’s the result of consistent effort. Keep pushing forward this Thursday."},

    {_id: 19,
    Day: "Fri",
    Motivation:"The best preparation for tomorrow is doing your best today."},
    
    {_id: 20,
        Day: "Sat",
        Motivation:"Saturday is a day to remember that you are stronger than you think."},
    
    {_id: 21,
        Day: "Sun",
        Motivation:"Sunday is a day to clear your mind of all the clutter and start anew."},
 

        {_id: 22,
    Day: "Mon",
    Motivation:"Monday is for people with a mission. Those who favor vacations, not weekends"},

    {_id: 23,
    Day: "Tue",
    Motivation:"Each Tuesday is a blank canvas. Paint it with purpose, passion, and unwavering determination."},
    
    {_id: 24,
        Day: "Wed",
        Motivation:"Life is about making an impact, changing things, and leaving things better than you found them."},
    
    {_id: 25,
        Day: "Thur",
        Motivation:"Don’t wait for Friday to be happy. Find joy in every moment, including this Thursday."},
 
        {_id: 26,
        Day: "Fri",
        Motivation:"No matter what happened yesterday, it is insignificant when compared to what lies within the core of your being today."},
    
    {_id: 27,
        Day: "Sat",
        Motivation:"Saturday is a day to remember that you are one step closer to your dreams."},
 

        {_id: 28,
    Day: "Sun",
    Motivation:"Sunday clears away the rust of the whole week."},

    {_id: 29,
    Day: "Mon",
    Motivation:"Okay, it's Monday but who said Mondays have to suck? Be a rebel and have a great day anyway."},
    
    {_id: 30,
        Day: "Tue",
        Motivation:"Focus on progress, not perfection. Let Tuesday be a day of growth and improvement."},
    
    {_id: 31,
        Day: "Wed",
        Motivation:"Keep the big picture in mind. Ask yourself how you can change the world for the better this Wednesday."},
 
        {_id: 32,
        Day: "Thur",
        Motivation:"Be fearless in the pursuit of what sets your soul on fire, even on a Thursday."},
    
    {_id: 33,
        Day: "Fri",
        Motivation:"Happy Friday! You’re responsible for the energy of your day. Remember, when you give off positive energy, you attract it! Decide to be Happy!"},
 

        {_id: 34,
    Day: "Sat",
    Motivation:"Saturday is a day to remember that every accomplishment starts with the decision to try."},

    {_id: 35,
    Day: "Sun",
    Motivation:"Sunday is the perfect day to refuel your soul and be grateful for each and every one of your blessings."}
]