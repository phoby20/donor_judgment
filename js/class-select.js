//分類データ（大分類、中分類は連想配列。小分類は配列。）
const classes =
{
    "臨床的な問題" : {"服薬中": [], "服薬中、疾患検査中、疾患治療中": [], "血管確保": [], "血管迷走神経反射": [], "その他" : []},
    "呼吸器疾患" : {"呼吸機能": [], "気管支喘息（咳喘息含む）": [], "異常呼吸": [], "自然気胸他" : [], "非定型抗酸菌症（MAC）" : [], "間質性肺炎" : []},
    "循環器疾患" : {"血圧": [], "血栓症": [], "下肢静脈瘤": [], "深部静脈血栓": [], "先天性心疾患" : [], "後天性心疾患" : [], "徐脈" : [], "虚血性心疾患" : [], "心電図所見" : [], "不整脈" : [], "動脈疾患" : [], "心膜疾患" : [], "心筋疾患" : []},
    "消化器疾患" : {"潰瘍性大腸炎、クローン病" : [], "虫垂炎" : [], "その他" : []},
    "肝・胆・膵疾患" : {"ウイルス肝炎（A型肝炎）": [], "ウイルス肝炎（B型肝炎）": [], "ウイルス肝炎（C型肝炎）": [], "ウイルス肝炎（E型肝炎）": [], "ウイルス肝炎": [], "体質性黄疸": [], "胆石": [], "脾腫" : [], "脾摘出" : [], "慢性肝炎" : [], "脂肪肝" : [], "薬剤性肝障害、アルコール性肝障害" : [], "LDH" : [], "肝機能検査、その他" : [], "脾腫" : []},
    "代謝・栄養疾患" : {"高度の肥満": [], "脂質異常症": [], "低体重": [], "糖尿病": [], "痛風、高尿酸血症" : []},
    "内分泌疾患" : {"甲状腺疾患": [], "内分泌疾患": []},
    "血液・造血器疾患" : {"血算": [], "生化学": [], "凝固系": [], "造血器疾患": [], "その他" : []},
    "腎・尿路疾患、水電解質異常" : {"急性腎炎": [], "ネフローゼ症候群": [], "慢性腎炎": [], "腎機能": [], "尿検査" : [], "結石" : [], "その他" : []},
    "遺伝性疾患" : {"遺伝性疾患": []},
    "神経・筋疾患" : {"けいれん性疾患": [], "悪性高熱症": [], "脳血管性障害": [], "ギラン・ バレー症候群": [], "IgA欠損症" : []},
    "感染症、性病、寄生虫疾患" : {"感染症の基本的考え方": [],"輸血歴": [], "CJD": [], "vCJD": [], "結核": [], "EBウイルス感染症" : [], "伝染性単核球症" : [], "HIV" : [], "梅毒" : [], "性感染症" : [], "海外渡航" : [], "マラリア" : [], "ウエストナイルウイルス" : [], "デング熱" : [], "シャーガス病" : [], "アフリカトリパノソーマ症" : [], "バベシア症" : [], "HTLV-1" : [], "トキソプラズマ感染症" : [], "りんご病等" : [], "ウイルス性皮膚疾患等" : [], "予防接種" : [], "その他" : []},
    "リウマチ性疾患、アレルギー性疾患" : {"アレルギー": [], "アトピー性疾患": [], "自己免疫性疾患": [], "膠原病": [], "リウマチ熱" : [], "G-CSF 製剤" : []},
    "中毒、環境要因による疾患" : {"薬物中毒等": [], "咬傷、刺虫傷": [], "薬物・覚醒剤中毒": []},
    "整形外科疾患" : {"腰椎疾患": [], "頚椎疾患": [], "脊椎疾患": [], "四肢麻痺等": [], "その他" : []},
    "婦人科疾患" : {"子宮筋腫、卵巣嚢腫、子宮内膜症": [], "子宮頸部、円錐切除" : [], "子宮異形成上皮" : [], "避妊薬" : [], "妊娠" : [], "出産" : [], "羊水塞栓症" : [], "その他" : []},
    "精神科疾患" : {"精神疾患、精神障害": [], "精神障害": [], "精神障害": [], "てんかん" : [], "カウンセリング" : []},
    "耳鼻科疾患" : {"中耳、内耳疾患": [], "突発性難聴": [], "先天性難聴": [], "顎関節症": [], "その他" : []},
    "皮膚科疾患" : {"乾癬": [], "天疱瘡": [], "白斑": [], "その他" : []},
    "眼科疾患" :  {"緑内障": [], "白内障": [], "角膜疾患": [], "眼底疾患": [], "眼底異常": [], "飛蚊症（ひぶんしょう）": [], "外眼筋麻痺": [], "眼振": [], "色覚異常": [], "夜盲": [], "その他" : []},
    "歯科疾患" : {"歯列矯正、歯科治療": []},
    "臓器移植・提供" : {"臓器移植": [], "臓器提供": [], "その他" : []},
    "美容法・健康法・アンチエイジング療法" : {"美容法・健康法・アンチエイジング療法": [], "豊胸手術": []},
    "その他" : {"その他": [], "レーザー治療全般": []},
};

