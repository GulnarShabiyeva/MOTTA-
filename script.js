
// // ==============================length

// // var massiv = [10, 20, 30, 40, 50];
// // var massivUzunluq = massiv.length;

// // console.log("Massiv Uzunluğu:", massivUzunluq);MASSIVI SIL


// // =================eval-riyazi əməli sözlə ifadə edir
// // var x = 10;
// // var y = 20;
// // var operator = '*';

// // var kod = 'x ' + operator + ' y';

// // var netice = eval(kod);

// // console.log("Netice:", netice);


// // ============================search

// // var metn = "JavaScript öyrənmək çox maraqlıdır.";

// // // "JavaScript" ifadəsini axtar
// // var netice = metn.search("JavaScript");

// // if (netice !== -1) {
// //     console.log("Axtarış uğurlu oldu. İlk indeks:", netice);
// // } else {
// //     console.log("Axtarış uğursuz oldu. Göstərilən ifadə tapılmadı.");
// // }

// // =================================slice-kəsilən hissə


// // var myArray = [1, 2, 3, 4, 5];

// // var slicedArray = myArray.slice(1, 4);

// // console.log(slicedArray);

// // ========================substring-

// // var myString = "JavaScript istifadəsi";

// // // substring metodu ilə bir hissəsini kəs
// // var subString = myString.substring(0, 10);


// // console.log(subString);


//                     // var metn = "JavaScript Programming Language";
//                     // document.write(metn);
//                     // var netice = metn.substring();
//                     // document.write(netice);



// var originalString = "JavaScript ilə substring metodu";

// // Birinci indeksdən başlayaraq əldə olunan substring
// var substring1 = originalString.substring(0, 10);
// console.log("Substring 1:", substring1);


// var substring2 = originalString.substring(11, 22);
// console.log("Substring 2:", substring2);


// var substring3 = originalString.substring(0, originalString.length - 7);
// console.log("Substring 3:", substring3);

// // ========================concat- bir neçə sətri birləşdirmək üçün

// // var string1 = "JavaScript ilə ";

// // var string2 = "concat metodu";

// // var string3 = " istifadə etmək";

// // var concatenatedString = string1.concat(string2, string3);

// // console.log("Birləşdirilmiş sətir:", concatenatedString);

// // ==========================repeat-Sətri təkrar edir
// // var originalString = "GÜLNAR";

// // var repeatedString = originalString.repeat(3);

// // console.log("Təkrarlanmış sətir:", repeatedString);



// // ........sayı əvvəldən verəndə
// // var repeatCount = 4;
// // var repeatedStringDynamic = originalString.repeat(repeatCount);
// // console.log("Dinamik təkrarlanmış sətir:", repeatedStringDynamic);

// //=======================toString-Rəqəmi sətir formatına çevirir

// // var number = 42;
// // var stringNumber = number.toString();

// // console.log("Sətir formatında rəqəm:", stringNumber);
// // ========================String Number


// // ============================valueOf
// // =========================indexOf-dəyişkənin içindəki iindex dəyəri göstərir


// // var mainString = "JavaScript indexof metodu ilə kod";

// // var indexOfSubstring = mainString.indexOf("indexof");// Alt sətrin indeksi


// // console.log("Alt sətrin indeksi:", indexOfSubstring);

// // var indexOfNonexistentSubstring = mainString.indexOf("nonexistent");// Alt sətr mövcud deyilsə

// // console.log("Mövcud olmayan alt sətrin indeksi:", indexOfNonexistentSubstring);

// // =========================startWith-true false kimi yoxlayır ilk hardan baslayır qeyd edir

// // var mainString = "JavaScript startsWith metodu ilə kod";

// // // Alt sətrin başlayıb başlamadığını yoxla
// // var startsWithSubstring = mainString.startsWith("JavaScript");

// // console.log("Sətr JavaScript ilə başlayır:", startsWithSubstring);

// // // Başlamırsa
// // var startsWithNonexistentSubstring = mainString.startsWith("Python");

// // console.log("Sətr Python ilə başlamır:", startsWithNonexistentSubstring);

// // ==========================trim-bir sətrin başında və sonunda olan boşluq simvollarını silmək üçün istifadə olunur. 

// // var stringWithSpaces = "    JavaScript trim metodu ilə kod    ";

// // var trimmedString = stringWithSpaces.trim();

// // console.log("sətr:", trimmedString);

// // includes- bir sətrin  bir alt sətri olub olmadığını yoxlayır true false


// // var mainString = "JavaScript includes metodu ilə kod";

// // var includesSubstring = mainString.includes("includes"); // Alt sətri axtar

// // console.log("Alt sətri axtar:", includesSubstring);

// // var includesNonexistentSubstring = mainString.includes("Python");

// // console.log("Mövcud olmayan alt sətri axtar:", includesNonexistentSubstring);

// // ========================================match

// var mainString = "JavaScript match metodu ilə kod";

// //  ifadəyə uyğun alt sətrləri tap
// var matchResult = mainString.match(/match/g);

// console.log("uyğun alt sətrlər:", matchResult);

// // ===========================replace-bir sətrin müvafiq bir alt sətri (substring) və ya düzgün ifadə (regular expression) ilə əvəzləmək üçün istifadə olunur

// // var mainString = "JavaScript replace metodu ilə kod";

// // // "replace" alt sətrini "substring" ilə əvəz et
// // var replacedString = mainString.replace("replace", "substring");

// // console.log("Əvəz edilmiş sətr:", replacedString);


// // ==========================split-sətrlərə bölür

// // var mainString = "JavaScript split metodu ilə kod";

// // // Boşluqlara görə sətri bölür
// // var splittedBySpace = mainString.split(" ");

// // console.log("Boşluqlara görə bölünmüş array:", splittedBySpace);
