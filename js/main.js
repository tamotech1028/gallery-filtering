$(function(){

    let $filteringBtn = $(".buttons button"),
        $image = $(".gallery li");

    // フィルタリングボタンがクリックされた時の処理
    $filteringBtn.click(function(){

        let target = $(this).attr("value");

        // 各画像に対する処理
        $image.each(function(){
            // 初期値として全てを非表示にする
            $(this).animate({
                "opacity": 0
            }, 300, function(){
                $(this).hide();
                /* 
                指定の画像要素にクリックされたボタンのvalueのクラスが入っていれば表示
                value属性がallの場合も表示する
                */
                if($(this).hasClass(target) || target == "all") {
                    $(this).show();
                    $(this).animate({
                        "opacity": 1
                    }, 300);
                }
            });
        });
    });
});
