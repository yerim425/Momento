const quotes=[
    {
        quote: "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다 먼저 자신의 내면을 살펴야 한다.",
        author: "Wally 'Famous' Amos",
    },
    {
        quote: "태어나면서부터 현명한 이는 없다.",
        author: "Miguel de Cervantes",
    },
    {
        quote: "배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일입니다.",
        author: "John F. Kennedy",
    },
    {
        quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
        author: "John Wayne",
    },
    {
        quote: "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
        author: "Confucius",
    },
    {
        quote: "시작이 반이다.",
        author: "Aristotle",
    },
    {
        quote: "가장 잠재력있는 뮤즈는 우리 안에 있는 어린아이다.",
        author: "Stephen Nachmanovitch",
    },
    {
        quote: "단 1분의 성공이 몇 년의 실패를 보상한다.",
        author: "Robert Browning",
    },
    {
        quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "오늘 누군가가 그늘에 앉아 쉴 수 있는 이유는 오래 전에 누군가가 나무를 심었기 때문이다.",
        author: "Warren Buffetts",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;