// 歌词形式： [00:29.609]卷入牵挂魂不守舍
// 定义解析歌词的正则表达式，主要解析时间部分
const parseRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
    // 将长字符串以 \n分割成一个个短字符串
    let lyricArr = lyricString.split("\n");
    const lyrics = [];
    for(let line of lyricArr) {
        if(line) {
            const result = parseRegExp.exec(line);
            if(!result) continue;
            // 将时间转换为毫秒数
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            // 最后一位有两位或三位，进行判断
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
            // 每一句歌词对应的毫秒时刻
            const time = time1 + time2 + time3;
            // 拿到每一句歌词的内容
            const content = line.replace(parseRegExp, '').trim();
            // 将每一行歌词转为对象形式
            const lineObj = {
                time: time,
                content: content,
            }
            lyrics.push(lineObj);
        }
    }
    return lyrics;
}