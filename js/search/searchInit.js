$(document).ready(function(){
    var objFullTextSearch;

    objFullTextSearch = new FullTextSearch();
    objFullTextSearch.init(data, document.location.search);
    objFullTextSearch.initElement('stat', 'navi1', 'navi2', 'result');

        // console.log(objFullTextSearch.refine1.join(" "));
        // console.log(document.location.search);
        // console.log(data);


    if (objFullTextSearch.keyword    //キーワード
     && objFullTextSearch.refine1    //形態
     && objFullTextSearch.refine2    //作成年代
     && objFullTextSearch.yearfrom   //画像の有無
     && objFullTextSearch.yearto   //画像の有無
     && objFullTextSearch.hasimage   //画像の有無
     && objFullTextSearch.class1    //大分類
     && objFullTextSearch.class2    //中分類
     && objFullTextSearch.class3    //小分類
    ){
      objFullTextSearch.do_find(
        objFullTextSearch.keyword.join(" "),
        objFullTextSearch.refine1.join(" "),
        objFullTextSearch.refine2.join(" "),
        objFullTextSearch.yearfrom.join(" "),
        objFullTextSearch.yearto.join(" "),
        objFullTextSearch.hasimage.join(" "),
        objFullTextSearch.class1.join(" "),
        objFullTextSearch.class2.join(" "),
        objFullTextSearch.class3.join(" ")
      ); //検索
    }
});

