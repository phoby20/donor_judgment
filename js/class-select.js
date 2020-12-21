//分類データ（大分類、中分類は連想配列。小分類は配列。）
const classes =
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
  "ウイルス肝炎" :  {"A型肝炎": [], "B型肝炎": [], "C型肝炎": [], "E型肝炎": [],},
  "高度の肥満" : [],
  "脂質異常症" : [],
  "低体重" : [],
  "糖尿病" : [],
  "甲状腺疾患" : [],
};

const classes_old_20200220 =
{
  "中等教育" : {"木原美知子": [], "教職員関係" : [], "入試" : [], "生徒活動" : ["みさお会"]},
  "上代淑先生" : {"書簡（作成）": [], "書簡（宛先）": [], "訓話": []},
  "上代皓三先生" : {"訓話": []},
  "年史関係資料" : [],
  "校外団体" : [],
};

// 分類セレクトボックスの初期値
const initial_class_text = '<option value="null">すべて</option>';

// ページ読み込み時処理
$(document).ready(function(){

    // 大分類の初期化
    init_class1();
    // 中分類の初期化
    $('select#class2').html(initial_class_text);
    // 小分類の初期化
    $('select#class3').html(initial_class_text);
    // 大分類の選択時
    $('select#class1').on('change', function(){
        on_change_class1(this);
    });
    // 中分類の選択時
    $('select#class2').on('change', function(){
        on_change_class2(this);
    });

    // 大分類の初期化
    function init_class1(){

        // 大分類のセレクトボックスにセットするコード
        var class1_text = initial_class_text;

        // 大分類の配列
        var class1_data = Object.keys(classes);

        // 大分類の配列をループ
        for (var i = 0; i < class1_data.length; i++) {
            // 大分類のセレクトボックスにセットするコードに追加
            class1_text += '<option value="'+ class1_data[i] +'">'+ class1_data[i] +'</option>';
        }

        // 大分類をセットする
        $('select#class1').html(class1_text);

    }

    // 大分類の選択時処理
    function on_change_class1(class1){

        var class2 = $('select#class2');
        var class3 = $('select#class3');

        // 中分類のセレクトボックスにセットするコード
        var class2_text = initial_class_text;

        // 大分類の配列
        var class1_data = Object.keys(classes);

        // 大分類の配列をループ
        for (var i = 0; i < class1_data.length; i++) {

            // 画面で指定された大分類と一致する場合
            if (class1_data[i] == $(class1).val()) {

                // 指定された大分類に対応する中分類の配列
                var class2_data = Object.keys(classes[class1_data[i]]);

                // 中分類の配列をループ
                for (var j = 0; j < class2_data.length; j++) {
                    // 中分類のセレクトボックスにセットするコードに追加
                    class2_text += '<option value="'+ class2_data[j] +'">'+ class2_data[j] +'</option>';
                }
            }
        }

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