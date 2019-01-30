﻿import { Message } from 'discord.js';
import { setInterval } from 'timers';

const Discord = require("discord.js");
const testBot = new Discord.Client();

const fs = require('fs');
var abalone = new Message();
var abalone_alpha = new Message();
var broadCasting = false;

setInterval(() => {
    if (!broadCasting || abalone_alpha.content == abalone.content) return;
    else testBot.channels.find("id", "451378846285955072").send(abalone.content);
    abalone_alpha = abalone;
}, 1000);

testBot.on("message", (message) => {
	if(message.content == "ping"){
		message.channel.send("ri\njjo\nㅅㄱ");
    }
    if (message.content == "플중님") {
        message.channel.send("네");
    }
    if (message.content == "test" || message.content == "테스트") {
        message.channel.send("?\nㄴ\nㅅㄱ");
    }
    if (message.author.id == "539484771248504832" && message.channel.id == '466450753045921792') {
        abalone = message;
    }
    if (message.content == "안민다" || message.content == "아발론3d" || message.content == "당긴다") {
        if (message.author.id == "387967131733458954") {
            message.channel.send(abalone.content);
        }
        else if (message.author.id == "499879655982104586") {
            message.channel.send("오키 언니 오늘부터 우리 스파이인 거당! 알겠징??\n" + abalone.content);
        }
        else {
            message.channel.send("언니... 언닌 경쟁자자너... 경쟁자가 그런 명령어 쓰면 안 되징...ㅠㅠ");
        }
    }
    if (message.content == "안민다 중계" || message.content == "아발론3d 중계" || message.content == "당긴다 중계") {
        if (message.author.id == "387967131733458954") {
            message.channel.send("주인님 안뇽!! 중계 시작할겡! ㅎㅎ");
            broadCasting = true;
        }
        else if (message.author.id == "499879655982104586") {
            message.channel.send("오키 언니 오늘부터 우리 스파이인 거당! 알겠징??");
            broadCasting = true;
        }
        else {
            message.channel.send("언니... 언닌 경쟁자자너... 경쟁자가 그런 명령어 쓰면 안 되징...ㅠㅠ");
        }
    }
    if (message.content == "중계 그만") {
        message.channel.send("ㅠㅠ 알았엉 그만할겡 ㅎㅎ");
        broadCasting = false;
    }
    if (message.content == "test2") {
        message.channel.send("test2");
    }
    if (message.content.indexOf("웃음") != -1 || message.content.indexOf("웃었") != -1 || message.content.indexOf("웃기") != -1 || message.content.indexOf("웃겼") != -1) {
        message.react("😀");
    }
    if (message.content.indexOf("졸리") != -1 || message.content.indexOf("자야") != -1 || message.content.indexOf("zzz") != -1) {
        message.react("💤");
    }
    if (message.content.indexOf("똥") != -1 || message.content.indexOf("응가") != -1 || message.content.indexOf("화장실") != -1) {
        message.react("💩");
    }
    if (message.content.indexOf("사악") != -1) {
        message.react("😈");
    }
    if (message.content.indexOf("도깨비") != -1 || message.content.indexOf("무섭") != -1) {
        message.react("👹");
    }
    if (message.content.indexOf("해골") != -1 || message.content.indexOf("원효") != -1) {
        message.react("💀");
    }
    if (message.content.indexOf("유령") != -1 || message.content.indexOf("고스트") != -1) {
        message.react("👻");
    }
    if (message.content.indexOf("외계인") != -1 || message.content.indexOf("에일리언") != -1) {
        message.react("👽");
    }
    if (message.content.indexOf("봇") != -1 || message.content.indexOf("bot") != -1) {
        message.react("🤖");
    }
    if (message.content.indexOf("항복") != -1 || message.content.indexOf("만세") != -1) {
        message.react("🙌");
    }
    if (message.content.indexOf("짝짝") != -1 || message.content.indexOf("박수") != -1) {
        message.react("👏");
    }
    if (message.content.indexOf("하이") != -1 || message.content.indexOf("ㅎㅇ") != -1) {
        message.react("👋");
    }
    if (message.content.indexOf("굿") != -1 || message.content.indexOf("굳") != -1 || message.content.indexOf("와와") != -1) {
        message.react("👍");
    }
    if (message.content.indexOf("에바") != -1 || message.content.indexOf("별로") != -1) {
        message.react("👎");
    }
    if (message.content.indexOf("주먹") != -1 || message.content.indexOf("펀치") != -1) {
        message.react("👊");
    }
    if (message.content.indexOf("묵") != -1 || message.content.indexOf("주먹") != -1 || message.content.indexOf("바위") != -1) {
        message.react("✊");
    }
    if (message.content.indexOf("찌") != -1 || message.content.indexOf("가위") != -1) {
        message.react("✌");
    }
    if (message.content.indexOf("ㅇㅋ") != -1 || message.content.indexOf("넹") != -1) {
        message.react("👌");
    }
    if (message.content.indexOf("보") != -1 || message.content.indexOf("빠") != -1) {
        message.react("✋");
    }
    if (message.content.indexOf("양손") != -1 || message.content.indexOf("독수리") != -1) {
        message.react("👐");
    }
    if (message.content.indexOf("힘") != -1 || message.content.indexOf("근육") != -1) {
        message.react("💪");
    }
    if (message.content.indexOf("하이파이브") != -1 || message.content.indexOf("맞대") != -1) {
        message.react("🙏");
    }
    if (message.content.indexOf("1등") != -1 || message.content.indexOf("1빠") != -1) {
        message.react("☝");
    }
    if (message.content.indexOf("위") != -1 || message.content.indexOf("천장") != -1) {
        message.react("👆");
    }
    if (message.content.indexOf("밑") != -1 || message.content.indexOf("아래") != -1) {
        message.react("👇");
    }
    if (message.content.indexOf("왼") != -1 || message.content.indexOf("서쪽") != -1) {
        message.react("👈");
    }
    if (message.content.indexOf("오른") != -1 || message.content.indexOf("동쪽") != -1) {
        message.react("👉");
    }
    if (message.content.indexOf("엿") != -1 || message.content.indexOf("욕") != -1 || message.content.indexOf("뻐큐") != -1 || message.content.indexOf("중지") != -1) {
        message.react("🖕");
    }
    if (message.content.indexOf("저요") != -1 || message.content.indexOf("저도요") != -1) {
        message.react("🖐");
    }
    if (message.content.indexOf("엿") != -1 || message.content.indexOf("욕") != -1) {
        message.react("🖕");
    }
    if (message.content.indexOf("락") != -1 || message.content.indexOf("롹") != -1 || message.content.indexOf("피스") != -1) {
        message.react("🤘");
    }
    if (message.content.indexOf("유연") != -1 || message.content.indexOf("가위손") != -1) {
        message.react("🖖");
    }
    if (message.content.indexOf("연필") != -1 || message.content.indexOf("써") != -1) {
        message.react("✍");
    }
    if (message.content.indexOf("매니큐어") != -1 || message.content.indexOf("메니큐어") != -1) {
        message.react("💅");
    }
    if (message.content.indexOf("입") != -1) {
        message.react("👄");
    }
    if (message.content.indexOf("메롱") != -1 || message.content.indexOf("혀") != -1 || message.content.indexOf("낼름") != -1 || message.content.indexOf("핥") != -1) {
        message.react("👅");
    }
    if (message.content.indexOf("귀") != -1) {
        message.react("👂");
    }
    if (message.content.indexOf("코") != -1 || message.content.indexOf("킁킁") != -1) {
        message.react("👃");
    }
    if (message.content.indexOf("눈") != -1 || message.content.indexOf("본다") != -1) {
        message.react("👁");
    }
    if (message.content.indexOf("지켜보") != -1) {
        message.react("👀");
    }
    if (message.content.indexOf("누가") != -1 || message.content.indexOf("누구") != -1 || message.content.indexOf("범인") != -1 || message.content.indexOf("그림자") != -1 || message.content.indexOf("놈") != -1) {
        message.react("👤");
    }
    if (message.content.indexOf("누구누구") != -1 || message.content.indexOf("누가누가") != -1 || message.content.indexOf("공범") != -1) {
        message.react("👥");
    }
    if (message.content.indexOf("대화") != -1 || message.content.indexOf("귓속말") != -1) {
        message.react("🗣");
    }
    if (message.content.indexOf("아기") != -1 || message.content.indexOf("애기") != -1 || message.content.indexOf("얼라") != -1 || message.content.indexOf("응애") != -1) {
        message.react("👶");
    }
    if (message.content.indexOf("남자") != -1 || message.content.indexOf("소년") != -1 || message.content.indexOf("남성") != -1) {
        message.react("👦");
    }
    if (message.content.indexOf("여자") != -1 || message.content.indexOf("소녀") != -1 || message.content.indexOf("여성") != -1) {
        message.react("👧");
    }
    if (message.content.indexOf("외국인") != -1 || message.content.indexOf("스티븐") != -1) {
        message.react("👱");
    }
    if (message.content.indexOf("할아버지") != -1 || message.content.indexOf("할배") != -1) {
        message.react("👴");
    }
    if (message.content.indexOf("할머니") != -1 || message.content.indexOf("할매") != -1) {
        message.react("👵");
    }
    if (message.content.indexOf("중국인") != -1 || message.content.indexOf("중궈") != -1 || message.content.indexOf("짱깨") != -1) {
        message.react("👲");
    }
    if (message.content.indexOf("경찰") != -1 || message.content.indexOf("짭새") != -1 || message.content.indexOf("포돌이") != -1 || message.content.indexOf("잡았다") != -1) {
        message.react("👮");
    }
    if (message.content.indexOf("공사") != -1) {
        message.react("👷");
    }
    if (message.content.indexOf("병사") != -1 || message.content.indexOf("호위") != -1 || message.content.indexOf("심슨") != -1) {
        message.react("💂");
    }
    if (message.content.indexOf("스파이") != -1 || message.content.indexOf("수사") != -1) {
        message.react("🕵");
    }
    if (message.content.indexOf("산타") != -1 || message.content.indexOf("크리스마스") != -1) {
        message.react("🎅");
    }
    if (message.content.indexOf("천사") != -1 || message.content.indexOf("착하") != -1) {
        message.react("👼");
    }
    if (message.content.indexOf("신부") != -1 || message.content.indexOf("아내") != -1) {
        message.react("👰");
    }
    if (message.content.indexOf("걸음") != -1 || message.content.indexOf("걷") != -1) {
        message.react("🚶");
    }
    if (message.content.indexOf("달려") != -1 || message.content.indexOf("달리기") != -1 || message.content.indexOf("뛰어") != -1) {
        message.react("🏃");
    }
    if (message.content.indexOf("댄스") != -1 || message.content.indexOf("춤") != -1) {
        message.react("💃");
    }
    if (message.content.indexOf("커플") != -1 || message.content.indexOf("연인") != -1 || message.content.indexOf("썸") != -1) {
        message.react("👫");
    }
    if (message.content.indexOf("아뇨") != -1 || message.content.indexOf("싫") != -1) {
        message.react("🙅");
    }
    if (message.content.indexOf("넵") != -1 || message.content.indexOf("좋") != -1 || message.content.indexOf("그러죠") != -1 || message.content.indexOf("ㅇㅎ") != -1 || message.content.indexOf("ㅇㅈ") != -1) {
        message.react("🙆");
    }
    if (message.content.indexOf("사랑") != -1) {
        message.react("💑");
    }
    if (message.content.indexOf("뽀뽀") != -1 || message.content.indexOf("쪽쪽") != -1) {
        message.react("💏");
    }
    if (message.content.indexOf("가족") != -1) {
        message.react("👪");
    }
    if (message.content.indexOf("식구") != -1) {
        message.react("👨‍👩‍👧‍👦");
    }
    if (message.content.indexOf("셔츠") != -1 || message.content.indexOf("상의") != -1) {
        message.react("👕");
    }
    if (message.content.indexOf("바지") != -1 || message.content.indexOf("하의") != -1) {
        message.react("👖");
    }
    if (message.content.indexOf("정장") != -1 || message.content.indexOf("넥타이") != -1) {
        message.react("👔");
    }
    if (message.content.indexOf("드레스") != -1) {
        message.react("👗");
    }
    if (message.content.indexOf("속옷") != -1 || message.content.indexOf("비키니") != -1) {
        message.react("👙");
    }
    if (message.content.indexOf("기모노") != -1) {
        message.react("👘");
    }
    if (message.content.indexOf("립스틱") != -1) {
        message.react("💄");
    }
    if (message.content.indexOf("키스") != -1 || message.content.indexOf("츄릅") != -1) {
        message.react("💋");
    }
    if (message.content.indexOf("발자국") != -1 || message.content.indexOf("타박") != -1 || message.content.indexOf("터벅") != -1 || message.content.indexOf("흔적") != -1) {
        message.react("👣");
    }
    if (message.content.indexOf("부츠") != -1 || message.content.indexOf("장화") != -1) {
        message.react("👢");
    }
    if (message.content.indexOf("신발") != -1 || message.content.indexOf("운동화") != -1) {
        message.react("👟");
    }
    if (message.content.indexOf("모자") != -1) {
        message.react("👒");
    }
    if (message.content.indexOf("학사모") != -1 || message.content.indexOf("졸업") != -1) {
        message.react("🎓");
    }
    if (message.content.indexOf("왕관") != -1 || message.content.indexOf("크라운") != -1) {
        message.react("👑");
    }
    if (message.content.indexOf("가방") != -1 || message.content.indexOf("베낭") != -1) {
        message.react("🎒");
    }
    if (message.content.indexOf("안경") != -1 || message.content.indexOf("코난") != -1) {
        message.react("👓");
    }
    if (message.content.indexOf("선글라스") != -1 || message.content.indexOf("썬글라스") != -1) {
        message.react("🕶");
    }
    if (message.content.indexOf("반지") != -1) {
        message.react("💍");
    }
    if (message.content.indexOf("우산") != -1 || message.content.indexOf("비양") != -1 || message.content.indexOf("뱡") != -1) {
        message.react("🌂");
        message.react("☂");
        message.react("☔");
    }
    if (message.content.indexOf("카우보이") != -1 || message.content.indexOf("서부") != -1 || message.content.indexOf("총잡이") != -1) {
        message.react("🤠");
    }
    if (message.content.indexOf("삐에로") != -1 || message.content.indexOf("광대") != -1 || message.content.indexOf("서커스") != -1) {
        message.react("🤡");
    }
    if (message.content.indexOf("더부룩") != -1 || message.content.indexOf("오바이트") != -1 || message.content.indexOf("구토") != -1) {
        message.react("🤢");
    }
    if (message.content.indexOf("개웃") != -1 || message.content.indexOf("존웃") != -1 || message.content.indexOf("엌") != -1 || message.content.indexOf("ㅋㅋ") != -1) {
        message.react("🤣");
    }
    if (message.content.indexOf("맛있") != -1 || message.content.indexOf("꿀꺽") != -1) {
        message.react("🤤");
    }
    if (message.content.indexOf("거짓말") != -1 || message.content.indexOf("구라") != -1) {
        message.react("🤥");
    }
    if (message.content.indexOf("왕") != -1 || message.content.indexOf("프린스") != -1) {
        message.react("🤴");
    }
    if (message.content.indexOf("혈압") != -1 || message.content.indexOf("뒷골") != -1) {
        message.react("🤦");
    }
    if (message.content.indexOf("왜요") != -1 || message.content.indexOf("왜죠") != -1 || message.content.indexOf("왜지") != -1) {
        message.react("🤷");
    }
    if (message.content.indexOf("임신") != -1) {
        message.react("🤰");
    }
    if (message.content.indexOf("셀카") != -1 || message.content.indexOf("폰") != -1) {
        message.react("🤳");
    }
    if (message.content.indexOf("약속") != -1 || message.content.indexOf("전화") != -1) {
        message.react("🤙");
    }
    if (message.content.indexOf("굿럭") != -1 || message.content.indexOf("행운") != -1) {
        message.react("🤞");
    }
    if (message.content.indexOf("개") != -1 || message.content.indexOf("강아지") != -1 || message.content.indexOf("멍멍") != -1) {
        message.react("🐶");
    }
    if (message.content.indexOf("고양이") != -1 || message.content.indexOf("냐아") != -1 || message.content.indexOf("냐옹") != -1 || message.content.indexOf("야옹") != -1) {
        message.react("🐱");
    }
    if (message.content.indexOf("쥐") != -1 || message.content.indexOf("제리") != -1 || message.content.indexOf("찍찍") != -1) {
        message.react("🐭");
    }
    if (message.content.indexOf("햄스터") != -1 || message.content.indexOf("에비츄") != -1) {
        message.react("🐹");
    }
    if (message.content.indexOf("토끼") != -1 || message.content.indexOf("끼토산") != -1) {
        message.react("🐰");
    }
    if (message.content.indexOf("곰") != -1 || message.content.indexOf("베어") != -1) {
        message.react("🐻");
    }
    if (message.content.indexOf("판다") != -1) {
        message.react("🐼");
    }
    if (message.content.indexOf("코알라") != -1) {
        message.react("🐨");
    }
    if (message.content.indexOf("호랑이") != -1 || message.content.indexOf("타이거") != -1) {
        message.react("🐯");
    }
    if (message.content.indexOf("사자") != -1 || message.content.indexOf("라이온") != -1 || message.content.indexOf("라이언") != -1) {
        message.react("🦁");
    }
    if (message.content.indexOf("젖소") != -1 || message.content.indexOf("음메") != -1) {
        message.react("🐮");
    }
    if (message.content.indexOf("돼지") != -1 || message.content.indexOf("꿀꿀") != -1) {
        message.react("🐷");
    }
    if (message.content.indexOf("개구리") != -1) {
        message.react("🐸");
    }
    if (message.content.indexOf("흠") != -1 || message.content.indexOf("흐음") != -1 || message.content.indexOf("생각") != -1) {
        message.react("🤔");
    }
    if (message.content.indexOf("화난") != -1 || message.content.indexOf("화나") != -1 || message.content.indexOf("화가난") != -1 || message.content.indexOf("화가나") != -1) {
        message.react("😡");
    }
    if (message.content.indexOf("엉엉") != -1 || message.content.indexOf("흑흑") != -1 || message.content.indexOf("ㅠㅠ") != -1 || message.content.indexOf("ㅠㅜ") != -1 || message.content.indexOf("ㅜㅜ") != -1) {
        message.react("😭");
    }
    if (message.content.indexOf("힘들") != -1 || message.content.indexOf("힘든") != -1) {
        message.react("😖");
    }
    if (message.content.indexOf("글쿤") != -1 || message.content.indexOf("ㅎㅎ") != -1 || message.content.indexOf("ㄱㅋ") != -1) {
        message.react("😏");
    }
    if (message.content.indexOf("흥") != -1) {
        message.react("😤");
    }
    if (message.content.indexOf("헉") != -1 || message.content.indexOf("엥") != -1) {
        message.react("😮");
    }
    if (message.content.indexOf("쉿") != -1 || message.content.indexOf("조용히") != -1) {
        message.react("🤐");
    }
    if (message.content.indexOf("안대") != -1 || message.content.indexOf("안돼") != -1) {
        message.react("😵");
    }
    if (message.content.indexOf("문어") != -1 || message.content.indexOf("옥토퍼스") != -1) {
        message.react("🐙");
    }
    if (message.content.indexOf("무궁화 꽃이") != -1 || message.content.indexOf("무궁화꽃이") != -1) {
        message.react("🙈");
    }
    if (message.content.indexOf("피었습니다") != -1 || message.content.indexOf("까꿍") != -1) {
        message.react("🙉");
    }
    if (message.content.indexOf("원숭") != -1 || message.content.indexOf("몽키") != -1) {
        message.react("🐒");
    }
    if (message.content.indexOf("닭") != -1 || message.content.indexOf("탉") != -1 || message.content.indexOf("꼬끼오") != -1) {
        message.react("🐔");
    }
    if (message.content.indexOf("펭귄") != -1 || message.content.indexOf("핑구") != -1) {
        message.react("🐧");
    }
    if (message.content.indexOf("새") != -1 || message.content.indexOf("짹짹") != -1) {
        message.react("🐦");
    }
    if (message.content.indexOf("병아리") != -1 || message.content.indexOf("삐약") != -1) {
        message.react("🐣");
    }
    if (message.content.indexOf("늑대") != -1 || message.content.indexOf("울프") != -1) {
        message.react("🐺");
    }
    if (message.content.indexOf("멧돼지") != -1 || message.content.indexOf("파이어보어") != -1) {
        message.react("🐗");
    }
    if (message.content.indexOf("말") != -1 || message.content.indexOf("이히히") != -1 || message.content.indexOf("이히힝") != -1) {
        message.react("🐴");
    }
    if (message.content.indexOf("유니콘") != -1 || message.content.indexOf("포니") != -1) {
        message.react("🦄");
    }
    if (message.content.indexOf("벌") != -1 || message.content.indexOf("윙윙") != -1) {
        message.react("🐝");
    }
    if (message.content.indexOf("애벌레") != -1) {
        message.react("🐛");
    }
    if (message.content.indexOf("달팽이") != -1) {
        message.react("🐌");
    }
    if (message.content.indexOf("무당벌레") != -1) {
        message.react("🐞");
    }
    if (message.content.indexOf("개미") != -1) {
        message.react("🐜");
    }
    if (message.content.indexOf("거미") != -1 || message.content.indexOf("스파이더") != -1) {
        message.react("🕷");
    }
    if (message.content.indexOf("전갈") != -1) {
        message.react("🦂");
    }
    if (message.content.indexOf("꽃게") != -1 || message.content.indexOf("대게") != -1) {
        message.react("🦀");
    }
    if (message.content.indexOf("뱀") != -1 || message.content.indexOf("스네이크") != -1) {
        message.react("🐍");
    }
    if (message.content.indexOf("거북") != -1 || message.content.indexOf("터틀") != -1) {
        message.react("🐢");
    }
    if (message.content.indexOf("열대어") != -1) {
        message.react("🐠");
    }
    if (message.content.indexOf("물고기") != -1 || message.content.indexOf("피쉬") != -1) {
        message.react("🐟");
    }
    if (message.content.indexOf("복어") != -1) {
        message.react("🐡");
    }
    if (message.content.indexOf("돌고래") != -1 || message.content.indexOf("돌핀") != -1 || message.content.indexOf("도루") != -1) {
        message.react("🐬");
    }
    if (message.content.indexOf("웨일") != -1 || message.content.indexOf("물뿜") != -1) {
        message.react("🐳");
    }
    if (message.content.indexOf("표범") != -1 || message.content.indexOf("치타") != -1) {
        message.react("🐆");
    }
    if (message.content.indexOf("물소") != -1) {
        message.react("🐃");
    }
    if (message.content.indexOf("황소") != -1) {
        message.react("🐂");
    }
    if (message.content.indexOf("낙타") != -1 || message.content.indexOf("메르스") != -1) {
        message.react("🐫");
    }
    if (message.content.indexOf("코끼리") != -1) {
        message.react("🐘");
    }
    if (message.content.indexOf("염소") != -1) {
        message.react("🐐");
    }
    if (message.content.indexOf("양") != -1) {
        message.react("🐑");
    }
    if (message.content.indexOf("칠면조") != -1) {
        message.react("🦃");
    }
    if (message.content.indexOf("비둘기") != -1 || message.content.indexOf("평화") != -1) {
        message.react("🕊");
    }
    if (message.content.indexOf("푸들") != -1) {
        message.react("🐩");
    }
    if (message.content.indexOf("다람쥐") != -1 || message.content.indexOf("청솔모") != -1) {
        message.react("🐿");
    }
    if (message.content.indexOf("용") != -1 || message.content.indexOf("드래곤") != -1) {
        message.react("🐉");
    }
    if (message.content.indexOf("선인장") != -1 || message.content.indexOf("사막") != -1) {
        message.react("🌵");
    }
    if (message.content.indexOf("트리") != -1 || message.content.indexOf("성탄절") != -1) {
        message.react("🎄");
    }
    if (message.content.indexOf("나무") != -1) {
        message.react("🌳");
    }
    if (message.content.indexOf("야자수") != -1) {
        message.react("🌴");
    }
    if (message.content.indexOf("새싹") != -1) {
        message.react("🌱");
    }
    if (message.content.indexOf("허브") != -1) {
        message.react("🌿");
    }
    if (message.content.indexOf("네잎클로버") != -1 || message.content.indexOf("행운") != -1) {
        message.react("🍀");
    }
    if (message.content.indexOf("나뭇잎") != -1 || message.content.indexOf("낙엽") != -1) {
        message.react("🍃");
    }
    if (message.content.indexOf("무궁화") != -1 || message.content.indexOf("꽃") != -1) {
        message.react("🌺");
    }
    if (message.content.indexOf("해바라기") != -1) {
        message.react("🌻");
    }
    if (message.content.indexOf("꽃다발") != -1) {
        message.react("💐");
    }
    if (message.content.indexOf("버섯") != -1 || message.content.indexOf("머쉬룸") != -1) {
        message.react("🍄");
    }
    if (message.content.indexOf("밤") != -1) {
        message.react("🌰");
    }
    if (message.content.indexOf("호박") != -1 || message.content.indexOf("잭오랜턴") != -1) {
        message.react("🎃");
    }
    if (message.content.indexOf("소라") != -1) {
        message.react("🐚");
    }
    if (message.content.indexOf("거미줄") != -1) {
        message.react("🕸");
    }
    if (message.content.indexOf("지구") != -1) {
        message.react("🌎");
    }
    if (message.content.indexOf("달") != -1) {
        message.react("🌕");
        message.react("🌙");
    }
    if (message.content.indexOf("해") != -1 || message.content.indexOf("햇빛") != -1) {
        message.react("🌞");
    }
    if (message.content.indexOf("별") != -1 || message.content.indexOf("스타") != -1) {
        message.react("⭐");
    }
    if (message.content.indexOf("유성") != -1 || message.content.indexOf("혜성") != -1 || message.content.indexOf("운석") != -1) {
        message.react("☄");
    }
    if (message.content.indexOf("번개") != -1 || message.content.indexOf("전기") != -1 || message.content.indexOf("볼트") != -1) {
        message.react("⚡");
    }
    if (message.content.indexOf("불") != -1 || message.content.indexOf("뜨겁") != -1 || message.content.indexOf("뜨거") != -1) {
        message.react("🔥");
    }
    if (message.content.indexOf("눉") != -1 || message.content.indexOf("스노우") != -1) {
        message.react("❄");
    }
    if (message.content.indexOf("눈사람") != -1 || message.content.indexOf("스노우맨") != -1) {
        message.react("⛄");
    }
    if (message.content.indexOf("휴") != -1) {
        message.react("🌬");
    }
    if (message.content.indexOf("태풍") != -1 || message.content.indexOf("토네이도") != -1 || message.content.indexOf("사이클론") != -1 || message.content.indexOf("회오리") != -1) {
        message.react("🌪");
    }
    if (message.content.indexOf("물") != -1) {
        message.react("💧");
    }
    if (message.content.indexOf("워터") != -1) {
        message.react("💦");
    }
    if (message.content.indexOf("파도") != -1 || message.content.indexOf("해일") != -1) {
        message.react("🌊");
    }
    if (message.content.indexOf("이글") != -1) {
        message.react("🦅");
    }
    if (message.content.indexOf("오리") != -1 || message.content.indexOf("덕") != -1) {
        message.react("🦆");
    }
    if (message.content.indexOf("박쥐") != -1) {
        message.react("🦇");
    }
    if (message.content.indexOf("상어") != -1 || message.content.indexOf("샤크") != -1) {
        message.react("🦈");
    }
    if (message.content.indexOf("올빼미") != -1 || message.content.indexOf("부엉이") != -1) {
        message.react("🦉");
    }
    if (message.content.indexOf("여우") != -1) {
        message.react("🦊");
    }
    if (message.content.indexOf("나비") != -1 || message.content.indexOf("나방") != -1) {
        message.react("🦋");
    }
    if (message.content.indexOf("사슴") != -1 || message.content.indexOf("루돌프") != -1) {
        message.react("🦌");
    }
    if (message.content.indexOf("고릴라") != -1 || message.content.indexOf("우가우가") != -1) {
        message.react("🦍");
    }
    if (message.content.indexOf("도마뱀") != -1) {
        message.react("🦎");
    }
    if (message.content.indexOf("코뿔소") != -1) {
        message.react("🦏");
    }
    if (message.content.indexOf("시들") != -1 || message.content.indexOf("시든") != -1 || message.content.indexOf("익을수록 고개를") != -1) {
        message.react("🥀");
    }
    if (message.content.indexOf("새우") != -1) {
        message.react("🦐");
    }
    if (message.content.indexOf("오징어") != -1) {
        message.react("🦑");
    }
    if (message.content.indexOf("사과") != -1 || message.content.indexOf("애플") != -1) {
        message.react("🍏");
        message.react("🍎");
    }
    if (message.content.indexOf("오렌지") != -1 || message.content.indexOf("귤") != -1) {
        message.react("🍊");
    }
    if (message.content.indexOf("레몬") != -1) {
        message.react("🍋");
    }
    if (message.content.indexOf("바나나") != -1 || message.content.indexOf("반하나") != -1) {
        message.react("🍌");
    }
    if (message.content.indexOf("수박") != -1) {
        message.react("🍉");
    }
    if (message.content.indexOf("포도") != -1) {
        message.react("🍇");
    }
    if (message.content.indexOf("딸기") != -1) {
        message.react("🍓");
    }
    if (message.content.indexOf("메론") != -1 || message.content.indexOf("멜론") != -1) {
        message.react("🍈");
    }
    if (message.content.indexOf("체리") != -1 || message.content.indexOf("앵두") != -1) {
        message.react("🍒");
    }
    if (message.content.indexOf("복숭아") != -1) {
        message.react("🍑");
    }
    if (message.content.indexOf("파인애플") != -1) {
        message.react("🍍");
    }
    if (message.content.indexOf("감") != -1) {
        message.react("🍅");
    }
    if (message.content.indexOf("가지") != -1) {
        message.react("🍆");
    }
    if (message.content.indexOf("고추") != -1 || message.content.indexOf("매운") != -1 || message.content.indexOf("매워") != -1 || message.content.indexOf("맵네") != -1) {
        message.react("🌶");
    }
    if (message.content.indexOf("옥수수") != -1 || message.content.indexOf("콘") != -1) {
        message.react("🌽");
    }
    if (message.content.indexOf("고구마") != -1) {
        message.react("🍠");
    }
    if (message.content.indexOf("꿀") != -1 || message.content.indexOf("허니") != -1) {
        message.react("🍯");
    }
    if (message.content.indexOf("식빵") != -1 || message.content.indexOf("토스트") != -1) {
        message.react("🍞");
    }
    if (message.content.indexOf("치즈") != -1 || message.content.indexOf("모짜렐라") != -1) {
        message.react("🧀");
    }
    if (message.content.indexOf("치킨") != -1 || message.content.indexOf("통닭") != -1) {
        message.react("🍗");
        message.react("🍖");
    }
    if (message.content.indexOf("튀김") != -1) {
        message.react("🍤");
    }
    if (message.content.indexOf("계란") != -1 || message.content.indexOf("프라이") != -1) {
        message.react("🍳");
    }
    if (message.content.indexOf("햄버거") != -1 || message.content.indexOf("롯데리아") != -1 || message.content.indexOf("맥도날드") != -1 || message.content.indexOf("버거킹") != -1 || message.content.indexOf("맘스터치") != -1) {
        message.react("🍔");
    }
    if (message.content.indexOf("감자튀김") != -1 || message.content.indexOf("감튀") != -1) {
        message.react("🍟");
    }
    if (message.content.indexOf("핫도그") != -1 || message.content.indexOf("뜨거운 개") != -1) {
        message.react("🌭");
    }
    if (message.content.indexOf("피자") != -1) {
        message.react("🍕");
    }
    if (message.content.indexOf("스파게티") != -1) {
        message.react("🍝");
    }
    if (message.content.indexOf("타코") != -1) {
        message.react("🌮");
    }
    if (message.content.indexOf("브리또") != -1) {
        message.react("🌯");
    }
    if (message.content.indexOf("라면") != -1 || message.content.indexOf("국수") != -1) {
        message.react("🍜");
    }
    if (message.content.indexOf("스튜") != -1) {
        message.react("🍲");
    }
    if (message.content.indexOf("어묵") != -1) {
        message.react("🍥");
    }
    if (message.content.indexOf("초밥") != -1 || message.content.indexOf("스시") != -1) {
        message.react("🍣");
    }
    if (message.content.indexOf("도시락") != -1 || message.content.indexOf("식도락") != -1) {
        message.react("🍱");
    }
    if (message.content.indexOf("카레") != -1) {
        message.react("🍛");
    }
    if (message.content.indexOf("삼각 김밥") != -1 || message.content.indexOf("삼각김밥") != -1 || message.content.indexOf("주먹밥") != -1) {
        message.react("🍙");
    }
    if (message.content.indexOf("밥") != -1 || message.content.indexOf("쌀") != -1) {
        message.react("🍚");
    }
    if (message.content.indexOf("크래커") != -1 || message.content.indexOf("과자") != -1) {
        message.react("🍘");
    }
    if (message.content.indexOf("오뎅") != -1) {
        message.react("🍢");
    }
    if (message.content.indexOf("떡") != -1) {
        message.react("🍡");
    }
    if (message.content.indexOf("아이스크림") != -1) {
        message.react("🍧");
        message.react("🍨");
        message.react("🍦");
    }
    if (message.content.indexOf("케이크") != -1 || message.content.indexOf("케잌") != -1) {
        message.react("🍰");
        message.react("🎂");
    }
    if (message.content.indexOf("푸딩") != -1) {
        message.react("🍮");
    }
    if (message.content.indexOf("사탕") != -1 || message.content.indexOf("캔디") != -1) {
        message.react("🍬");
        message.react("🍭");
    }
    if (message.content.indexOf("초코") != -1 || message.content.indexOf("초콜릿") != -1 || message.content.indexOf("촤커") != -1) {
        message.react("🍫");
    }
    if (message.content.indexOf("팝콘") != -1) {
        message.react("🍿");
    }
    if (message.content.indexOf("도넛") != -1 || message.content.indexOf("도너츠") != -1) {
        message.react("🍩");
    }
    if (message.content.indexOf("쿠키") != -1) {
        message.react("🍪");
    }
    if (message.content.indexOf("맥주") != -1 || message.content.indexOf("술") != -1) {
        message.react("🍺");
        message.react("🍻");
    }
    if (message.content.indexOf("와인") != -1) {
        message.react("🍷");
    }
    if (message.content.indexOf("칵테일") != -1) {
        message.react("🍸");
    }
    if (message.content.indexOf("주스") != -1 || message.content.indexOf("쥬스") != -1 || message.content.indexOf("음료") != -1) {
        message.react("🍹");
    }
    if (message.content.indexOf("샴페인") != -1) {
        message.react("🍾");
    }
    if (message.content.indexOf("소주") != -1 || message.content.indexOf("술") != -1) {
        message.react("🍶");
    }
    if (message.content.indexOf("녹차") != -1) {
        message.react("🍵");
    }
    if (message.content.indexOf("커피") != -1 || message.content.indexOf("카페인") != -1) {
        message.react("☕");
    }
    if (message.content.indexOf("분유") != -1) {
        message.react("🍼");
    }
    if (message.content.indexOf("포크") != -1 || message.content.indexOf("나이프") != -1) {
        message.react("🍴");
    }
    if (message.content.indexOf("크로와상") != -1 || message.content.indexOf("빵") != -1) {
        message.react("🥐");
    }
    if (message.content.indexOf("아보카도") != -1) {
        message.react("🥑");
    }
    if (message.content.indexOf("베이컨") != -1) {
        message.react("🥓");
    }
    if (message.content.indexOf("감자") != -1 || message.content.indexOf("포테이토") != -1) {
        message.react("🥔");
    }
    if (message.content.indexOf("당근") != -1) {
        message.react("🥕");
    }
    if (message.content.indexOf("바게트") != -1 || message.content.indexOf("빵") != -1) {
        message.react("🥖");
    }
    if (message.content.indexOf("샐러드") != -1) {
        message.react("🥗");
    }
    if (message.content.indexOf("잡탕") != -1) {
        message.react("🥘");
    }
    if (message.content.indexOf("위스키") != -1) {
        message.react("🥃");
    }
    if (message.content.indexOf("숟가락") != -1 || message.content.indexOf("수저") != -1) {
        message.react("🥄");
    }
    if (message.content.indexOf("알") != -1 || message.content.indexOf("달걀") != -1) {
        message.react("🥚");
    }
    if (message.content.indexOf("우유") != -1) {
        message.react("🥛");
    }
    if (message.content.indexOf("땅콩") != -1) {
        message.react("🥜");
    }
    if (message.content.indexOf("키위") != -1) {
        message.react("🥝");
    }
    if (message.content.indexOf("팬케이크") != -1 || message.content.indexOf("팬케잌") != -1) {
        message.react("🥞");
    }
    if (message.content.indexOf("축구") != -1 || message.content.indexOf("사커") != -1 || message.content.indexOf("박지성") != -1) {
        message.react("⚽");
    }
    if (message.content.indexOf("농구") != -1) {
        message.react("🏀");
    }
    if (message.content.indexOf("미식 축구") != -1 || message.content.indexOf("풋볼") != -1) {
        message.react("🏈");
    }
    if (message.content.indexOf("야구") != -1 || message.content.indexOf("베이스볼") != -1) {
        message.react("⚾");
    }
    if (message.content.indexOf("테니스") != -1) {
        message.react("🎾");
    }
    if (message.content.indexOf("럭비") != -1) {
        message.react("🏉");
    }
    if (message.content.indexOf("당구") != -1 || message.content.indexOf("8번") != -1) {
        message.react("🎱");
    }
    if (message.content.indexOf("골프") != -1) {
        message.react("⛳");
    }
    if (message.content.indexOf("탁구") != -1) {
        message.react("🏓");
    }
    if (message.content.indexOf("배드민턴") != -1 || message.content.indexOf("베드민턴") != -1) {
        message.react("🏸");
    }
    if (message.content.indexOf("하키") != -1) {
        message.react("🏒");
    }
    if (message.content.indexOf("스키") != -1) {
        message.react("🎿");
    }
    if (message.content.indexOf("스노우보드") != -1 || message.content.indexOf("스노우 보드") != -1) {
        message.react("🏂");
    }
    if (message.content.indexOf("스케이트") != -1) {
        message.react("⛸");
    }
    if (message.content.indexOf("양궁") != -1 || message.content.indexOf("화살") != -1 || message.content.indexOf("활") != -1) {
        message.react("🏹");
    }
    if (message.content.indexOf("낚시") != -1 || message.content.indexOf("피싱") != -1) {
        message.react("🎣");
    }
    if (message.content.indexOf("보트") != -1) {
        message.react("🚣");
    }
    if (message.content.indexOf("수영") != -1 || message.content.indexOf("박태환") != -1) {
        message.react("🏊");
    }
    if (message.content.indexOf("파도타기") != -1 || message.content.indexOf("파도 타기") != -1) {
        message.react("🏄");
    }
    if (message.content.indexOf("목욕") != -1 || message.content.indexOf("씻") != -1) {
        message.react("🛀");
    }
    if (message.content.indexOf("자전거") != -1 || message.content.indexOf("바이클") != -1) {
        message.react("🚴");
    }
    if (message.content.indexOf("트로피") != -1) {
        message.react("🏆");
    }
    if (message.content.indexOf("메달") != -1) {
        message.react("🏅");
    }
    if (message.content.indexOf("티켓") != -1 || message.content.indexOf("입장권") != -1) {
        message.react("🎫");
    }
    if (message.content.indexOf("탈") != -1 || message.content.indexOf("가면") != -1) {
        message.react("🎭");
    }
    if (message.content.indexOf("물감") != -1 || message.content.indexOf("아트") != -1 || message.content.indexOf("파레트") != -1) {
        message.react("🎨");
    }
    if (message.content.indexOf("서커스") != -1) {
        message.react("🎪");
    }
    if (message.content.indexOf("마이크") != -1 || message.content.indexOf("노래") != -1) {
        message.react("🎤");
    }
    if (message.content.indexOf("헤드셋") != -1 || message.content.indexOf("헤드폰") != -1) {
        message.react("🎧");
    }
    if (message.content.indexOf("음악") != -1 || message.content.indexOf("오선줄") != -1) {
        message.react("🎼");
    }
    if (message.content.indexOf("피아노") != -1 || message.content.indexOf("도레미") != -1) {
        message.react("🎹");
    }
    if (message.content.indexOf("색소폰") != -1 || message.content.indexOf("섹소폰") != -1) {
        message.react("🎷");
    }
    if (message.content.indexOf("트럼펫") != -1) {
        message.react("🎺");
    }
    if (message.content.indexOf("기타") != -1) {
        message.react("🎸");
    }
    if (message.content.indexOf("바이올린") != -1) {
        message.react("🎻");
    }
    if (message.content.indexOf("영화") != -1 || message.content.indexOf("컷") != -1) {
        message.react("🎬");
    }
    if (message.content.indexOf("게임") != -1) {
        message.react("🎮");
    }
    if (message.content.indexOf("다트") != -1) {
        message.react("🎯");
    }
    if (message.content.indexOf("주사위") != -1) {
        message.react("🎲");
    }
    if (message.content.indexOf("777") != -1 || message.content.indexOf("슬롯") != -1) {
        message.react("🎰");
    }
    if (message.content.indexOf("볼링") != -1 || message.content.indexOf("스트라이크") != -1) {
        message.react("🎳");
    }
    if (message.content.indexOf("권투") != -1 || message.content.indexOf("복싱") != -1) {
        message.react("🥊");
    }
    if (message.content.indexOf("태권도") != -1) {
        message.react("🥋");
    }
    if (message.content.indexOf("골") != -1) {
        message.react("🥅");
    }
    if (message.content.indexOf("팬싱") != -1 || message.content.indexOf("펜싱") != -1) {
        message.react("🤺");
    }
    if (message.content.indexOf("1등") != -1 || message.content.indexOf("금메달") != -1) {
        message.react("🥇");
    }
    if (message.content.indexOf("2등") != -1 || message.content.indexOf("은메달") != -1) {
        message.react("🥈");
    }
    if (message.content.indexOf("3등") != -1 || message.content.indexOf("동메달") != -1) {
        message.react("🥉");
    }
    if (message.content.indexOf("드럼") != -1) {
        message.react("🥁");
    }
    if (message.content.indexOf("자동차") != -1 || message.content.indexOf("승용차") != -1) {
        message.react("🚗");
    }
    if (message.content.indexOf("택시") != -1 || message.content.indexOf("텍시") != -1) {
        message.react("🚕");
    }
    if (message.content.indexOf("버스") != -1) {
        message.react("🚌");
    }
    if (message.content.indexOf("구급차") != -1 || message.content.indexOf("삐용") != -1) {
        message.react("🚑");
    }
    if (message.content.indexOf("트럭") != -1) {
        message.react("🥞");
    }
    if (message.content.indexOf("오토바이") != -1 || message.content.indexOf("바이시클") != -1) {
        message.react("🏍");
    }
    if (message.content.indexOf("사이렌") != -1 || message.content.indexOf("위잉") != -1) {
        message.react("🚨");
    }
    if (message.content.indexOf("기차") != -1 || message.content.indexOf("크특스") != -1 || message.content.indexOf("KTX") != -1) {
        message.react("🚄");
    }
    if (message.content.indexOf("헬리콥터") != -1 || message.content.indexOf("헬기") != -1) {
        message.react("🚁");
    }
    if (message.content.indexOf("비행기") != -1) {
        message.react("✈");
    }
    if (message.content.indexOf("배") != -1 || message.content.indexOf("여객선") != -1) {
        message.react("⛵");
        message.react("⛴");
    }
    if (message.content.indexOf("로켓") != -1 || message.content.indexOf("로케트") != -1) {
        message.react("🚀");
    }
    if (message.content.indexOf("인공위성") != -1 || message.content.indexOf("인공 위성") != -1) {
        message.react("🛰");
    }
    if (message.content.indexOf("좌석") != -1 || message.content.indexOf("자리") != -1) {
        message.react("💺");
    }
    if (message.content.indexOf("신호등") != -1 || message.content.indexOf("빨간불") != -1 || message.content.indexOf("파란불") != -1 || message.content.indexOf("초록불") != -1) {
        message.react("🚥");
    }
    if (message.content.indexOf("롤러코스터") != -1 || message.content.indexOf("놀이동산") != -1 || message.content.indexOf("에버랜드") != -1) {
        message.react("🎢");
    }
    if (message.content.indexOf("산") != -1) {
        message.react("⛰");
    }
    if (message.content.indexOf("파라솔") != -1 || message.content.indexOf("해변") != -1) {
        message.react("🏖");
    }
    if (message.content.indexOf("학교") != -1 || message.content.indexOf("스쿨") != -1) {
        message.react("🏫");
    }
    if (message.content.indexOf("집") != -1 || message.content.indexOf("하우스") != -1) {
        message.react("🏠");
    }
    if (message.content.indexOf("교회") != -1) {
        message.react("⛪");
    }
    if (message.content.indexOf("폰") != -1 || message.content.indexOf("휴대전화") != -1 || message.content.indexOf("휴대 전화") != -1) {
        message.react("📱");
    }
    if (message.content.indexOf("액정") != -1) {
        message.react("📲");
    }
    if (message.content.indexOf("노트북") != -1 || message.content.indexOf("놋북") != -1 || message.content.indexOf("컴퓨터") != -1) {
        message.react("💻");
    }
    if (message.content.indexOf("키보드") != -1 || message.content.indexOf("자판") != -1) {
        message.react("⌨");
    }
    if (message.content.indexOf("인쇄") != -1 || message.content.indexOf("프린트") != -1 || message.content.indexOf("프린터") != -1) {
        message.react("🖨");
    }
    if (message.content.indexOf("마우스") != -1) {
        message.react("🖱");
    }
    if (message.content.indexOf("조이스틱") != -1) {
        message.react("🕹");
    }
    if (message.content.indexOf("디스크") != -1) {
        message.react("💽");
    }
    if (message.content.indexOf("프로피디스크") != -1 || message.content.indexOf("프로피 디스크") != -1) {
        message.react("💾");
    }
    if (message.content.indexOf("cd") != -1 || message.content.indexOf("CD") != -1) {
        message.react("📀");
    }
    if (message.content.indexOf("카세트테이프") != -1 || message.content.indexOf("카세트 테이프") != -1) {
        message.react("📼");
    }
    if (message.content.indexOf("사진기") != -1 || message.content.indexOf("카메라") != -1) {
        message.react("📷");
    }
    if (message.content.indexOf("필름") != -1 || message.content.indexOf("영화관") != -1) {
        message.react("🎞");
    }
    if (message.content.indexOf("전화") != -1) {
        message.react("☎");
    }
    if (message.content.indexOf("에러") != -1 || message.content.indexOf("오류") != -1) {
        message.react("📟");
    }
    if (message.content.indexOf("팩스") != -1 || message.content.indexOf("팩시밀리") != -1) {
        message.react("📠");
    }
})

testBot.login("NTM5MDU0NTEyMDA3MDIwNTU0.DzG8sQ.PlUFPozwRCmzp06M3iU3dYqHw44");