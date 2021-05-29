function GetQueryString()
// 参考 http://so-zou.jp/web-app/tech/programming/javascript/sample/get.htm
{
    var res = {};
    if( 1 < window.location.search.length )
    {
    // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
            {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );
            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
        res[ paramName ] = paramValue;
        }
    }
    return res;
}


var result = GetQueryString();

function writeTxt(key){
    // キー名が複数ある場合に対応するため、念のためキー名を指定する
    var mm = result[key];
    // オブジェクトの配列をフィルタリング http://lifelog.main.jp/wordpress/?p=2557
    var newData = data.filter(function(item, index){
    if(item.itemkey == mm) return true;
    });

var html = '';

html += '<div class="clearFix resultWrapper"><table id="resultTable">';
html += '<tr><th>資料番号</th><td>';
html += newData[0]['itemkey'];
html += '</td></tr><tr><th>区分</th><td>'
html += newData[0]['title'];
html += '</td></tr><tr><th>詳細1</th><td>'
html += newData[0]['body'];
//    html += '</td></tr><tr><th>旧資料番号</th><td>'
//    html += newData[0]['oldDocNo'];
//    html += '</td></tr><tr><th>画像</th><td>'
//    html += newData[0]['degipic'];
//    if(newData[0]['degipic']){
//    html += '<br>画像枚数　：　'
//    html += newData[0]['picnum'];
//    }
//    html += '</td></tr><tr><th>公開可否・資料確認</th><td>'
//    html += newData[0]['property'];
//    html += '</td></tr><tr><th>閲覧</th><td>'
//    html += newData[0]['read'];
html += '</td></tr><tr><th>詳細2</th><td>'
html += newData[0]['author'];
html += '</td></tr><tr><th>BMH</th><td>'
html += newData[0]['type'];
html += '</td></tr><tr><th>PBSCH</th><td>'
html += newData[0]['state'];
// html += '</td></tr><tr><th>配架場所</th><td>'
// html += newData[0]['place'];
// html += '</td></tr><tr><th>備考</th><td>'
// html += newData[0]['remarks'];

//    html += '</td></tr><tr><th>法量 (mm)</th><td>'
//    html += newData[0]['size'];
//    html += '</td></tr><tr><th>形態</th><td>'
//    html += newData[0]['dimension'];
//    html += '</td></tr><tr><th>キーワード</th><td>'
//    html += newData[0]['dbkeyword'];
html += '</td></tr><tr><th>分類1</th><td>'
html += newData[0]['class1'];
html += '</td></tr><tr><th>分類2</th><td>'
html += newData[0]['class2'];
// html += '</td></tr><tr><th>小分類</th><td>'
// html += newData[0]['class3'];
// html += '</td></tr><tr><th>仮番号・旧番号</th><td>'
// html += newData[0]['subkey'];

//    html += '　'
//    html += newData[0]['groupB'];
//    html += '　'
//    html += newData[0]['groupC'];
//    html += '　'
//    html += newData[0]['groupD'];
//    html += '　'
//    html += newData[0]['accept'];
//    html += '</td></tr><tr><th>備考</th><td>'
//html += newData[0]['notes'];
//    html += '</td></tr><tr><th>位置情報</th><td>'
//    html += newData[0]['location'];
html += '</td></tr></table>';
html += '<div class="imageBlock">';
// if( newData[0]['image'] != 'noimage' && newData[0]['image'] != '') {
//     html += '<img src="images/';
//     html += newData[0]['image'];
//     html += '"><br><input class="link" type="button" value="画像を拡大する" onclick="window.open(&quot;images/';
//     html += newData[0]['image'];
//     html += '&quot;, &quot;imageWindow&quot;, &quot;width=800&quot;, &quot;height=600&quot;)">';
// } else if( newData[0]['pdf'] ) {
//     html += '<img src="images/common/be-pdf.gif" alt="PDFファイルがあります">';
// } else {
//     html += '<img src="images/common/noimage.gif" alt="画像はありません">';
// }

// if( newData[0]['pdf'] ) {
//     html += '<br><br><button class="formbtn large" onclick="window.open(&quot;pdf/';
//     html += newData[0]['pdf'];
//     html += '&quot;, &quot;imageWindow&quot;, &quot;width=800&quot;, &quot;height=600&quot;)">PDFファイルを開く</button>';
// }

// /* MP3 */
// if( newData[0]['audio'] ) {
//     // html += '<button class="formbtn large" onclick="window.open(&quot;audio/';
//     // html += newData[0]['audio'];
//     // html += '&quot;, &quot;imageWindow&quot;, &quot;width=800&quot;, &quot;height=600&quot;)">音声ファイルを開く</button>';

//     html += '<a class="formbtn large btn-audio" href="#audio-modal">音声ファイルを開く</a>';
//     html += '<div style="display:none">';
//     html += '<div id="audio-modal" style="background:#000;">';
//     html += '<audio src="audio/' + newData[0]['audio'] + '" controls>';
//     html += '<p><a href="audio/' + newData[0]['audio'] + '" type="audio/mp3">ファイルをダウンロードする</a></p>';
//     html += '</audio>';
//     html += '</div>';
//     html += '</div>';
// }

// /* MP4 */
// if( newData[0]['video'] ) {
//     // html += '<button class="formbtn large" onclick="window.open(&quot;video/';
//     // html += newData[0]['video'];
//     // html += '&quot;, &quot;imageWindow&quot;, &quot;width=800&quot;, &quot;height=600&quot;)">動画ファイルを開く</button>';

//     html += '<a class="formbtn large btn-video" href="#video-modal">動画ファイルを開く</a>';
//     html += '<div style="display:none">';
//     html += '<div id="video-modal" style="background:#000;">';
//     html += '<video src="video/' + newData[0]['video'] + '" width="100%" controls autoplay>';
//     html += '<p><a href="video/' + newData[0]['video'] + '" type="video/mp4">ファイルをダウンロードする</a></p>';
//     html += '</video>';
//     html += '</div>';
//     html += '</div>';
// }

html += '</div>';
html += '</div>';

    document.write(html);
};


// console.log(result);
