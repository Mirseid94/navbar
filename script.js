let reqem1 = 0;
let reqem2 = 0;
let reqem3 = 0;


var intervalID
var intervalID2
var intervalID3



function rakamlariGuncelle() {
    reqem1 = (reqem1 + 1);

    if (reqem1 == 50) {
        clearInterval(intervalID)
    }




    document.getElementById("rakam1").textContent = reqem1

}




function rakamGuncelle() {
    reqem2 = (reqem2 + 1);
    document.getElementById("rakam2").textContent = reqem2;
    if (reqem2 == 100) {
        clearInterval(intervalID2)
    }

}




function rakamiGuncelle() {
    reqem3 = (reqem3 + 1);
    document.getElementById("rakam3").textContent = reqem3;
    if (reqem3 == 200) {
        clearInterval(intervalID3)
    }
}




function baslatInterval() {
    intervalID = setInterval(rakamlariGuncelle, 100);
    intervalID2 = setInterval(rakamGuncelle, 80);
    intervalID3 = setInterval(rakamiGuncelle, 40);

}

function durdurInterval() {
    clearInterval(intervalID);
    clearInterval(intervalID2);
    clearInterval(intervalID3);
}


window.addEventListener('scroll', function() {
    var alan = document.getElementById('alan');
    var alanYuksekligi = alan.getBoundingClientRect().height;
    var alanGoruldu = (window.innerHeight - alanYuksekligi) >= 0;

    if (alanGoruldu) {
        durdurInterval();

        baslatInterval();





    } else {
        durdurInterval();
    }
});


window.sr = new ScrollReveal()



sr.reveal(".one-one-container", {
    duration: 2500,
    origin: "left",
    distance: "200px",
    delay: 1000,

})

sr.reveal(".resim", {
    duration: 2500,
    origin: "right",
    distance: "200px",
    delay: 1000,

})

sr.reveal(".img-1", {
    duration: 2000,
    origin: "bottom",
    distance: "60px",
    delay: 1000,

})

sr.reveal(".inner-container", {
    duration: 2000,
    distance: "100px",
    delay: 1000,
    origin: "right"

})
sr.reveal(".img-2", {
    duration: 2000,
    delay: 1000,
    origin: "bottom",
    distance: "60px"
})
sr.reveal(".point-div", {
    duration: 2000,
    distance: "60px",
    delay: 1000,
    origin: "bottom"

})

sr.reveal(".three-container", {
    duration: 2000,
    distance: "100px",
    origin: "left",
    delay: 1000
})
sr.reveal(".telephone-img", {
    duration: 2000,
    delay: 1000,
    origin: "right",
    distance: "100px"
})

sr.reveal(".div-1", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "400px"
})
sr.reveal(".div-2", {
    duration: 2000,
    delay: 500,
    origin: "bottom",
    distance: "60px"
})
sr.reveal(".div-3", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "400px"
})

sr.reveal(".icerik-container", {
    duration: 2000,
    delay: 1000,
    opacity: 0,
})
sr.reveal(".user-container", {
    duration: 2500,
    delay: 1000,
    origin: "right",
    distance: "100px"
})

sr.reveal(".besinci-container", {
    duration: 2500,
    delay: 1000,
    opacity: 0,
})
sr.reveal(".chat-div", {
    duration: 2500,
    delay: 1000,
    origin: "left",
    distance: "100px"
})

sr.reveal(".son-container", {
    duration: 2000,
    delay: 1000,
    scale: {
        start: 0,
        end: 1,
    },
})



// const sr = ScrollReveal({
//     duration: 2500,
//     origin: "left",
//     distance: "200px",
//     delay: 1000,
// });

// const one = document.querySelector(".one-one-container");

// sr.reveal(one)


// const img = document.querySelector(".resim")


// const br = ScrollReveal({
//         duration: 2500,
//         origin: "right",
//         distance: "200px",
//         delay: 1000,
//     }

// )

// br.reveal(img)




// const tr = ScrollReveal({
//     duration: 2000,
//     origin: "bottom",
//     distance: "60px",
//     delay: 1000,

// })
// const img1 = document.querySelector(".img-1")

// tr.reveal(img1)


// const ar = ScrollReveal({
//     duration: 2000,
//     distance: "100px",


//     delay: 1000,
//     origin: "right"
// })

// const inner_container = document.querySelector(".inner-container")

// ar.reveal(inner_container)