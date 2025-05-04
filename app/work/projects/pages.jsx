switch (num) {
    case "01":
        return contentMap.images("/assets/work/9/mangeoire/cour", 12);
    case "02":
        return contentMap.iframe("/assets/work/8/quiz/index.html");
    case "03":
        return contentMap.iframe("/assets/work/9/quiz/index.html");
    case "04":
        return contentMap.images("/assets/work/8/cahier/cour", 19);
    case "05":
        return contentMap.images("/assets/work/8/cahier2/cour", 29);
    case "06":
        return contentMap.images("/assets/work/8/fiche/cour", 15);
    case "07":
        return contentMap.images("/assets/work/9/fiche/cour", 16);
    case "08":
        return contentMap.images("//assets/work/8/devoirs/ds12022/cour", 3);
    case "09":
        return contentMap.images("/assets/work/8/dstheorique/cour", 8);
    case "10":
        return contentMap.images("//assets/work/8/dspratique/cour", 5);
    case "11":
        return contentMap.images("/assets/work/8/test/cour", 4);
    case "12":
        return contentMap.iframe("/assets/work/8/rappel/index.html");
    case "13":
        return contentMap.images("/assets/work/8/guide/cour", 4);
    case "14":
        return contentMap.downloads([
            { name: "baguette", path: "/assets/work/8/jeux/1.sb2" },
            { name: "balon", path: "/assets/work/8/jeux/2.sb2" },
        ]);
    case "15":
        return contentMap.images("//assets/work/8/cartes/vert/cour", 5);
    case "16":
        return contentMap.images("/assets/work/8/cartes/bleu/cour", 5);
    case "17":
        return contentMap.images("/assets/work/8/cartes/rouge/cour", 5);
    case "18":
        return contentMap.images("/assets/work/7/juice/cour", 5);
    case "19":
        return contentMap.images("/assets/work/8/game/frog/cour", 5);
    case "20":
        return contentMap.images("/assets/work/8/devoirs/ds12024/cour", 3);
    case "21":
        return contentMap.images("/assets/work/8/jeux/cour", 16);
    case "22":
        return contentMap.iframe("/assets/work/8/devoirs/ds12018/index.html");
    case "23":
        return contentMap.iframe("/assets/work/7/devoirs/ds12018/index.html");
    case "24":
        return contentMap.iframe("//assets/work/8/quiz/test2021/index.html");
    case "25":
        return contentMap.images("/assets/work/8/devoirs/ds22020/cour", 4);
    case "26":
        return contentMap.images("/assets/work/9/devoirs/ds12019/cour", 3);
    case "27":
        return contentMap.images("/assets/work/7/tp/tp1/cour", 3);
    case "28":
        return contentMap.images("/assets/work/7/tp/tp2/cour", 3);
    case "29":
        return contentMap.images("/assets/work/8/tp/tp1/cour", 6);
    case "30":
        return contentMap.iframe("/assets/work/7/quiz/testn12025/index.html");
    case "31":
        return contentMap.iframe("/assets/work/7/quiz/quizpart1/index.html");
    case "32":
        return contentMap.iframe("/assets/work/7/quiz/quizpart2/index.html");
    case "33":
        return contentMap.iframe("/assets/work/7/quiz/quizpart3/index.html");
    case "34":
        return contentMap.iframe("/assets/work/7/quiz/quizpart4/index.html");
    case "35":
        return contentMap.iframe("//assets/work/8/quiz/quizpart5/index.html");
    case "36":
        return contentMap.images("/assets/work/9/books/book1", 22);
    case "37":
        return contentMap.images("/assets/work/7/tp/unicorn", 6);
    case "38":
        return contentMap.images("/assets/work/9/devoirs/ds32024", 4);
    case "39":
        return contentMap.images("/assets/work/8/devoirs/ds32024", 4);
    case "40":
        return contentMap.images("/assets/work/9/devoirs/ds22024", 3);
    case "41":
        return contentMap.images("/assets/work/8/devoirs/ds22024", 3);
    case "42":
        return contentMap.images("/assets/work/9/devoirs/ds32023", 4);
    default:
        return <p className="text-center text-white">No content available</p>;
}