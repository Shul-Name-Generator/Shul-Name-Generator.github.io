var x = "";

function generator1()
{
    var second = ["אלעזר" ,"חנניה" ,"נחמיה" ,"עזרא" ,"עזריה" ,"גבריאל" ,"רפאל" ,"שאול" ,"איתן" ,"יונה" ,"שמעון" ,"יהודה" ,"אלישע" ,"יהושע" ,"דניאל" ,"לאה" ,"רחל" ,"רבקה" ,"שרה" ,"נחמה" ,"דוד" ,"אהרון" ,"משה" ,"שלמה" ,"יונתן" ,"יעקב" ,"יצחק" ,"אברהם" ,"ישראל", "יוסף", "ראובן", "יששכר", "נפטלי", "דן", "בנימין", "מנשה", "אפרים", "עקיבא", "אסתר"];
    var first = ["אור" ,"צדקת" ,"רצון" ,"תיקון" ,"נצח" ,"שירת" ,"תשועת" ,"מנחת" ,"זכרון" ,"אהבת" ,"נר" ,"תורת" ,"בית" ,"שלוות" ,"דביר" ,"שיח" ,"בני" ,"שמחת" ,"רנת" ,"תפילת" ,"מצוות" ,"אוהל" ,"היכל", "דרכי"];
    var first_random = Math.floor(Math.random() * first.length);
    var second_random = Math.floor(Math.random() * second.length);
    document.getElementById("eng").innerHTML = ('Generated shul name: ');
    document.getElementById("result").innerHTML = (first[first_random] + ' ' + second[second_random]);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("eng").style.fontSize = "x-large";
    document.getElementById("donor").innerHTML = ('');
    x = second[second_random];
}

function generator2(f_name,l_name)
{

    var first = ["אור" ,"צדקת" ,"רצון" ,"תיקון" ,"נצח" ,"שירת" ,"תשועת" ,"מנחת" ,"זכרון" ,"אהבת" ,"נר" ,"תורת" ,"בית" ,"שלוות" ,"דביר" ,"שיח" ,"בני" ,"שמחת" ,"רנת" ,"תפילת" ,"מצוות" ,"אוהל" ,"היכל", "דרכי"];
    var first_random = Math.floor(Math.random() * first.length);
    document.getElementById("eng").innerHTML = ('Generated shul name: ');
    document.getElementById("result").innerHTML = (first[first_random] + ' ' + f_name + " ע״ש " + f_name + " " + l_name);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("eng").style.fontSize = "x-large";
}


function name_after()
{
    if (x == "")
    {
        alert("Error: Please generate a shul name first");
        return 0;
    }
    var third = ["שפירו" ,"פרידמן" ,"קליין" ,"אייזן" ,"רובין" ,"הימלפרב" ,"שוורץ" ,"ויינברג" ,"שכטר" ,"הורוביץ" ,"אהרונסון" ,"יעקובסון" ,"אברהמסון" ,"ליבוביץ" ,"לוין" ,"לוי" ,"כהן" ,"אבוחצירא" ,"שרייבר" ,"וייס" ,"שוורץ","גולדברג" ,"גרינברג","אדלמן"];
    var l_name = Math.floor(Math.random() * third.length);
    document.getElementById("donor").innerHTML = (x + " " + third[l_name]);
    document.getElementById("donor").style.fontSize = "x-large";
}

function choose_name()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    generator2(f_name,l_name);
}


function clear_box()
{
    document.getElementById('f_name').value = "";
    document.getElementById('l_name').value = "";
    document.getElementById('donor').innerHTML = "";
    x = "";
    
}

function call_two()
{
    choose_name();
    clear_box();
}