const classes_old_20200220 =
{
    "服薬中" : [],
    "服薬中、疾患検査中、疾患治療中" : [],
    "血管確保" : [],
    "血管迷走神経反射" : [],
    "呼吸機能" : [],
    "気管支喘息（咳喘息含む" : [],
    "異常呼吸" : [],
    "自然気胸他" : [],
    "非定型抗酸菌症（ＭＡＣ" : [],
    "間質性肺炎" : [],
    "血圧" : [],
    "血栓症" : [],
    "下肢静脈瘤" : [],
    "深部静脈血栓" : [],
    "先天性心疾患" : [],
    "後天性心疾患" : [],
    "徐脈" : [],
    "潰瘍性大腸炎、クローン病" : [],
    "虫垂炎" : [],
    "その他" : [],
    "ウイルス肝炎" :  {"A型肝炎": [], "B型肝炎": [], "C型肝炎": [], "E型肝炎": [], "-": []},
    "高度の肥満" : [],
    "脂質異常症" : [],
    "低体重" : [],
    "糖尿病" : [],
    "甲状腺疾患" : [],
};

function GetQueryString()
    // 参考 http://so-zou.jp/web-app/tech/programming/javascript/sample/get.htm
    {
        var res = {};
        if (1 < window.location.search.length) {
            // 最初の1文字 (?記号) を除いた文字列を取得する
            var query = window.location.search.substring(1);
            // クエリの区切り記号 (&) で文字列を配列に分割する
            var parameters = query.split('&');

            for (var i = 0; i < parameters.length; i++) {
                // パラメータ名とパラメータ値に分割する
                var element = parameters[i].split('=');
                var paramName = decodeURIComponent(element[0]);
                var paramValue = decodeURIComponent(element[1]);
                // パラメータ名をキーとして連想配列に追加する
                res[paramName] = paramValue;
            }
        }
        return res;
    }


// 分類セレクトボックスの初期値
const initial_class_text = '<option value="null">すべて</option>';




// 区分をクリックしたときに動作
var di = '';
function category1(e) {
    
    // di = document.getElementsByName('chkBox').value;
    // console.log(e.value);
    category1_value = e.value;
    // 大分類のセレクトボックスにセットするコード
    var class1_text = initial_class_text;

    // 大分類の配列
    var class1_data = classes[category1_value];
    class2_list = Object.keys(class1_data)

    // 大分類の配列をループ
    for (var i = 0; i < class2_list.length; i++) {
        // 大分類のセレクトボックスにセットするコードに追加
        class1_text += '<option value="'+ class2_list[i] +'">'+ class2_list[i] +'</option>';
    }


    // 大分類をセットする
    $('select#class1').html(class1_text);
}













