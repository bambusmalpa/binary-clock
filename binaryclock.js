function binaryClock() {

    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();



    //godziny podział
    let hA = (Math.floor(h / 10));
    let hB = (h % 10);

    //minuty podział
    let mA = (Math.floor(m / 10));
    let mB = (m % 10);

    //sekundy podział
    let sA =
        (Math.floor(s / 10));
    let sB = s % 10;
    let hourA = document.querySelector(".hourA");
    let hourB = document.querySelector(".hourB");
    let minA = document.querySelector(".minA");
    let minB = document.querySelector(".minB");
    let secA = document.querySelector(".secA");
    let secB = document.querySelector(".secB");




    function blinking(A, B) {
        let one = B.querySelector(".field1");
        let two = B.querySelector(".field2");
        let four = B.querySelector(".field4");
        let eight = B.querySelector(".field8");

        switch (A) {
            case 0:
                one.classList.remove("active");
                two.classList.remove("active");
                four.classList.remove("active");
                eight.classList.remove("active");
                break
            case 1:
                one.classList.add("active");
                two.classList.remove("active");
                four.classList.remove("active");
                eight.classList.remove("active");
                break
            case 2:
                one.classList.remove("active");
                two.classList.add("active");
                four.classList.remove("active");
                eight.classList.remove("active");
                break
            case 3:
                one.classList.add("active");
                two.classList.add("active");
                four.classList.remove("active");
                eight.classList.remove("active");
                break
            case 4:
                one.classList.remove("active");
                two.classList.remove("active");
                four.classList.add("active");
                eight.classList.remove("active");
                break
            case 5:
                one.classList.add("active");
                two.classList.remove("active");
                four.classList.add("active");
                eight.classList.remove("active");
                break
            case 6:
                one.classList.remove("active");
                two.classList.add("active");
                four.classList.add("active");
                eight.classList.remove("active");
                break
            case 7:
                one.classList.add("active");
                two.classList.add("active");
                four.classList.add("active");
                eight.classList.remove("active");
                break
            case 8:
                one.classList.remove("active");
                two.classList.remove("active");
                four.classList.remove("active");
                eight.classList.add("active");
                break
            case 9:
                one.classList.add("active");
                two.classList.remove("active");
                four.classList.remove("active");
                eight.classList.add("active");
                break


        };
    };

    blinking(hA, hourA);
    blinking(hB, hourB);
    blinking(mA, minA);
    blinking(mB, minB);
    blinking(sA, secA);
    blinking(sB, secB);




    function clock() {
        if (h < 10) {
            h = "0" + h;
        }

        if (m < 10) {
            m = "0" + m;
        }

        if (s < 10) {
            s = "0" + s;
        }
        document.getElementById("clock").innerHTML = h + ":" + m + ":" +
            s;
    };
    clock();
};

setInterval(function () {
    binaryClock();

}, 1000)
