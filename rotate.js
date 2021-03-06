$.extend(true, $.fancybox.defaults, {
    btnTpl: {
        rotate: '<button data-fancybox-rotate class="fancybox-button fancybox-button--rotate" title="{{ROTATE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M512 213.333333C724.053333 213.333333 896 328.106667 896 469.333333 896 541.013333 851.626667 605.866667 780.373333 652.373333 826.026667 615.253333 853.333333 568.32 853.333333 517.546667 853.333333 396.373333 700.586667 298.666667 512 298.666667L512 426.666667 341.333333 256 512 85.333333 512 213.333333M512 810.666667C299.946667 810.666667 128 695.893333 128 554.666667 128 482.986667 172.373333 418.133333 243.626667 371.626667 197.973333 408.746667 170.666667 455.68 170.666667 506.88 170.666667 627.626667 323.413333 725.333333 512 725.333333L512 597.333333 682.666667 768 512 938.666667 512 810.666667Z" p-id="1913"></path></svg>' +
          "</button>"
    },
    buttons: ["zoom", "rotate", "slideShow", "thumbs", "close"],
    i18n: {
        en: {
            ROTATE:'rotate'
        },
    },
    rotateClass:'rotate0'
});
var fancyboxRotateCurr = 0, fancyboxIsRuning = false, fancyboxRotateClss = ['rotate0', 'rotate90', 'rotate180', 'rotate270', 'rotate360'];
$(document).delegate('[data-fancybox-rotate]', 'click', function () {
    console.log(2222);
    if (fancyboxIsRuning) {
        return;
    }
    fancyboxRotateCurr++;
    fancyboxIsRuning = true;
    if (fancyboxRotateCurr === 5) {
        fancyboxRotateCurr = 1;
        $(".fancybox-stage")[0].className = "fancybox-stage";
    }
    $(".fancybox-stage").removeClass('animated');
    $(".fancybox-stage").addClass(fancyboxRotateClss[fancyboxRotateCurr]);
    setTimeout(function () { $(".fancybox-stage").addClass('animated'); fancyboxIsRuning = false; }, 80);
});