// ページ読み込み時処理
$(document).ready(function(){
    var result = GetQueryString();
    var chkBox = result['chkBox'];

    // 大分類の初期化 - 키워드를 인수로 넘겨줘야 함!!! ---------------------------------------------------------------------
    init_class1(chkBox);
    $('select#class1').html(initial_class_text);
    // 中分類の初期化
    $('select#class2').html(initial_class_text);
    // 小分類の初期化
    $('select#class3').html(initial_class_text);
    
    // --------------------------------------------------
    // 大分類の選択時
    $('select#class1').on('change', function(){
        on_change_class1(this);
    });
    // --------------------------------------------------
    // 中分類の選択時
    $('select#class2').on('change', function(){
        on_change_class2(this);
    });

    // 大分類の初期化
    function init_class1(chkBox){

        // 大分類のセレクトボックスにセットするコード
        var class1_text = initial_class_text;




        // 검색 후 검색했던 정보를 셋팅하는 부분
        // chkBox를 넘겨받고 classes[chkBox]의 키를 추출해서 class1(풀 다운 메뉴)에 셋팅한다
        // 大分類の配列 ---------------------------------------------------------------------------------------------------
        if (chkBox) {
            var class1_data = Object.keys(classes[chkBox]);
        } else {
            var class1_data = Object.keys(classes);
        }



        for (var i = 0; i < class1_data.length; i++) {
            class1_text += '<option value="'+ class1_data[i] +'">'+ class1_data[i] +'</option>';
        }

        // 大分類をセットする
        $('select#class1').html(class1_text);

    }

    // 区分を選択したときに処理
    function on_change_class1(class1){
        // console.log(class1)

        var class2 = $('select#class2');
        var class3 = $('select#class3');
        var select_keyword = $(class1).val();

        // 中分類のセレクトボックスにセットするコード
        var class2_text = initial_class_text;

        // 大分類の配列
        var class1_data = Object.keys(classes);
        var class2_data = Object(classes_old_20200220);
        var class2_keys= Object.keys(classes_old_20200220);

        // 여기부터는 임시방편
        if (class2_data[select_keyword]) {
            var items = Object.keys(class2_data[select_keyword]);
            for (var i = 0; i < items.length; i++) {
                class2_text += '<option value="'+ items[i] +'">'+ items[i] +'</option>';
    
                // 画面で指定された大分類と一致する場合
                // if (class2_data[select_keyword]) {
                    
                    // console.log(items);
    
                    // for (var i = 0; i < items.length; i++) {
    
                    // }
    
                    // // 指定された大分類に対応する中分類の配列
                    // var class2_data = Object.keys(classes[class1_data[i]]);
                    // var class2_data = Object.keys(class1_data[$(class1).val()]);
                    // console.log(class2_data);
    
                    // // 中分類の配列をループ
                    // for (var j = 0; j < class2_data.length; j++) {
                    //     // 中分類のセレクトボックスにセットするコードに追加
                    //     class2_text += '<option value="'+ class2_data[j] +'">'+ class2_data[j] +'</option>';
                    // }
                // }
            }
        }
        
        // console.log(items);

        // 大分類の配列をループ
        

        // -----------------------------------------------------------------------------------------------------
        // // 大分類の配列をループ
        // for (var i = 0; i < class1_data.length; i++) {

        //     // 画面で指定された大分類と一致する場合
        //     if (class1_data[i] == $(class1).val()) {

        //         // 指定された大分類に対応する中分類の配列
        //         var class2_data = Object.keys(classes[class1_data[i]]);
        //         var class2_data = Object.keys(class1_data[$(class1).val()]);
        //         console.log(class2_data);

        //         // 中分類の配列をループ
        //         for (var j = 0; j < class2_data.length; j++) {
        //             // 中分類のセレクトボックスにセットするコードに追加
        //             class2_text += '<option value="'+ class2_data[j] +'">'+ class2_data[j] +'</option>';
        //         }
        //     }
        // }
        // -----------------------------------------------------------------------------------------------------

        // 中分類をセットする
        class2.html(class2_text);

        // 小分類をクリアする
        class3.html(initial_class_text);
    }

    // 中分類の選択時処理
    function on_change_class2(class2){

        var class1 = $('select#class1');
        var class3 = $('select#class3');

        // 中分類のセレクトボックスにセットするコード
        var class3_text = initial_class_text;

        // 大分類の配列
        var class1_data = Object.keys(classes);

        // 大分類の配列をループ
        for (var i = 0; i < class1_data.length; i++) {
            // 画面で指定された大分類と一致する場合
            if (class1_data[i] == class1.val()) {
                // 指定された大分類に対応する中分類の配列
                var class2_data = Object.keys(classes[class1_data[i]]);
                // 中分類の配列をループ
                for (var j = 0; j < class2_data.length; j++) {
                    // 画面で指定された中分類と一致する場合
                    if (class2_data[j] == $(class2).val()) {
                        // 指定された中分類に対応する小分類の配列
                        var class3_data = classes[class1_data[i]][class2_data[j]];
                        // 小分類の配列をループ
                        for (var k = 0; k < class3_data.length; k++) {
                            // 小分類のセレクトボックスにセットするコードに追加
                            class3_text += '<option value="'+ class3_data[k] +'">'+ class3_data[k] +'</option>';
                        }
                    }
                }
            }
        }

        // 小分類をセットする
        class3.html(class3_text);
    }

});